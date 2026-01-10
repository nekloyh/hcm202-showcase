import { Send } from "lucide-react";
import "./styles.css";
import { useRef, useState, useEffect } from "react";
import { sendMessageToAI } from "../../services/aiService";

const AITalkingAvatar = () => {
  return (
    <div className="w-[50px] h-[50px] p-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#F95D46] to-[#F4B82A]">
      <img
        src="images/ai-chatbot/avatar-talking.png"
        className="w-full h-full max-w-[25px] max-h-[25px] object-contain"
        alt="AI Avatar"
      />
    </div>
  );
};

const AIResponse = ({ text }) => {
  return (
    <div className="w-full flex relative">
      <div className="absolute top-0 left-0 z-10 w-[50px] h-[50px]">
        <AITalkingAvatar />
      </div>
      <div className="ml-[60px] mt-2">
        <p className="text-[15px]">{text}</p>
      </div>
    </div>
  );
};

const UserPrompt = ({ text }) => {
  return (
    <div className="w-full flex items-center justify-end">
      <div className="relative p-3 bg-[#EADDD3] text-[#48201E] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none max-w-[80%]">
        <p className="break-words">{text}</p>
      </div>
    </div>
  );
};

const AIPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "ai",
      text: `Chào bạn, mình là Tèo. Mình hỗ trợ giải thích tư tưởng Hồ Chí Minh về con đường quá độ lên chủ nghĩa xã hội ở Việt Nam, đặc biệt khái niệm "bỏ qua chế độ tư bản chủ nghĩa" và các bước phát triển hiện nay. Bạn hỏi gì cứ nhắn nhé!`,
    },
  ]);
  const inputRef = useRef();
  const chatContentRef = useRef();

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage || isLoading) {
      return;
    }

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    inputRef.current.value = "";
    setIsLoading(true);

    setChatHistory((history) => [
      ...history,
      { role: "ai", text: "Tèo đang suy nghĩ..." },
    ]);

    try {
      const formattedHistory = chatHistory.map((msg) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.text,
      }));

      const response = await sendMessageToAI(userMessage, formattedHistory);

      setChatHistory((history) => {
        const newHistory = [...history];
        newHistory[newHistory.length - 1] = {
          role: "ai",
          text: response,
        };
        return newHistory;
      });
    } catch (error) {
      console.error("Error:", error);

      setChatHistory((history) => {
        const newHistory = [...history];
        newHistory[newHistory.length - 1] = {
          role: "ai",
          text: "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.",
        };
        return newHistory;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="ai_page"
      className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-20 pt-30 sm:pt-28 md:pt-30"
    >
      <div className="w-full max-w-7xl chat_container bg-[#FDF4E9] flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl h-[calc(100vh-8rem)] sm:h-[calc(100vh-9rem)] md:h-[calc(100vh-10rem)]">
        <div
          id="chat_box"
          className="flex-1 flex flex-col justify-between lg:pr-10 text-[#48201E] min-h-0"
        >
          <div
            ref={chatContentRef}
            id="chat_content"
            className="w-full flex flex-col gap-5 flex-1 overflow-y-auto overflow-x-hidden pb-4"
          >
            {chatHistory.map((message, index) =>
              message.role === "ai" ? (
                <AIResponse key={index} text={message.text} />
              ) : (
                <UserPrompt key={index} text={message.text} />
              )
            )}
          </div>

          <form
            onSubmit={handleFormSubmit}
            action="#"
            className="w-full bg-[#EADDD3] rounded-lg p-3 flex items-center justify-between gap-2 mt-4"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Nhập câu hỏi..."
              className="flex-1 bg-transparent border-none outline-none text-[#48201E] placeholder:text-[#48201E]/60"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="flex cursor-pointer items-center justify-center bg-[#0A2D79] hover:bg-[#2454bb] disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-2 transition-colors"
            >
              <Send color="white" size={16} />
            </button>
          </form>
        </div>

        <div
          id="chat_avatar"
          className="w-full lg:w-1/3 min-h-[300px] lg:min-h-0 flex flex-col justify-between items-center text-white bg-gradient-to-b from-[#F95D46] to-[#F4B82A] rounded-xl mt-4 lg:mt-0"
        >
          <div className="w-full flex flex-col items-center gap-2 text-center p-4 sm:p-5">
            <p className="font-bold text-base sm:text-lg">
              Trợ lý AI: Quá độ lên CNXH
            </p>
            <p className="font-light text-sm sm:text-base">
              Socialist Transition Assistant
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-end pb-4">
            <img
              src="images/ai-chatbot/avatar-standing.png"
              className="w-6/12 sm:w-7/12 lg:w-8/12 max-w-[250px]"
              alt="AI Assistant"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;
