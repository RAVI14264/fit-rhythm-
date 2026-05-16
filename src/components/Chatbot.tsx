import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'Hello! I am your Fit Rhythm assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Sorry, I am having trouble connecting right now.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="bg-brand-red p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Fit Rhythm AI</h3>
                  <p className="text-[10px] text-white/70 uppercase tracking-widest font-black">Always Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl flex gap-2 ${
                    msg.role === 'user' ? 'bg-brand-red text-white ml-auto' : 'glass text-white/90'
                  }`}>
                    <div className="shrink-0 mt-1">
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-brand-red" />}
                    </div>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="glass p-3 rounded-2xl flex gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-brand-red/50 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-brand-red/50 rounded-full animate-bounce delay-150" />
                      <span className="w-2 h-2 bg-brand-red/50 rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'enter' && handleSend()}
                placeholder="Ask about memberships..."
                className="flex-1 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-red text-white"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="bg-brand-red p-2 rounded-full text-white disabled:opacity-50 hover:scale-110 active:scale-95 transition-transform"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-red w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
