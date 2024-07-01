// testmail.js

const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// Configure the transporter with your SMTP settings
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Email content
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'paawan0304@outlook.com', // Replace with your email address for testing
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
