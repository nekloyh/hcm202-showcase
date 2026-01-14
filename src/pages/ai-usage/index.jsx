import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  FileText, 
  Palette, 
  Code, 
  CheckCircle,
  Cpu
} from "lucide-react";
import "./styles.css";

const tools = [
  {
    name: "ChatGPT",
    icon: Bot,
    color: "text-green-600",
    bg: "bg-green-50",
    purpose: [
      "Tóm tắt, đối chiếu giáo trình Tư tưởng Hồ Chí Minh và các văn kiện Đảng về thời kỳ quá độ lên CNXH.",
      "Gợi ý cấu trúc nội dung trang web, sắp xếp mục lục lý luận – thực tiễn.",
      "Kiểm tra logic, phát hiện chỗ thiếu dẫn giải khi trình bày khái niệm \"bỏ qua chế độ tư bản chủ nghĩa\"."
    ],
    images: ["/images/ai-usage/1.jpg", "/images/ai-usage/2.jpg"]
  },
  {
    name: "NoteGPT.io",
    icon: FileText,
    color: "text-purple-600",
    bg: "bg-purple-50",
    purpose: [
      "Transcript bài giảng, toạ đàm học thuật về quá độ lên CNXH để trích xuất luận điểm chính."
    ],
    images: ["/images/ai-usage/6.jpg"]
  },
  {
    name: "v0.dev",
    icon: Palette,
    color: "text-gray-800",
    bg: "bg-gray-50",
    purpose: [
      "Phác thảo ý tưởng UI/UX cho các section lý luận – vận dụng – chatbot."
    ],
    images: ["/images/ai-usage/8.jpg"]
  },
  {
    name: "Groq Cloud",
    icon: Cpu,
    color: "text-orange-600",
    bg: "bg-orange-50",
    purpose: [
      "Cung cấp API key cho chatbot \"Tèo\" để trả lời về con đường quá độ lên CNXH."
    ],
    images: ["/images/ai-usage/9.jpg"]
  }
];

const ToolCard = ({ tool, index }) => {
  const Icon = tool.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-md border border-[var(--color-border-light)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl ${tool.bg} ${tool.color}`}>
            <Icon size={32} strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-bold font-body text-gray-800 tracking-tight">
            {tool.name}
          </h2>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Mục đích sử dụng</h3>
          <ul className="space-y-3">
            {tool.purpose.map((line, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 font-body leading-relaxed">
                <CheckCircle size={18} className="text-[var(--color-yellow-star)] mt-1 shrink-0 bg-black rounded-full p-0.5" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {tool.images && tool.images.length > 0 && (
          <div className="mt-6">
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Minh họa thực tế</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {tool.images.map((img, i) => (
                 <div key={i} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                   <img src={img} alt={`${tool.name} usage`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AiUsagePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-[#F5F5DC]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-red-flag)] text-[var(--color-yellow-star)] font-bold text-sm mb-4 uppercase tracking-wider shadow-sm">
            Công nghệ hỗ trợ
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-[var(--color-charcoal)] mb-6 uppercase">
            AI Usage <br/>
            <span className="text-[var(--color-red-flag)]">Cho đề tài nghiên cứu</span>
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
            Cách chúng tôi tận dụng sức mạnh của trí tuệ nhân tạo để nâng cao chất lượng nghiên cứu về thời kỳ quá độ lên CNXH.
          </p>
        </motion.div>

        <div className="space-y-8">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border-l-8 border-[var(--color-red-flag)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <Bot size={200} />
          </div>
          
          <h3 className="text-2xl font-bold font-display text-[var(--color-red-flag)] mb-4">
            Cam kết sử dụng AI có trách nhiệm
          </h3>
          <p className="text-lg text-gray-700 font-body leading-relaxed text-justify relative z-10">
            Nhóm cam kết dùng AI như công cụ hỗ trợ tra cứu, tóm tắt, kiểm chứng và gợi ý cấu trúc, luôn đối chiếu với nguồn chính thống (giáo trình Tư tưởng Hồ Chí Minh, Văn kiện Đảng, tạp chí lý luận). 
            <span className="font-bold text-black block mt-2">
              Không dùng AI để tạo thông tin chưa xác thực hay suy diễn ngoài phạm vi học thuật.
            </span>
            Nội dung cuối cùng được biên tập thủ công, đảm bảo tính chính xác, khách quan và phù hợp chuẩn mực học thuật.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AiUsagePage;
