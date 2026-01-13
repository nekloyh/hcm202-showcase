/**
 * Hồ Chí Minh Quote Generator Widget
 * Hiển thị câu nói của Bác với hiệu ứng Typewriter
 *
 * Effort: M (3-5h)
 * Features:
 * - Random quote selection
 * - Typewriter effect
 * - Share to social media (generate image)
 * - Refresh button
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  Share2,
  Twitter,
  Facebook,
  Download,
  Quote,
  X,
} from "lucide-react";
import html2canvas from "html2canvas";

const HCM_QUOTES = [
  {
    text: "Chủ nghĩa xã hội là làm sao cho dân giàu, nước mạnh, mọi người hạnh phúc.",
    source: "Bài nói chuyện tại Hội nghị cán bộ Đảng, 1956",
  },
  {
    text: "Không có gì quý hơn độc lập, tự do.",
    source: "Lời kêu gọi toàn quốc kháng chiến, 1966",
  },
  {
    text: "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa.",
    source: "Bài nói tại Đại hội III Đảng Lao động Việt Nam, 1960",
  },
  {
    text: "Đảng ta là đạo đức, là văn minh.",
    source: "Bài phát biểu tại lễ kỷ niệm 30 năm thành lập Đảng, 1960",
  },
  {
    text: "Học, học nữa, học mãi.",
    source: "Bức thư gửi các cháu thiếu nhi, 1946",
  },
  {
    text: "Một năm khởi đầu từ mùa xuân. Một đời khởi đầu từ tuổi trẻ. Tuổi trẻ là mùa xuân của xã hội.",
    source: "Bài viết về thanh niên, 1946",
  },
  {
    text: "Cách mạng là sự nghiệp của quần chúng.",
    source: "Bài giảng về Đường Kách Mệnh, 1927",
  },
  {
    text: "Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh.",
    source: "Thư gửi Ủy ban nhân dân các cấp, 1945",
  },
  {
    text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    source: "Bài nói chuyện tại Đại hội Mặt trận Tổ quốc Việt Nam, 1961",
  },
  {
    text: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
    source: "Bài nói về giáo dục, 1958",
  },
];

const HCMQuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const quoteCardRef = useRef(null);

  const getRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * HCM_QUOTES.length);
    return HCM_QUOTES[randomIndex];
  }, []);

  const typeWriter = useCallback((text, onComplete) => {
    setDisplayedText("");
    setIsTyping(true);
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        onComplete?.();
      }
    }, 40); // Speed of typing

    return () => clearInterval(timer);
  }, []);

  const refreshQuote = useCallback(() => {
    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);
    typeWriter(newQuote.text);
  }, [getRandomQuote, typeWriter]);

  useEffect(() => {
    refreshQuote();
  }, []);

  const generateShareImage = async () => {
    if (!quoteCardRef.current) return null;

    setIsGeneratingImage(true);
    try {
      const canvas = await html2canvas(quoteCardRef.current, {
        backgroundColor: "#1A1A1A",
        scale: 2,
        logging: false,
      });
      return canvas.toDataURL("image/png");
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleDownload = async () => {
    const imageData = await generateShareImage();
    if (imageData) {
      const link = document.createElement("a");
      link.download = `hcm-quote-${Date.now()}.png`;
      link.href = imageData;
      link.click();
    }
  };

  const handleShare = async (platform) => {
    const text = `"${currentQuote?.text}" - Chủ tịch Hồ Chí Minh`;
    const url = window.location.href;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(text)}&u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
    setShowShareMenu(false);
  };

  if (!currentQuote) return null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Quote Card */}
      <motion.div
        ref={quoteCardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 md:p-12"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#DA251D]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FFCD00]/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

        {/* Quote icon */}
        <div className="absolute top-6 left-6 opacity-20">
          <Quote className="w-16 h-16 text-[#FFCD00]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <blockquote className="mb-6">
            <p className="font-brygada text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
              "{displayedText}"
              {isTyping && (
                <span className="inline-block w-0.5 h-6 bg-[#FFCD00] ml-1 animate-pulse" />
              )}
            </p>
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#DA251D] to-[#8B0000] flex items-center justify-center">
              <span className="font-bungee text-white text-lg">HCM</span>
            </div>
            <div>
              <p className="font-semibold text-white">Chủ tịch Hồ Chí Minh</p>
              <p className="text-sm text-gray-400">{currentQuote.source}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={refreshQuote}
          disabled={isTyping}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full
            bg-white/10 border border-white/20 text-white
            hover:bg-white/20 transition-all
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          <RefreshCw className={`w-4 h-4 ${isTyping ? "animate-spin" : ""}`} />
          <span className="text-sm font-medium">Câu nói khác</span>
        </motion.button>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-gradient-to-r from-[#DA251D] to-[#8B0000] text-white
              hover:shadow-lg transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Chia sẻ</span>
          </motion.button>

          {/* Share Menu */}
          <AnimatePresence>
            {showShareMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                  p-2 rounded-2xl bg-white shadow-xl border border-gray-200
                  flex items-center gap-2"
              >
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-2 rounded-full hover:bg-blue-50 transition-colors group"
                  aria-label="Chia sẻ lên Twitter"
                >
                  <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-2 rounded-full hover:bg-blue-50 transition-colors group"
                  aria-label="Chia sẻ lên Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={handleDownload}
                  disabled={isGeneratingImage}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors group
                    disabled:opacity-50"
                  aria-label="Tải ảnh"
                >
                  <Download
                    className={`w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform
                      ${isGeneratingImage ? "animate-pulse" : ""}`}
                  />
                </button>
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Đóng"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HCMQuoteGenerator;
