import { useEffect, useRef, useState } from 'react';

import { Bot, Send, X } from 'lucide-react';

const GREETING = {
  role: 'assistant',
  content: "Hi! I'm Ayyan's AI assistant. Ask me about his experience, projects, skills, or how to get in touch.",
};

function ChatBot({ isOpen, onOpenChange }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async event => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'Something went wrong.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';
      let hasStartedReply = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });
        if (!chunkText) continue;
        assistantText += chunkText;

        if (!hasStartedReply) {
          hasStartedReply = true;
          setIsLoading(false);
          setMessages(prev => [...prev, { role: 'assistant', content: assistantText }]);
        } else {
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: 'assistant', content: assistantText };
            return updated;
          });
        }
      }

      if (!hasStartedReply) {
        throw new Error("Sorry, I couldn't come up with a response for that.");
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => onOpenChange(open => !open)}
        aria-label={isOpen ? 'Close chat' : 'Open chat with AI assistant'}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-white shadow-[0_10px_30px_rgba(6,182,212,0.4)] transition-transform hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {isOpen && (
        <div className="glass fixed bottom-24 right-6 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/90 light:border-slate-200 light:bg-white">
          <div className="flex items-center gap-3 border-b border-slate-800/50 px-5 py-4 light:border-slate-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
              <Bot size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white light:text-slate-900">Ask about Ayyan</p>
              <p className="text-xs text-slate-500">AI assistant &middot; usually replies instantly</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={
                    message.role === 'user'
                      ? 'max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-cyan-500 to-indigo-600 px-4 py-2.5 text-sm text-white'
                      : 'max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800/60 px-4 py-2.5 text-sm text-slate-200 light:bg-slate-100 light:text-slate-700'
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-slate-800/60 px-4 py-3 light:bg-slate-100">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-slate-400" />
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-slate-400 [animation-delay:0.15s]" />
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-slate-400 [animation-delay:0.3s]" />
                </div>
              </div>
            )}

            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>

          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-slate-800/50 p-3 light:border-slate-200"
          >
            <input
              type="text"
              value={input}
              onChange={event => setInput(event.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none light:border-slate-300 light:bg-slate-50 light:text-slate-900"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 text-white transition-opacity disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;
