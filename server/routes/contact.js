const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

const router = express.Router();

// ── VALIDATION RULES ──
const contactValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 100 }),
  body('phone').trim().notEmpty().withMessage('Phone is required').isLength({ max: 20 }),
  body('email').trim().isEmail().withMessage('Invalid email address').normalizeEmail(),
  body('service').notEmpty().withMessage('Please select a service'),
  body('facilityType').notEmpty().withMessage('Please select a facility type'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
];

// ── MAILER (optional — only sends if SMTP creds are set) ──
async function sendNotificationEmail(contact) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return;
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"HydroDefendSolution" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    subject: `New Contact: ${contact.fullName} — ${contact.service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td><strong>Name</strong></td><td>${contact.fullName}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${contact.phone}</td></tr>
        <tr><td><strong>Email</strong></td><td>${contact.email}</td></tr>
        <tr><td><strong>Service</strong></td><td>${contact.service}</td></tr>
        <tr><td><strong>Facility</strong></td><td>${contact.facilityType}</td></tr>
        <tr><td><strong>Message</strong></td><td>${contact.message}</td></tr>
        <tr><td><strong>Submitted</strong></td><td>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td></tr>
      </table>
    `,
  });
}

// ── POST /api/contact ──
router.post('/', contactValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { fullName, phone, email, service, facilityType, message } = req.body;

    const contact = await Contact.create({ fullName, phone, email, service, facilityType, message });

    // Fire-and-forget email — don't block response
    sendNotificationEmail(contact).catch((err) =>
      console.error('Email send error:', err.message)
    );

    res.status(201).json({
      success: true,
      message: 'Your message has been received. We will get back to you within 24 hours.',
      id: contact._id,
    });
  } catch (err) {
    console.error('Contact save error:', err.message);
    res.status(500).json({ error: 'Could not save your message. Please try again.' });
  }
});

// ── GET /api/contact (admin — basic, no auth for now) ──
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ count: contacts.length, contacts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

module.exports = router;
