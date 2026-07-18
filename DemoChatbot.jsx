import { useEffect, useRef, useState } from "react";
import Logo from "./Logo.jsx";

const QUICK_REPLIES = ["Check pricing", "Talk in Hindi", "Book a demo"];

const BOT_RESPONSES = {
  "Check pricing":
    "Our chatbot plans start from ₹999/mo. The exact amount — the effective price — depends on your region and any active offers, and is shown before you confirm.",
  "Talk in Hindi":
    "ज़रूर! ChatSetu आपकी पसंदीदा भाषा में जवाब दे सकता है — हिंदी, मराठी, तमिल और भी कई भाषाओं में।",
  "Book a demo":
    "Happy to set one up. Share your city and preferred time, and a specialist will reach out within a business day.",
  default:
    "Got it — a specialist can go deeper on that. Want me to connect you, or would you like to see pricing first?",
};

function botReplyFor(text) {
  const trimmed = text.trim();
  if (BOT_RESPONSES[trimmed]) return BOT_RESPONSES[trimmed];
  const lower = trimmed.toLowerCase();
  if (lower.includes("price") || lower.includes("cost")) return BOT_RESPONSES["Check pricing"];
  if (lower.includes("hindi") || lower.includes("language")) return BOT_RESPONSES["Talk in Hindi"];
  if (lower.includes("demo") || lower.includes("call")) return BOT_RESPONSES["Book a demo"];
  return BOT_RESPONSES.default;
}

export default function DemoChatbot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I'm the ChatSetu demo bot 👋 Ask me about pricing, languages, or booking a demo.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage(text) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReplyFor(text) }]);
      setTyping(false);
    }, 700);
  }

  return (
    <div className="w-full max-w-sm bg-surface border border-line rounded-2xl shadow-xl overflow-hidden flex flex-col h-[26rem]">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-line bg-ink">
        <Logo withWordmark={false} size={28} />
        <div className="leading-tight">
          <p className="text-white text-sm font-semibold font-display">ChatSetu Assistant</p>
          <p className="text-teal text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
            Online now
          </p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-bg">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-snug ${
                m.from === "user"
                  ? "bg-teal text-white rounded-br-sm"
                  : "bg-white text-ink border border-line rounded-bl-sm"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-white border border-line px-3.5 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:-0.2s]" />
              <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce [animation-delay:-0.1s]" />
              <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Quick replies */}
      <div className="flex flex-wrap gap-2 px-4 pb-2 pt-1 bg-bg">
        {QUICK_REPLIES.map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            className="text-xs font-medium border border-teal text-teal-dark px-3 py-1.5 rounded-bridge hover:bg-teal-light transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="flex items-center gap-2 border-t border-line px-3 py-2.5 bg-surface"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
          aria-label="Type a message to the demo bot"
          className="flex-1 text-sm px-3 py-2 rounded-bridge border border-line focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        />
        <button
          type="submit"
          className="bg-ink text-white text-sm font-medium px-4 py-2 rounded-bridge hover:bg-teal-dark transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
