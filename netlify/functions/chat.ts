import { Handler } from '@netlify/functions';
import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message } = JSON.parse(event.body || '{}');
    
    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Message is required' }) };
    }

    const modelName = "gemini-1.5-flash"; // Standard stable name

    const response = await genAI.models.generateContent({
      model: modelName,
      contents: [{
        role: "user",
        parts: [{
          text: `You are a helpful and energetic gym assistant for "Fit Rhythm Fitness Studio" located in Vadodara, Gujarat.
          Gym Details:
          - Location: Shukan Hub, Sama-Savli Rd
          - Programs: Strength, Weight Loss, CrossFit, Yoga, Zumba, HIIT
          - Hours: 5:30 AM to 10:30 PM
          - Phone: +91 77780 12790
          
          Answer the user's inquiry concisely and encourage them to book a free trial.
          User inquiry: ${message}`
        }]
      }],
      config: {
        temperature: 0.7,
      } as any
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: response.text }),
    };
  } catch (error) {
    console.error('Netlify Chat Function Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process chat' }),
    };
  }
};

export { handler };
