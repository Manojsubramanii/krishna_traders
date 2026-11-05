require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// Manual CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// DEBUG
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

app.post("/api/lead", async (req, res) => {
  console.log("🔥 /api/lead HIT");
  console.log("📦 BODY:", req.body);
  
  const { company, name, email, phone, country, message } = req.body;
  
  if (!company || !name || !email || !phone) {
    console.log("❌ Missing fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("✅ Transporter created");
    await transporter.verify();
    console.log("✅ SMTP verified");

    await transporter.sendMail({
      from: `"Website Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Get a Quote Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><b>Company:</b> ${company}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("📧 EMAIL SENT");
    res.json({ success: true });
  } catch (err) {
    console.error("💥 ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("✅ Lead server running on http://localhost:3001");
});