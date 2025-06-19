import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: "All fields are required.",
        details: {
          name: !name ? "Name is required" : null,
          email: !email ? "Email is required" : null,
          message: !message ? "Message is required" : null
        }
      });
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: "Please enter a valid email address." 
      });
    }
    console.log("API called with:", req.body);

    try {
      await dbConnect();

      const newContact = await Contact.create({ 
        name: name.trim(), 
        email: email.trim().toLowerCase(), 
        message: message.trim() 
      });

      return res.status(201).json({ 
        message: "Message sent successfully!", 
        success: true,
        data: {
          id: newContact._id,
          name: newContact.name,
          email: newContact.email,
          createdAt: newContact.createdAt
        }
      });
    } catch (error) {
      console.error("Gabim gjatë ruajtjes në DB:", error);
      return res.status(500).json({ error: "Gabim në server." });
    }
  } else {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return res.status(405).json({ 
      error: `Method ${req.method} not allowed` 
    });
  }
}