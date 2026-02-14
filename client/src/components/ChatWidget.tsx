import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const translations = {
  DE: {
    title: "Master Law Assistent",
    subtitle: "Wie können wir Ihnen helfen?",
    placeholder: "Ihre Frage...",
    welcome: "Willkommen bei Master Law! 👋\n\nIch bin Ihr virtueller Assistent und helfe Ihnen gerne bei Fragen zu:\n\n• **Firmengründung in Dubai**\n• **Steuerberatung in Spanien**\n• **Entschuldung / Insolvenz**\n\nWie kann ich Ihnen helfen?",
    suggestions: [
      "Dubai Firmengründung",
      "Steuerberatung Kosten",
      "Entschuldung Spanien",
      "Termin buchen",
    ],
  },
  EN: {
    title: "Master Law Assistant",
    subtitle: "How can we help you?",
    placeholder: "Your question...",
    welcome: "Welcome to Master Law! 👋\n\nI'm your virtual assistant and happy to help with questions about:\n\n• **Company formation in Dubai**\n• **Tax advisory in Spain**\n• **Debt relief / Insolvency**\n\nHow can I help you?",
    suggestions: [
      "Dubai Company Setup",
      "Tax Advisory Costs",
      "Debt Relief Spain",
      "Book Appointment",
    ],
  },
  ES: {
    title: "Asistente Master Law",
    subtitle: "¿Cómo podemos ayudarle?",
    placeholder: "Su pregunta...",
    welcome: "¡Bienvenido a Master Law! 👋\n\nSoy su asistente virtual y estoy encantado de ayudarle con preguntas sobre:\n\n• **Constitución de empresas en Dubái**\n• **Asesoría fiscal en España**\n• **Cancelación de deudas / Insolvencia**\n\n¿Cómo puedo ayudarle?",
    suggestions: [
      "Empresa en Dubái",
      "Costes Asesoría",
      "Insolvencia España",
      "Reservar Cita",
    ],
  },
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang } = useLanguage();
  const t = translations[lang];

  const chatMutation = trpc.chat.send.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    },
    onError: () => {
      const errorMsg = {
        DE: "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter +34 871 24 24 04.",
        EN: "Sorry, there was an error. Please try again or contact us directly at +34 871 24 24 04.",
        ES: "Lo sentimos, hubo un error. Por favor, inténtelo de nuevo o contáctenos directamente al +34 871 24 24 04.",
      };
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMsg[lang] },
      ]);
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatMutation.isPending]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || chatMutation.isPending) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newMessages);
    setInput("");

    chatMutation.mutate({
      messages: newMessages,
      language: lang,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? "bg-zinc-700 hover:bg-zinc-600"
            : "bg-white text-black hover:bg-gray-200"
        }`}
        aria-label="Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{t.title}</h3>
                <p className="text-white/50 text-xs">{t.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Welcome Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                <MessageSquare className="w-4 h-4 text-white/70" />
              </div>
              <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <div className="text-white/80 text-sm prose prose-sm prose-invert max-w-none">
                  <Streamdown>{t.welcome}</Streamdown>
                </div>
              </div>
            </div>

            {/* Suggestion Buttons (only show if no messages yet) */}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pl-11">
                {t.suggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(suggestion)}
                    className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-white/70" />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-white text-black rounded-tr-sm"
                      : "bg-white/5 text-white/80 rounded-tl-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="text-sm prose prose-sm prose-invert max-w-none">
                      <Streamdown>{msg.content}</Streamdown>
                    </div>
                  ) : (
                    <p className="text-sm">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {chatMutation.isPending && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MessageSquare className="w-4 h-4 text-white/70" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-white/50" />
                    <span className="text-white/50 text-xs">
                      {lang === "DE" ? "Schreibt..." : lang === "ES" ? "Escribiendo..." : "Typing..."}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-white/10 bg-zinc-900/80"
          >
            <div className="flex gap-2 items-center bg-white/5 rounded-xl px-3 py-1 border border-white/10 focus-within:border-white/20 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.placeholder}
                className="flex-1 bg-transparent text-white text-sm py-2 outline-none placeholder:text-white/30"
                disabled={chatMutation.isPending}
              />
              <button
                type="submit"
                disabled={!input.trim() || chatMutation.isPending}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {chatMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white/50" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
