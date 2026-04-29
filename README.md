# 🔥 HydroDefendSolution — MERN Stack Website

Fire Safety Audits & Hazard Management company website built with MongoDB, Express, React, and Node.js.

---

## 📁 Project Structure

```
hydrodefend/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Impacts.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTABanner.jsx
│   │   │   ├── Footer.jsx        ← contact form + socials
│   │   │   └── useScrollReveal.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── vite.config.js
│
├── server/                  # Express + MongoDB backend
│   ├── models/
│   │   └── Contact.js       ← Mongoose schema
│   ├── routes/
│   │   └── contact.js       ← POST /api/contact
│   ├── server.js
│   ├── .env.example         ← copy to .env and fill in
│   └── package.json
│
├── package.json             ← root scripts
└── README.md
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
# From the root hydrodefend/ folder:
npm install           # installs concurrently
cd server && npm install
cd ../client && npm install
```

### 2. Configure the server

```bash
cd server
cp .env.example .env
# Edit .env and fill in your MongoDB URI and email credentials
```

**.env fields:**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/hydrodefend
# OR MongoDB Atlas:
# MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/hydrodefend

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password   # Gmail App Password (not your login password)
NOTIFY_EMAIL=contact@hydrodefend.in

CLIENT_URL=http://localhost:5173
```

### 3. Run in development

```bash
# From root (runs both server + client):
npm run dev

# Or separately:
cd server && npm run dev      # http://localhost:5000
cd client && npm run dev      # http://localhost:5173
```

### 4. Build for production

```bash
cd client && npm run build    # outputs to client/dist/
```

Serve `client/dist/` as static files from Express (add `app.use(express.static('dist'))`) or deploy to Vercel/Netlify.

---

## 🔧 Customization Checklist

### Team (already set)
- Ram Kaithwas — Founder & Lead Safety Auditor
- Shrihit Bandawar — Hazard Risk Assessment Expert
- Sujal Wadhankar — Fire Systems Design Engineer
- Pranam Jadhav — Compliance & NOC Consultant

### Update Your Socials — `client/src/components/Footer.jsx`
Find the `SOCIALS` array at the top and replace the `href` values:

```js
const SOCIALS = [
  { label: 'Portfolio', href: 'https://YOUR-PORTFOLIO.com', ... },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/YOUR-PROFILE', ... },
  { label: 'Instagram', href: 'https://instagram.com/YOUR-HANDLE', ... },
  { label: 'WhatsApp',  href: 'https://wa.me/91XXXXXXXXXX', ... },
  { label: 'Email',     href: 'mailto:YOUR@EMAIL.com', ... },
];
```

---

## 📦 Tech Stack

| Layer     | Technology              |
|-----------|------------------------|
| Frontend  | React 18, Vite 5        |
| Styling   | Pure CSS (no framework) |
| Backend   | Node.js, Express 4      |
| Database  | MongoDB + Mongoose      |
| Email     | Nodemailer              |
| Validation| express-validator       |
| Rate Limit| express-rate-limit      |

---

## 📬 Contact Form API

**POST** `/api/contact`

Request body:
```json
{
  "fullName": "John Doe",
  "phone": "+91 98765 43210",
  "email": "john@example.com",
  "service": "Fire Safety Audit",
  "facilityType": "Industrial / Manufacturing",
  "message": "We need an audit for our factory."
}
```

Response (201):
```json
{
  "success": true,
  "message": "Your message has been received. We will get back to you within 24 hours.",
  "id": "6576a1..."
}
```

All submissions are saved to MongoDB and an email notification is sent to `NOTIFY_EMAIL`.

---

## 🌐 Deployment

### Frontend → Vercel / Netlify
- Build command: `npm run build`
- Output directory: `dist`
- Set env var: `VITE_API_URL=https://your-api.com`
- Update `vite.config.js` proxy to point to your deployed API

### Backend → Railway / Render / VPS
- Set all `.env` variables in platform dashboard
- Start command: `node server.js`
- MongoDB: Use MongoDB Atlas free tier

---

Made with 🔥 by HydroDefendSolution
