/**
 * AI Contextual Highlight Component
 * Hiển thị nút "Giải thích với AI" khi người dùng bôi đen text
 * 
 * Effort: M (3-5h)
 * Features:
 * - Detect text selection
 * - Show floating button near selection
 * - Call AI API for explanation
 * - Display tooltip/popover with result
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Loader2 } from "lucide-react";
import { sendMessageToAI } from "../../services/aiService";

const AIContextHighlight = () => {
  const [selection, setSelection] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [error, setError] = useState(null);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  const handleSelection = useCallback(() => {
    const sel = window.getSelection();
    const text = sel?.toString().trim();

    if (text && text.length > 10 && text.length < 500) {
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelection(text);
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
      setExplanation(null);
      setError(null);
    } else {
      // Only clear if clicking outside the button/popover
      setTimeout(() => {
        if (
          !buttonRef.current?.contains(document.activeElement) &&
          !popoverRef.current?.contains(document.activeElement)
        ) {
          setSelection(null);
          setExplanation(null);
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("touchend", handleSelection);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("touchend", handleSelection);
    };
  }, [handleSelection]);

  const handleExplain = async () => {
    if (!selection) return;

    setIsLoading(true);
    setError(null);

    try {
      const prompt = `Giải thích ngắn gọn (tối đa 3 câu) về khái niệm hoặc thuật ngữ sau trong ngữ cảnh tư tưởng Hồ Chí Minh và chủ nghĩa xã hội Việt Nam:

"${selection}"

Hãy trả lời bằng tiếng Việt, dễ hiểu cho sinh viên.`;

      const response = await sendMessageToAI(prompt, []);
      setExplanation(response);
    } catch (err) {
      setError("Không thể kết nối AI. Vui lòng thử lại.");
      console.error("AI explanation error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSelection(null);
    setExplanation(null);
    setError(null);
    window.getSelection()?.removeAllRanges();
  };

  return (
    <AnimatePresence>
      {selection && (
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -100%)",
            zIndex: 9999,
          }}
          className="flex flex-col items-center"
        >
          {/* Explanation Popover */}
          <AnimatePresence>
            {(explanation || error || isLoading) && (
              <motion.div
                ref={popoverRef}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="mb-3 w-80 max-w-[90vw] p-4 rounded-2xl bg-white shadow-2xl border border-gray-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#DA251D]" />
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      AI Giải thích
                    </span>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Đóng"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {isLoading && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Đang phân tích...</span>
                  </div>
                )}

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                {explanation && (
                  <p className="text-sm text-gray-700 leading-relaxed font-inter">
                    {explanation}
                  </p>
                )}

                {/* Selected text preview */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400 line-clamp-2 italic">
                    "{selection}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          {!explanation && !isLoading && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExplain}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 rounded-full 
                bg-gradient-to-r from-[#DA251D] to-[#8B0000] text-white
                shadow-lg hover:shadow-xl transition-shadow
                focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
              aria-label="Giải thích với AI"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Giải thích với AI</span>
            </motion.button>
          )}

          {/* Arrow pointer */}
          <div
            className="w-3 h-3 bg-white rotate-45 -mt-1.5 shadow-lg"
            style={{ display: explanation || isLoading ? "block" : "none" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIContextHighlight;
