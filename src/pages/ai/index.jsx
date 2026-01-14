import { Send, Bot, User, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendMessageToAI } from "../../services/aiService";
import "./styles.css";

const AITalkingAvatar = () => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-red-flag)] to-[#8B0000] shadow-lg border-2 border-[var(--color-yellow-star)]">
      <Bot className="text-white w-6 h-6" />
    </div>
  );
};

const AIResponse = ({ text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full flex gap-4 mb-6"
    >
      <div className="shrink-0 mt-1">
        <AITalkingAvatar />
      </div>
      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl rounded-tl-sm shadow-sm border border-black/5 max-w-[85%] md:max-w-[75%]">
        <p className="text-gray-800 font-body leading-relaxed whitespace-pre-wrap">{text}</p>
      </div>
    </motion.div>
  );
};

const UserPrompt = ({ text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full flex items-center justify-end gap-3 mb-6"
    >
      <div className="p-4 bg-[var(--color-brown-heritage)] text-white rounded-2xl rounded-tr-sm shadow-md max-w-[80%] md:max-w-[70%]">
        <p className="break-words font-body leading-relaxed">{text}</p>
      </div>
      <div className="shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white shadow-sm">
        <User className="text-gray-500 w-5 h-5" />
      </div>
    </motion.div>
  );
};

const AIPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "ai",
      text: `Chào bạn, mình là Tèo. Mình hỗ trợ giải thích tư tưởng Hồ Chí Minh về con đường quá độ lên chủ nghĩa xã hội ở Việt Nam, đặc biệt khái niệm "bỏ qua chế độ tư bản chủ nghĩa". Bạn muốn tìm hiểu gì hôm nay?`,
    },
  ]);
  const inputRef = useRef();
  // Use a ref callback to scroll to bottom reliably
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage || isLoading) {
      return;
    }

    const newUserMsg = { role: "user", text: userMessage };
    setChatHistory((prev) => [...prev, newUserMsg]);

    inputRef.current.value = "";
    setIsLoading(true);

    // Initial dummy loading state
    const loadingMsg = { role: "ai", text: "...", isLoading: true };
    setChatHistory((prev) => [...prev, loadingMsg]);

    try {
      const formattedHistory = chatHistory.map((msg) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text,
      }));

      // Append current user message
      formattedHistory.push({ role: "user", content: userMessage });

      const response = await sendMessageToAI(userMessage, formattedHistory);

      setChatHistory((prev) => {
        // Remove loading message and add real response
        const newHistory = prev.filter(msg => !msg.isLoading);
        return [...newHistory, { role: "ai", text: response }];
      });
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => {
        const newHistory = prev.filter(msg => !msg.isLoading);
        return [...newHistory, {
          role: "ai",
          text: "Xin lỗi, Tèo đang gặp chút sự cố kết nối. Bạn thử lại sau nhé!",
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 bg-[#F5F5DC] flex flex-col items-center">
      <div className="w-full max-w-4xl flex-1 flex flex-col h-[calc(100vh-140px)]">
        
        {/* Header Section */}
        <div className="text-center mb-6 shrink-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-[var(--color-red-flag)]/20 text-[var(--color-red-flag)] font-bold text-sm mb-2 shadow-sm">
            <Sparkles size={16} />
            <span>Trợ lý ảo Tư tưởng Hồ Chí Minh</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black font-display text-[var(--color-charcoal)] uppercase">
            Hỏi đáp cùng <span className="text-[var(--color-red-flag)]">AI TÈO</span>
          </h1>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden flex flex-col relative">
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth custom-scrollbar">
            <AnimatePresence>
              {chatHistory.map((msg, index) => (
                <div key={index}>
                  {msg.role === "ai" ? (
                    <AIResponse text={msg.text} />
                  ) : (
                    <UserPrompt text={msg.text} />
                  )}
                </div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/80 border-t border-gray-100 backdrop-blur-md shrink-0">
            <form
              onSubmit={handleFormSubmit}
              className="relative flex items-center gap-2 max-w-3xl mx-auto"
            >
              <input
                ref={inputRef}
                type="text"
                disabled={isLoading}
                placeholder="Ví dụ: Quan điểm về 'bỏ qua' chế độ tư bản chủ nghĩa là gì?"
                className="w-full pl-6 pr-14 py-4 rounded-full bg-gray-50 border-2 border-gray-200 focus:border-[var(--color-red-flag)] focus:ring-2 focus:ring-[var(--color-red-flag)]/20 focus:outline-none transition-all font-body text-gray-700 shadow-inner disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 p-2.5 bg-[var(--color-red-flag)] text-white rounded-full hover:bg-[#8B0000] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg active:scale-95 transform duration-150"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={20} />
                )}
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-2 font-body italic">
              AI có thể mắc lỗi. Hãy kiểm tra lại thông tin quan trọng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
