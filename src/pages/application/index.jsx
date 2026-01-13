import "./styles.css";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Cpu, 
  Heart, 
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";

const sections = [
  {
    title: "Kinh tế thị trường định hướng XHCN",
    shortTitle: "Kinh tế",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    accentColor: "#10B981",
    paragraphs: [
      "Sử dụng kinh tế thị trường như một công cụ phát triển lực lượng sản xuất, nhưng đặt dưới định hướng xã hội chủ nghĩa: tôn trọng quy luật thị trường, song Nhà nước điều tiết để bảo đảm tiến bộ, công bằng, an sinh và kiểm soát các tác động tiêu cực.",
      "Phát triển đa sở hữu, nhiều thành phần kinh tế; thúc đẩy doanh nghiệp nhà nước giữ vai trò then chốt ở lĩnh vực thiết yếu, khuyến khích khu vực tư nhân trở thành động lực tăng trưởng, thu hút FDI gắn với chuyển giao công nghệ và liên kết chuỗi giá trị.",
    ],
    gridSpan: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Công nghiệp hóa, hiện đại hóa",
    shortTitle: "Công nghệ",
    icon: Cpu,
    color: "from-blue-500 to-indigo-600",
    accentColor: "#3B82F6",
    paragraphs: [
      "Đẩy nhanh chuyển dịch cơ cấu kinh tế theo hướng công nghiệp – dịch vụ hiện đại; ưu tiên hạ tầng số, năng lượng tái tạo, logistics, đô thị thông minh, nông nghiệp công nghệ cao.",
      "Đầu tư mạnh cho khoa học – công nghệ, đổi mới sáng tạo và chuyển đổi số trong quản trị nhà nước, doanh nghiệp, giáo dục, y tế; phát triển nguồn nhân lực chất lượng cao, đặc biệt các lĩnh vực STEM và quản trị số.",
    ],
    gridSpan: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "An sinh xã hội, văn hóa và con người",
    shortTitle: "An sinh",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    accentColor: "#F43F5E",
    paragraphs: [
      "Bảo đảm an sinh từ sớm, từ xa: giảm nghèo đa chiều, bảo hiểm xã hội toàn dân, y tế cơ bản cho mọi người; ưu tiên vùng khó khăn, nhóm yếu thế.",
      "Xây dựng hệ giá trị văn hóa và con người Việt Nam trong thời kỳ mới: yêu nước, đoàn kết, nhân ái, trung thực, sáng tạo; phát huy dân chủ, pháp quyền, kỷ cương; gắn tăng trưởng với bảo vệ môi trường và phát triển bền vững.",
    ],
    gridSpan: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Hội nhập quốc tế chủ động",
    shortTitle: "Hội nhập",
    icon: Globe,
    color: "from-amber-500 to-orange-600",
    accentColor: "#F59E0B",
    paragraphs: [
      "Đa phương hóa, đa dạng hóa quan hệ; tận dụng các FTA thế hệ mới (CPTPP, EVFTA, RCEP…) để mở rộng thị trường, nâng chuẩn quản trị, lao động và môi trường.",
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, bảo vệ lợi ích quốc gia – dân tộc, giữ vững hòa bình, ổn định để phát triển; tham gia tích cực vào các sáng kiến toàn cầu về chuyển đổi số, năng lượng xanh, thích ứng biến đổi khí hậu.",
    ],
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const BentoCard = ({ section, index }) => {
  const Icon = section.icon;
  
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`bento-card group relative overflow-hidden rounded-3xl 
        backdrop-blur-xl bg-white/70 border border-white/40
        shadow-lg hover:shadow-2xl transition-all duration-300
        ${section.gridSpan} p-6 md:p-8`}
      role="article"
      aria-labelledby={`section-title-${index}`}
    >
      {/* Gradient Background Accent */}
      <div 
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${section.color} 
          opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}
      />
      
      {/* Card Header */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div 
            className={`p-3 rounded-2xl bg-gradient-to-br ${section.color} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div>
            <span 
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: section.accentColor }}
            >
              {section.shortTitle}
            </span>
            <h2 
              id={`section-title-${index}`}
              className="font-bungee text-lg md:text-xl lg:text-2xl text-[#1A1A1A] leading-tight mt-1"
            >
              {section.title}
            </h2>
          </div>
        </div>
        <span 
          className="text-4xl font-bungee opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ color: section.accentColor }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Card Content */}
      <div className="relative z-10 space-y-4">
        {section.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-inter text-sm md:text-base leading-relaxed text-gray-700"
          >
            {p}
          </p>
        ))}
      </div>

      {/* Hover Arrow */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <div 
          className={`p-2 rounded-full bg-gradient-to-br ${section.color}`}
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </motion.div>
    </motion.article>
  );
};

const ApplicationPage = () => {
  return (
    <div
      id="application_page"
      className="w-full flex flex-col items-center gap-8 md:gap-12 overflow-y-auto px-4 md:px-6 pt-24 pb-16"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl flex flex-col items-center justify-center py-8 md:py-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 mb-6">
          <Sparkles className="w-4 h-4 text-[#DA251D]" />
          <span className="text-sm font-inter font-medium text-gray-700">Vận dụng thực tiễn</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bungee leading-tight text-[#1A1A1A]">
          Vận dụng tư tưởng Hồ Chí Minh
          <span className="block text-[#DA251D] mt-2">về con đường quá độ lên CNXH</span>
        </h1>
        <p className="mt-6 text-center font-inter text-gray-600 max-w-2xl text-base md:text-lg">
          Trong thực tiễn phát triển đất nước hiện nay, 4 trụ cột chính được xác định rõ ràng
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-4 md:gap-6"
      >
        {sections.map((section, idx) => (
          <BentoCard key={section.title} section={section} index={idx} />
        ))}
      </motion.div>

      {/* Action Highlight */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#DA251D] to-[#8B0000] p-8 md:p-12 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10">
            <h2 className="font-bungee text-xl md:text-2xl lg:text-3xl text-white mb-4">
              Điểm nhấn hành động
            </h2>
            <p className="font-inter text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              Kiên định mục tiêu CNXH, linh hoạt phương thức, coi đổi mới sáng tạo và giáo dục con người 
              là động lực then chốt; kết hợp chặt chẽ phát triển kinh tế thị trường với bảo đảm công bằng, 
              an sinh và bảo vệ môi trường.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationPage;
