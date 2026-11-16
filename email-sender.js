const nodemailer = require("nodemailer");

async function sendEmail() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "EMAIL_TO"];
  const missing = required.filter((name) => !process.env[name]);
  if (missing.length) {
    console.error(`Set these environment variables before sending: ${missing.join(", ")}`);
    process.exitCode = 1;
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const result = await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: process.env.EMAIL_TO,
    subject: "Hello from Node.js",
    text: "Hello Node! This message was sent with Nodemailer.",
  });
  console.log(`Email sent: ${result.messageId}`);
}

sendEmail().catch((error) => {
  console.error("Email could not be sent:", error.message);
  process.exitCode = 1;
});
