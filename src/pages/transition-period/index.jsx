import "./styles.css";
import { motion } from "framer-motion";
import {
  History,
  Lightbulb,
  Zap,
  Globe,
  ShieldCheck,
  Users,
  Gavel,
  TrendingUp,
  ArrowRight,
  Anchor,
  Leaf
} from "lucide-react";

// --- Data for Comparison Cards (The Core: "Bỏ qua" vs "Kế thừa")
const comparisonData = {
  skip: {
    title: "BỎ",
    description: "Chế độ áp bức bất công",
    items: [
      "Thống trị của QHSX Tư bản",
      "Bóc lột sức lao động",
      "Thống trị chính trị của giai cấp tư sản"
    ],
    bg: "bg-charcoal",
    text: "text-white"
  },
  keep: {
    title: "GIỮ",
    description: "Thành tựu văn minh nhân loại",
    items: [
      "Quy luật Kinh tế thị trường",
      "Khoa học & Công nghệ hiện đại",
      "Phương pháp quản lý tiên tiến"
    ],
    bg: "bg-off-white",
    text: "text-charcoal"
  }
};

// --- Data for Bento Grid (Expanded Content)
const features = [
  {
    title: "Kinh tế",
    desc: "Thị trường định hướng XHCN & Công nghiệp hóa",
    items: [
      "Phát triển kinh tế thị trường định hướng XHCN.",
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức.",
      "Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước phát triển."
    ],
    icon: TrendingUp,
    bg: "bg-cream",
    border: "border-red-flag"
  },
  {
    title: "Chính trị",
    desc: "Nhà nước pháp quyền của dân, do dân, vì dân",
    items: [
      "Xây dựng Nhà nước pháp quyền XHCN vững mạnh.",
      "Đảng Cộng sản lãnh đạo toàn diện.",
      "Phát huy quyền làm chủ (dân chủ) của nhân dân."
    ],
    icon: Gavel,
    bg: "bg-white",
    border: "border-charcoal"
  },
  {
    title: "Văn hóa",
    desc: "Tiên tiến, đậm đà bản sắc dân tộc",
    items: [
      "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
      "Văn hóa là nền tảng tinh thần của xã hội.",
      "Phát triển nguồn nhân lực chất lượng cao."
    ],
    icon: History,
    bg: "bg-beige-paper",
    border: "border-charcoal"
  },
  {
    title: "Con người",
    desc: "Trung tâm của chiến lược phát triển",
    items: [
      "Xây dựng con người Việt Nam phát triển toàn diện (Đức - Trí - Thể - Mỹ).",
      "Nâng cao đời sống vật chất và tinh thần của nhân dân.",
      "Đảm bảo an sinh xã hội."
    ],
    icon: Users,
    bg: "bg-white",
    border: "border-yellow-star"
  },
  {
    title: "An Ninh",
    desc: "Bảo vệ vững chắc Tổ quốc XHCN",
    items: [
      "Bảo đảm vững chắc quốc phòng và an ninh quốc gia.",
      "Giữ vững trật tự, an toàn xã hội.",
      "Xây dựng lực lượng vũ trang nhân dân cách mạng."
    ],
    icon: ShieldCheck,
    bg: "bg-charcoal",
    text: "text-white",
    border: "border-charcoal"
  },
  {
    title: "Đối ngoại",
    desc: "Độc lập, tự chủ, hội nhập toàn diện",
    items: [
      "Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình.",
      "Chủ động và tích cực hội nhập quốc tế.",
      "Là bạn, là đối tác tin cậy của các nước."
    ],
    icon: Globe,
    bg: "bg-red-flag",
    text: "text-yellow-star",
    border: "border-charcoal"
  }
];

const TransitionPeriodPage = () => {
  return (
    <div className="w-full min-h-screen bg-off-white overflow-x-hidden pt-20">
      {/* 1. HERO SECTION: "CÚ NHẢY LỊCH SỬ" */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center p-4 lg:p-10 border-b-4 border-charcoal bg-grid-pattern">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#F5F5DC] opacity-90 -z-10"></div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 space-y-6"
        >
          <div className="inline-block px-6 py-3 bg-yellow-star border-2 border-charcoal shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
            <span className="font-mono text-base md:text-lg uppercase font-bold tracking-widest text-charcoal">
              The transition to socialism
            </span>
          </div>

          <h1 className="font-bungee text-6xl md:text-8xl lg:text-[9rem] text-red-flag uppercase leading-[0.85] drop-shadow-xl mb-8">
            THỜI KỲ
            <br />
            <span className="text-charcoal text-stroke-red">QUÁ ĐỘ</span>
          </h1>

          <div className="w-full max-w-3xl mx-auto mt-8 bg-white border-4 border-charcoal p-8 md:p-10 shadow-[10px_10px_0px_0px_#1A1A1A] rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
            <p className="font-serif-accent italic text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed">
              "Không phải đường tắt, mà là{" "}
              <span className="text-red-flag font-black bg-yellow-star/30 px-1">
                lối đi tắt đón đầu
              </span>{" "}
              của lịch sử."
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowRight className="rotate-90 text-charcoal w-8 h-8" />
        </motion.div>
      </section>

      {/* 2. INTRO: THE HOOK & CONTEXT */}
      <section className="w-full max-w-7xl mx-auto py-20 px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="font-bungee text-4xl lg:text-5xl text-charcoal mb-4">
            TẠI SAO PHẢI "QUÁ ĐỘ"?
          </h2>
          <div className="h-2 w-32 bg-red-flag mb-6"></div>

          <p className="font-inter text-lg text-charcoal/80 leading-relaxed text-justify">
            Sau Cách mạng Tháng 8 (1945), Việt Nam có xuất phát điểm rất thấp:
            kinh tế nông nghiệp lạc hậu, hậu quả chiến tranh nặng nề. Các con
            đường cứu nước trước đó (Phong kiến, Tiểu tư sản) đều bế tắc.
          </p>
          <p className="font-inter text-lg text-charcoal font-bold bg-yellow-star/20 p-4 border-l-4 border-red-flag">
            Chỉ có đi lên Chủ nghĩa Xã hội mới là "lựa chọn tất yếu" để giải
            phóng dân tộc thực sự và phát triển bền vững.
          </p>
        </motion.div>

        {/* Right: Visual Context (Placeholder for now) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full"
        >
          {/* Abstract Construction Visual */}
          <div className="absolute inset-0 bg-charcoal clip-path-polygon"></div>
          <div className="absolute inset-4 border-4 border-white flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1533658590680-362544278482?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 border-charcoal shadow-[12px_12px_0px_0px_#DA251D]">
            <div className="bg-black/60 p-6 text-center backdrop-blur-sm">
              <span className="font-bungee text-yellow-star text-2xl block">
                1945 - Nay
              </span>
              <span className="font-inter text-white text-sm">
                Hành trình lột xác
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. THE CORE: GIẢI MÃ "BỎ QUA" (Split Section) */}
      <section className="w-full bg-cream border-y-4 border-charcoal py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bungee text-4xl lg:text-6xl text-charcoal">
              GIẢI MÃ "BỎ QUA"
            </h2>
            <p className="font-inter text-xl mt-4 max-w-2xl mx-auto">
              "Bỏ qua" chế độ Tư bản chủ nghĩa không phải là phủ định sạch trơn,
              mà là sự kế thừa biện chứng (Aufheben).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT: BỎ */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`${comparisonData.skip.bg} ${comparisonData.skip.text} border-4 border-charcoal p-8 shadow-[12px_12px_0px_0px_#DA251D] relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 text-9xl font-black opacity-10 select-none">
                XXX
              </div>
              <h3 className="font-bungee text-4xl mb-2">
                {comparisonData.skip.title}
              </h3>
              <p className="font-serif-accent italic text-xl mb-6 opacity-80">
                {comparisonData.skip.description}
              </p>
              <ul className="space-y-4">
                {comparisonData.skip.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-bold text-lg"
                  >
                    <span className="block w-2 h-2 bg-red-flag rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT: GIỮ */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`${comparisonData.keep.bg} ${comparisonData.keep.text} border-4 border-charcoal p-8 shadow-[12px_12px_0px_0px_#1A1A1A] relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 text-9xl font-black text-green-500 opacity-10 select-none">
                VVV
              </div>
              <h3 className="font-bungee text-4xl mb-2">
                {comparisonData.keep.title}
              </h3>
              <p className="font-serif-accent italic text-xl mb-6 opacity-80">
                {comparisonData.keep.description}
              </p>
              <ul className="space-y-4">
                {comparisonData.keep.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-bold text-lg"
                  >
                    <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE BLUEPRINT: BENTO GRID (EXPANDED) */}
      <section className="w-full max-w-7xl mx-auto py-24 px-4 lg:px-10">
        <h2 className="font-bungee text-4xl lg:text-6xl text-charcoal mb-4 text-center">
          <span className="bg-red-flag text-white px-2">BẢN THIẾT KẾ</span> XÃ
          HỘI
        </h2>
        <p className="text-center text-charcoal/60 mb-12 font-inter max-w-2xl mx-auto">
          Những phương hướng và nhiệm vụ trọng tâm để xây dựng đất nước trong
          thời kỳ quá độ (Theo Văn kiện Đại hội Đảng).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${feat.bg} ${feat.text || "text-charcoal"} ${feat.border} border-4 p-6 shadow-bento hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-none transition-all duration-200 cursor-default group h-full`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg border-2 border-current">
                    <Icon size={32} />
                  </div>
                  <span className="font-bungee text-4xl opacity-20">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-bungee text-2xl mb-4 group-hover:underline decoration-4 decoration-current underline-offset-4">
                  {feat.title}
                </h3>
                {/* Bullet Points added here */}
                <ul className="space-y-2 mt-4">
                  {feat.items &&
                    feat.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-base font-inter opacity-90 leading-snug"
                      >
                        <span className="font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. 9 RELATIONSHIPS (NEW SECTION) */}
      <section className="py-20 px-4 md:px-10 bg-white border-y-4 border-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="text-left">
              <div className="bg-charcoal text-yellow-star inline-block px-3 py-1 font-mono text-sm mb-2">
                VĂN KIỆN ĐẠI HỘI XII
              </div>
              <h2 className="font-bungee text-4xl lg:text-5xl text-charcoal">
                9 MỐI QUAN HỆ LỚN
              </h2>
            </div>
            <div className="md:w-1/2 text-charcoal/70 font-inter text-sm md:text-base border-l-4 border-red-flag pl-4">
              Đây là những vấn đề biện chứng cốt lõi cần giải quyết để đảm bảo
              sự phát triển hài hòa, bền vững của đất nước.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Đổi mới, ổn định và phát triển",
              "Đổi mới kinh tế và đổi mới chính trị",
              "Kinh tế thị trường và định hướng XHCN",
              "Phát triển LLSX và xây dựng QHSX",
              "Tăng trưởng kinh tế và phát triển văn hóa",
              "Xây dựng CNXH và bảo vệ Tổ quốc",
              "Độc lập, tự chủ và hội nhập quốc tế",
              "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ",
              "Nhà nước, thị trường và xã hội",
            ].map((rel, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-off-white border-2 border-charcoal p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_#1A1A1A]"
              >
                <div className="font-bungee text-red-flag text-xl">
                  0{i + 1}
                </div>
                <div className="font-bold text-charcoal text-base uppercase">
                  {rel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MIND MAP / OUTRO */}
      <section className="w-full bg-charcoal text-off-white py-20 px-4 border-t-8 border-red-flag">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Zap className="w-16 h-16 text-yellow-star mx-auto animate-pulse" />
          <h2 className="font-bungee text-4xl lg:text-6xl text-yellow-star">
            KHÁT VỌNG 2045
          </h2>
          <p className="font-inter text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            "Đến giữa thế kỷ XXI, nước ta trở thành{" "}
            <span className="text-red-flag bg-yellow-star px-2 font-bold text-shadow-sm">
              nước phát triển, theo định hướng xã hội chủ nghĩa
            </span>
            ."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="p-4 border border-white/20 rounded hover:bg-white/5 transition-colors">
              <h4 className="font-bungee text-red-flag text-xl mb-2">2025</h4>
              <p className="text-sm">
                Nước đang phát triển, công nghiệp theo hướng hiện đại
              </p>
            </div>
            <div className="p-4 border border-white/20 rounded hover:bg-white/5 transition-colors">
              <h4 className="font-bungee text-red-flag text-xl mb-2">2030</h4>
              <p className="text-sm">
                Nước đang phát triển, công nghiệp hiện đại, thu nhập trung bình
                cao
              </p>
            </div>
            <div className="p-4 border-2 border-yellow-star bg-white/10 rounded transform scale-105">
              <h4 className="font-bungee text-yellow-star text-2xl mb-2">
                2045
              </h4>
              <p className="font-bold text-base">
                Nước phát triển,
                <br />
                thu nhập cao
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransitionPeriodPage;
