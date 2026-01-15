import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Layout,
  Search,
  Cpu,
  Sparkles,
  ArrowRight,
  Terminal
} from "lucide-react";
import "./styles.css";

const tools = [
  {
    category: "RESEARCH & DATA",
    name: "Nghiên cứu & Tổng hợp",
    tools: ["ChatGPT 4o", "NoteGPT"],
    icon: Search,
    description: [
      "Phân tích, đối chiếu quan điểm giáo trình & văn kiện Đảng.",
      "Tóm tắt video bài giảng, trích xuất luận điểm cốt lõi.",
      "Kiểm tra chéo (Cross-check) kiến thức lịch sử."
    ],
    images: ["/images/ai-usage/notegpt.png", "/images/ai-usage/gpt_2.png", "/images/ai-usage/gpt_1.png"],
    color: "bg-green-100",
    border: "border-green-800"
  },
  {
    category: "CHATBOT OPERATION",
    name: "Vận hành Chatbot Tèo",
    tools: ["Google AI Studio", "Groq Cloud"],
    icon: Cpu,
    description: [
      "Fine-tune Gemini 1.5 Flash với dữ liệu Tư tưởng HCM.",
      "Tối ưu độ trễ phản hồi (<1s) với Groq LPU.",
      "Xây dựng Persona 'Tèo' gần gũi, học thuật."
    ],
    images: ["/images/ai-usage/groq.png", "/images/ai-usage/google_studio.png"],
    color: "bg-orange-100",
    border: "border-orange-800"
  },
  {
    category: "WEB DEVELOPMENT",
    name: "Xây dựng Website",
    tools: ["Gemini Advanced"],
    icon: Layout,
    description: [
      "Generate code UI React/Tailwind chuẩn Neo-Brutalist.",
      "Tối ưu Responsive & Animation (Framer Motion).",
      "Debug logic & Refactor code base."
    ],
    images: ["/images/ai-usage/gemini_1.png", "/images/ai-usage/gemini_2.png"],
    color: "bg-blue-100",
    border: "border-blue-800"
  }
];

const ToolCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Background Shadow Layer */}
      <div className="absolute inset-0 bg-charcoal translate-x-3 translate-y-3 rounded-none"></div>

      {/* Main Card Content */}
      <div className={`relative bg-white border-4 border-charcoal p-6 md:p-8 h-full flex flex-col justify-between transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1`}>

        {/* Header */}
        <div className="flex justify-between items-start mb-6 border-b-4 border-charcoal pb-4">
          <div>
            <span className="inline-block bg-charcoal text-yellow-star px-2 py-1 font-mono text-xs font-bold mb-2">
              {item.category}
            </span>
            <h3 className="font-bungee text-2xl md:text-3xl text-charcoal leading-none uppercase">
              {item.name}
            </h3>
          </div>
          <div className={`p-3 border-2 border-charcoal ${item.color} shadow-[4px_4px_0px_0px_#1A1A1A]`}>
            <Icon size={32} strokeWidth={2} className="text-charcoal" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h4 className="font-bold font-inter text-sm text-charcoal/60 uppercase mb-2">TOOLS USED:</h4>
            <div className="flex flex-wrap gap-2">
              {item.tools.map(t => (
                <span key={t} className="px-3 py-1 border-2 border-charcoal bg-off-white font-bold text-sm shadow-[2px_2px_0px_0px_#DA251D]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold font-inter text-sm text-charcoal/60 uppercase mb-2">PROCESS:</h4>
            <ul className="space-y-2">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 font-inter text-charcoal leading-snug">
                  <ArrowRight size={16} className="mt-1 flex-shrink-0 text-red-flag" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Images Grid */}
          <div className="pt-4 border-t-2 border-dashed border-charcoal">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {item.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  className="aspect-video border-2 border-charcoal overflow-hidden shadow-sm relative group/img cursor-zoom-in bg-gray-100"
                >
                  <img src={img} alt="Evidence" className="w-full h-full object-cover filter grayscale group-hover/img:grayscale-0 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const AiUsagePage = () => {
  return (
    <div className="min-h-screen bg-beige-paper bg-grid-pattern pt-24 pb-20 px-4 md:px-8 overflow-x-hidden">

      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-20 text-center relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block bg-yellow-star border-4 border-charcoal px-6 py-2 shadow-[8px_8px_0px_0px_#DA251D] transform -rotate-2 mb-8 hover:rotate-0 transition-transform"
        >
          <span className="font-bungee text-2xl text-charcoal">AI ASSISTED PROJECT</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-charcoal uppercase leading-[0.9] mb-6">
          CÔNG CỤ <br />
          <span className="text-stroke-red text-transparent relative">
            HỖ TRỢ
            <Sparkles className="absolute -top-8 -right-8 text-yellow-star w-16 h-16 animate-spin-slow" strokeWidth={3} />
          </span>
        </h1>

        <p className="font-inter text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto border-l-8 border-charcoal pl-6 text-left md:ml-auto md:text-center md:border-none md:pl-0">
          Minh bạch quy trình sử dụng Trí tuệ nhân tạo trong nghiên cứu và phát triển dự án.
        </p>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        {tools.map((item, index) => (
          <div key={item.name} className={index === 2 ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" : ""}>
            <ToolCard item={item} index={index} />
          </div>
        ))}
      </div>

      {/* Footer Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-24 bg-charcoal text-off-white p-8 md:p-12 border-4 border-yellow-star relative overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 opacity-20">
          <Terminal size={200} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 p-4 border-2 border-white rounded-full">
            <Sparkles size={40} className="text-yellow-star" />
          </div>
          <div>
            <h3 className="font-bungee text-2xl text-yellow-star mb-2 uppercase">Cam kết học thuật</h3>
            <p className="font-inter text-gray-300 leading-relaxed text-justify">
              Chúng tôi khẳng định AI chỉ đóng vai trò là <strong>công cụ hỗ trợ</strong> (tra cứu, gợi ý, tối ưu hóa). Mọi nội dung chuyên môn đều được kiểm chứng nghiêm ngặt dựa trên Giáo trình Tư tưởng Hồ Chí Minh và Văn kiện Đảng. Sự sáng tạo và tư duy phản biện của con người là yếu tố quyết định cuối cùng.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default AiUsagePage;
