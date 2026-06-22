import nodemailer from "nodemailer";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed." });
  }

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please fill in your name, email, and message.",
    });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: "Please enter a valid name.",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  if (message.length < 10) {
    return res.status(400).json({
      message: "Please enter a message with at least 10 characters.",
    });
  }

  const emailHost = process.env.EMAIL_HOST;
  const emailPort = Number(process.env.EMAIL_PORT);
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO || "bhavyadesai97@gmail.com";
  const emailSecure = process.env.EMAIL_SECURE === "true";

  if (!emailHost || !emailPort || !emailUser || !emailPass) {
    return res.status(500).json({
      message: "Email service is not configured yet.",
    });
  }

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return res.status(200).json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return res.status(500).json({
      message: "Something went wrong while sending your message.",
    });
  }
}
