import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chatbot Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const model = "gemini-3-flash-preview";
      
      const response = await ai.models.generateContent({
        model,
        contents: [
          {
            role: "user",
            parts: [{ text: `You are a helpful and energetic gym assistant for "Fit Rhythm Fitness Studio" located in Vadodara, Gujarat.
            Gym Details:
            - Location: Shukan Hub, Sama-Savli Rd
            - Programs: Strength, Weight Loss, CrossFit, Yoga, Zumba, HIIT
            - Hours: 5:30 AM to 10:30 PM
            - Phone: +91 77780 12790
            
            Answer the user's inquiry concisely and encourage them to book a free trial.
            User inquiry: ${message}` }]
          }
        ],
        config: {
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "Failed to process chat" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
