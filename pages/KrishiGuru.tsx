
import React, { useState, useRef } from 'react';
import { chatWithKrishiGuru, analyzeCropImage } from '../services/gemini';
import { ChatMessage } from '../types';

const KrishiGuru: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am your AI Krishi Guru. How can I help you today with your farm or trades?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const history = [...messages, userMsg].map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      const response = await chatWithKrishiGuru(history);
      setMessages(prev => [...prev, { role: 'model', text: response || "I'm not sure, but let's look into it.", timestamp: new Date() }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Forgive me, my connection to the fields is unstable. Try again?", timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(',')[1];
      
      const userMsg: ChatMessage = { role: 'user', text: "[Image Uploaded for Analysis]", timestamp: new Date() };
      setMessages(prev => [...prev, userMsg]);
      setIsTyping(true);

      try {
        const response = await analyzeCropImage(base64);
        setMessages(prev => [...prev, { role: 'model', text: response || "Analysis complete.", timestamp: new Date() }]);
      } catch (err) {
        setMessages(prev => [...prev, { role: 'model', text: "Error analyzing the image. Please ensure it's a clear photo of your plant.", timestamp: new Date() }]);
      } finally {
        setIsTyping(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col h-[80vh]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Krishi Guru AI</h1>
          <p className="text-slate-600">Your expert digital agriculture advisor</p>
        </div>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-green-200 transition"
        >
          <i className="fas fa-camera"></i>
          <span>Analyze Plant</span>
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-y-auto p-6 space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
              msg.role === 'user' 
                ? 'bg-green-700 text-white rounded-tr-none' 
                : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
            }`}>
              <div className="whitespace-pre-wrap leading-relaxed">
                {msg.text}
              </div>
              <div className={`text-[10px] mt-2 opacity-60 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input 
          type="text" 
          placeholder="Ask about crops, pests, or market strategies..." 
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isTyping}
        />
        <button 
          type="submit" 
          disabled={isTyping || !input.trim()}
          className="bg-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-green-800 transition disabled:opacity-50"
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default KrishiGuru;
