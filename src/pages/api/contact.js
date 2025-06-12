import dbConnect from "../../../lib/dbConnect";


// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Modeli
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validim bazik
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Të gjitha fushat janë të nevojshme." });
    }

    try {
      await dbConnect();

      const newContact = await Contact.create({ name, email, message });

      return res.status(201).json({ message: "Mesazhi u ruajt me sukses!", data: newContact });
    } catch (error) {
      console.error("Gabim në ruajtje:", error);
      return res.status(500).json({ error: "Gabim në server." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Metoda ${req.method} nuk lejohet` });
  }
}
