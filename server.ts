import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/booking", (req, res) => {
    const { name, phone, email, service, date, time, notes } = req.body;
    console.log("New Booking Received:", { name, phone, email, service, date, time, notes });
    
    // Simulate a successful booking
    res.status(200).json({ 
      success: true, 
      message: "Thank you, " + name + "! Your appointment request has been received. We will contact you shortly to confirm." 
    });
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("New Contact Form Submission:", { name, email, message });
    
    res.status(200).json({ 
      success: true, 
      message: "Message sent successfully! We'll get back to you soon." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
