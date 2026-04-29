const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Name too long'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxlength: [20, 'Phone number too long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
    },
    service: {
      type: String,
      required: [true, 'Please select a service'],
      enum: [
        'Fire Safety Audit',
        'Hazard Risk Assessment',
        'Fire NOC Consultancy',
        'Fire Suppression Design Review',
        'Emergency Evacuation Planning',
        'Industrial Safety Compliance',
        'Fire Safety Training',
        'Other',
      ],
    },
    facilityType: {
      type: String,
      required: [true, 'Please select facility type'],
      enum: [
        'Industrial / Manufacturing',
        'Healthcare / Hospital',
        'Commercial / IT Park',
        'Educational Institution',
        'Warehouse / Logistics',
        'Hospitality / Hotel',
        'Residential Complex',
        'Food Processing',
        'Other',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message too long'],
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
