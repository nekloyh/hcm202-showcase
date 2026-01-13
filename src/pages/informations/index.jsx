import "./styles.css";
import { motion } from "framer-motion";
import { 
  User, 
  Crown, 
  FileText, 
  Video, 
  Newspaper, 
  ExternalLink,
  BookOpen,
  Users,
  Sparkles
} from "lucide-react";

const maleAvatar = "/images/user/male.png";
const femaleAvatar = "/images/user/female.png";

const member = [
  {
    name: "Nguyễn Văn A",
    studentCode: "SE181234",
    role: "leader",
    gender: "male",
    task: [
      'Chủ biên dàn ý lý luận: quá độ lên CNXH, "bỏ qua CNTB"',
      "Điều phối tiến độ, rà soát học thuật",
      "Tổng hợp nguồn văn kiện, giáo trình",
    ],
  },
  {
    name: "Nguyễn Văn A",
    studentCode: "SE181234",
    role: "member",
    gender: "male",
    task: ["Thiết kế & cập nhật website", "Tích hợp chatbot AI và hạ tầng API"],
  },
  {
    name: "Nguyễn Văn A",
    studentCode: "SE181234",
    role: "member",
    gender: "male",
    task: [
      "Thu thập tư liệu thực tiễn, số liệu an sinh – kinh tế",
      "Biên tập nội dung vận dụng hiện nay",
    ],
  },
  {
    name: "Nguyễn Văn A",
    studentCode: "SE181234",
    role: "member",
    gender: "male",
    task: [
      "Đối chiếu nguồn chính thống, kiểm chứng trích dẫn",
      "Hỗ trợ xây dựng kịch bản câu hỏi cho chatbot",
    ],
  },
];

const references = [
  {
    title: "Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT)",
    type: "document",
    link: "https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20T%C6%B0%20t%C6%B0%E1%BB%9Fng%20HCM%20(K)%20Tr69%20-Tr141.pdf",
  },
  {
    title: "Văn kiện Đại hội XIII của Đảng (tổng hợp)",
    type: "document",
    link: "https://daihoi13.dangcongsan.vn/van-kien",
  },
  {
    title: "Bài nghiên cứu: Kinh tế thị trường định hướng XHCN – Tạp chí Lý luận Chính trị",
    type: "article",
    link: "https://lyluanchinhtri.vn/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Profile Card Component
const ProfileCard = ({ member, index }) => {
  const isLeader = member.role === "leader";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-3xl 
        ${isLeader 
          ? "bg-gradient-to-br from-[#DA251D]/10 to-[#FFCD00]/10 border-2 border-[#DA251D]/20" 
          : "bg-white/80 border border-gray-200/60"
        }
        backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300`}
    >
      {/* Background Decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30
        ${isLeader ? "bg-[#DA251D]" : "bg-blue-500"}`} 
      />

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden 
              ${isLeader ? "ring-4 ring-[#FFCD00]/50" : "ring-2 ring-gray-200"}`}>
              <img
                src={member.gender === "male" ? maleAvatar : femaleAvatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {isLeader && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#DA251D] to-[#FFCD00] 
                rounded-full flex items-center justify-center shadow-lg">
                <Crown className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-xl md:text-2xl font-bold mb-1 truncate
              ${isLeader ? "text-[#DA251D]" : "text-gray-900"}`}>
              {member.name}
            </h3>
            <p className="text-gray-500 font-mono text-sm mb-3">
              {member.studentCode}
            </p>
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
              ${isLeader 
                ? "bg-gradient-to-r from-[#DA251D] to-[#8B0000] text-white" 
                : "bg-gray-100 text-gray-600"}`}>
              {isLeader ? <Crown className="w-3 h-3" /> : <User className="w-3 h-3" />}
              {isLeader ? "Trưởng nhóm" : "Thành viên"}
            </span>
          </div>
        </div>

        {/* Tasks */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Nhiệm vụ
          </h4>
          <ul className="space-y-2">
            {member.task.map((t, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2
                  ${isLeader ? "bg-[#DA251D]" : "bg-blue-500"}`} />
                <span className="text-sm text-gray-600 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Reference Card Component
const ReferenceCard = ({ reference, index }) => {
  const getIcon = (type) => {
    switch (type) {
      case "video": return Video;
      case "document": return FileText;
      default: return Newspaper;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case "video": return { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" };
      case "document": return { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" };
      default: return { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" };
    }
  };

  const Icon = getIcon(reference.type);
  const colors = getColors(reference.type);

  return (
    <motion.a
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -3 }}
      href={reference.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-5 rounded-2xl bg-white border ${colors.border}
        hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.bg} ${colors.text}
          flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#DA251D] transition-colors line-clamp-2">
            {reference.title}
          </h3>
          <span className={`inline-flex items-center gap-1 text-sm ${colors.text}`}>
            Xem chi tiết
            <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default function InformationsPage() {
  return (
    <div
      id="informations_page"
      className="w-full min-h-dvh bg-gradient-to-br from-[#FAFAF8] to-[#F5F5DC] py-16 px-4 md:px-8 lg:px-16 pt-28"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/60 mb-4">
            <BookOpen className="w-4 h-4 text-[#DA251D]" />
            <span className="text-sm font-medium text-gray-600">Thông tin dự án</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bungee text-[#1A1A1A] tracking-tight">
            Quá độ lên CNXH ở Việt Nam
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Nghiên cứu tư tưởng Hồ Chí Minh về con đường quá độ lên chủ nghĩa xã hội, 
            lý giải khái niệm "bỏ qua chế độ tư bản chủ nghĩa" và vận dụng trong phát triển hiện nay.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="mb-10 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-[#DA251D] to-[#8B0000]">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bungee text-[#1A1A1A]">
              Thành viên nhóm
            </h2>
            <p className="text-gray-500 text-sm">Đội ngũ thực hiện dự án</p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {member.map((m, index) => (
            <ProfileCard key={index} member={m} index={index} />
          ))}
        </motion.div>
      </div>

      {/* References Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bungee text-[#1A1A1A]">
              Tài liệu tham khảo
            </h2>
            <p className="text-gray-500 text-sm">Nguồn tài liệu chính thống</p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {references.map((ref, index) => (
            <ReferenceCard key={index} reference={ref} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/60">
          <span className="text-gray-500 text-sm">
            Dự án phục vụ học tập môn Tư tưởng Hồ Chí Minh – FPT University
          </span>
        </div>
      </motion.div>
    </div>
  );
}
