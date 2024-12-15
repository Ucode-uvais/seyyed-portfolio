import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Load environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const sendMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER, // Dedicated sender email account
      pass: EMAIL_PASSWORD, // Use the generated app password here
    },
  });

  // Set up email data
  const mailOptions = {
    from: `Website Contact Form <${EMAIL_USER}>`, // Shows email sent from dedicated sender email account
    replyTo: email, // This allows replies to go directly to the user's email
    to: "seyyeduvais@gmail.com", // Your email to receive the messages
    subject: `Message from ${name}`,
    text: `You have received a new message from ${email}:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send message" });
  }
};

export default sendMessage;
