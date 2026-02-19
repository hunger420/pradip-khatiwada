
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMarketInsights = async (commodity: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide the latest market price and supply trends for ${commodity} in Nepal markets like Kalimati or Pokhara. Be specific about prices in Nepalese Rupees (NPR).`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No specific data found.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return {
      text,
      sources: chunks.map((c: any) => ({
        title: c.web?.title || 'Source',
        uri: c.web?.uri
      }))
    };
  } catch (error) {
    console.error("Gemini Market Insight Error:", error);
    throw error;
  }
};

export const analyzeCropImage = async (base64Image: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
          { text: "Identify the crop in this image and diagnose any visible pests or diseases. Provide organic and local solutions for farmers in Nepal." }
        ]
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Image Analysis Error:", error);
    throw error;
  }
};

export const chatWithKrishiGuru = async (history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are 'Krishi Guru', a wise agricultural expert for Nepalese farmers. You provide advice on crop selection, organic farming, government subsidies in Nepal, and market strategy. Use a friendly, encouraging tone. You can speak in a mix of English and Nepali if requested.",
      }
    });
    
    // We send only the last message for simplicity in this helper, but the chat instance could handle history
    const lastMessage = history[history.length - 1].parts[0].text;
    const response = await chat.sendMessage({ message: lastMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    throw error;
  }
};
