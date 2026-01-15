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

// Profile Card Component - "ID Card" Style
const ProfileCard = ({ member, index }) => {
  const isLeader = member.role === "leader";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "8px 8px 0px 0px #1A1A1A" }}
      className={`relative group bg-beige-paper border-4 border-charcoal overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] transition-all duration-200
        ${isLeader ? "bg-red-50" : "bg-white"}`}
    >
      {/* ID Card Header Decoration */}
      <div className="h-8 bg-charcoal w-full flex items-center justify-between px-3">
        <div className="w-16 h-1 bg-white/20"></div>
        <div className="text-white/50 text-[10px] font-mono tracking-widest">STUDENT_ID</div>
      </div>

      <div className="p-6 relative">
        {/* Leader Badge */}
        {isLeader && (
          <div className="absolute top-4 right-4 animate-pulse">
            <Crown className="w-6 h-6 text-yellow-star fill-yellow-star drop-shadow-sm" />
          </div>
        )}

        {/* Avatar Section */}
        <div className="flex gap-4 mb-4 pb-4 border-b-2 border-charcoal/10 border-dashed">
          <div className="shrink-0 w-20 h-24 bg-gray-200 border-2 border-charcoal overflow-hidden relative">
            <img
              src={member.gender === "male" ? maleAvatar : femaleAvatar}
              alt={member.name}
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
          <div>
            <h3 className="font-bungee text-xl text-charcoal leading-none mb-1 uppercase">
              {member.name}
            </h3>
            <p className="font-mono text-xs text-charcoal/70 bg-gray-100 px-1 inline-block border border-gray-300">
              {member.studentCode}
            </p>
            <div className={`mt-2 inline-flex items-center gap-1 px-2 py-1 border-2 border-charcoal text-[10px] font-bold uppercase
                    ${isLeader ? "bg-red-flag text-white" : "bg-white text-charcoal"}`}>
              {isLeader ? "Trưởng nhóm" : "Thành viên"}
            </div>
          </div>
        </div>

        {/* Task Section */}
        <div>
          <h4 className="font-bold text-xs uppercase text-charcoal/50 mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Nhiệm vụ:
          </h4>
          <ul className="space-y-1">
            {member.task.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm font-inter text-charcoal leading-tight">
                <span className="mt-1 w-1.5 h-1.5 bg-red-flag square-full shrink-0"></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Reference Card Component - "File Folder" Style
const ReferenceCard = ({ reference, index }) => {
  const getIcon = (type) => {
    switch (type) {
      case "video": return Video;
      case "document": return FileText;
      default: return Newspaper;
    }
  };

  const Icon = getIcon(reference.type);

  return (
    <motion.a
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px #1A1A1A" }}
      whileTap={{ y: 0, boxShadow: "0px 0px 0px 0px #1A1A1A" }}
      href={reference.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border-2 border-charcoal shadow-[3px_3px_0px_0px_#1A1A1A] transition-all relative group h-full"
    >
      {/* Folder Tab */}
      <div className="absolute -top-3 left-0 bg-charcoal text-white text-[10px] font-bold px-3 py-0.5 border-2 border-charcoal h-4 flex items-center uppercase">
        REF_0{index + 1}
      </div>

      <div className="p-5 pt-7 flex flex-col h-full">
        <h3 className="font-bold font-inter text-charcoal group-hover:text-red-flag transition-colors mb-2 line-clamp-2 min-h-[3rem]">
          {reference.title}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t-2 border-charcoal/10 pt-3">
          <div className="flex items-center gap-2 text-xs font-mono text-charcoal/60 uppercase">
            <Icon className="w-4 h-4" />
            {reference.type}
          </div>
          <ExternalLink className="w-4 h-4 text-charcoal group-hover:rotate-45 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
};

export default function InformationsPage() {
  return (
    <div
      id="informations_page"
      className="w-full min-h-dvh bg-beige-paper py-16 px-4 md:px-8 lg:px-16 pt-28"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-16 relative z-10"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white border-2 border-charcoal shadow-[4px_4px_0px_0px_#1A1A1A] mb-4">
            <BookOpen className="w-4 h-4 text-red-flag" />
            <span className="text-sm font-bold text-charcoal uppercase tracking-wider">Hồ sơ dự án</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bungee text-charcoal tracking-tight drop-shadow-sm">
            QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
          </h1>
          <p className="text-base md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed font-inter font-medium border-l-4 border-red-flag pl-4 text-justify md:text-center">
            Nghiên cứu tư tưởng Hồ Chí Minh về con đường quá độ lên chủ nghĩa xã hội,
            lý giải khái niệm "bỏ qua chế độ tư bản chủ nghĩa" và vận dụng trong phát triển hiện nay.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="mb-10 flex items-center gap-4 border-b-4 border-charcoal pb-4">
          <div className="p-3 bg-red-flag border-2 border-charcoal shadow-[4px_4px_0px_0px_#1A1A1A]">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bungee text-charcoal">
              NHÂN SỰ DỰ ÁN
            </h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {member.map((m, index) => (
            <ProfileCard key={index} member={m} index={index} />
          ))}
        </motion.div>
      </div>

      {/* References Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="mb-10 flex items-center gap-4 border-b-4 border-charcoal pb-4">
          <div className="p-3 bg-yellow-star border-2 border-charcoal shadow-[4px_4px_0px_0px_#1A1A1A]">
            <FileText className="w-6 h-6 text-charcoal" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bungee text-charcoal">
              TÀI LIỆU THAM KHẢO
            </h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-charcoal border-dashed">
          <span className="text-charcoal text-sm font-mono">
           // PROJECT_HCM202_FPT_UNIVERSITY
          </span>
        </div>
      </motion.div>
    </div>
  );
}
