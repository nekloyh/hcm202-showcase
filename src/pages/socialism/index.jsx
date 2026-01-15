import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Users,
  BookOpen,
  Zap,
  Globe,
  Shield,
  Heart,
  ArrowRight,
  Clock,
  Flag,
  Sparkles,
  Target
} from "lucide-react";
import "./styles.css";

// --- Components ---

const SectionHeading = ({ number, title, subtitle }) => (
  <div className="mb-12 border-l-8 border-red-flag pl-6 py-2">
    <span className="block font-mono text-charcoal/60 text-sm mb-1 tracking-widest">{number} // {subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-black font-display text-charcoal uppercase leading-none drop-shadow-sm">
      {title}
    </h2>
  </div>
);

const Card = ({ title, desc, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group bg-white border-2 border-charcoal p-6 shadow-[6px_6px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 h-full flex flex-col"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-beige-paper border-2 border-charcoal text-red-flag">
        <Icon size={24} />
      </div>
      <span className="font-mono text-xs text-charcoal/40">0x{delay * 10}</span>
    </div>
    <h3 className="font-bungee text-xl text-charcoal mb-3 uppercase group-hover:text-red-flag transition-colors">
      {title}
    </h3>
    <p className="font-inter text-charcoal/80 text-sm leading-relaxed flex-1">
      {desc}
    </p>
  </motion.div>
);

const TimelineItem = ({ number, title, active }) => (
  <div className={`relative flex flex-col items-center flex-1 min-w-[120px] ${active ? "opacity-100 scale-110" : "opacity-50 grayscale"}`}>
    <div className={`w-4 h-4 rounded-full border-2 border-charcoal z-10 mb-4 ${active ? "bg-red-flag" : "bg-white"}`}></div>
    <div className="text-center">
      <div className="font-mono text-xs mb-1">STAGE {number}</div>
      <div className={`font-bungee text-sm md:text-base uppercase ${active ? "text-red-flag" : "text-charcoal"}`}>{title}</div>
    </div>
    {/* Connector Line */}
    <div className="absolute top-2 left-1/2 w-full h-0.5 bg-charcoal -z-0"></div>
  </div>
);

const FeatureBento = ({ title, desc, icon: Icon, colSpan = "col-span-1" }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`${colSpan} bg-off-white border-2 border-charcoal p-6 md:p-8 flex flex-col justify-between relative overflow-hidden`}
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl font-black leading-none pointer-events-none text-charcoal">
      <Icon size={120} />
    </div>
    <div className="mb-4 text-red-flag">
      <Icon size={32} />
    </div>
    <div>
      <h3 className="font-bungee text-2xl text-charcoal mb-2">{title}</h3>
      <p className="font-inter text-charcoal/70">{desc}</p>
    </div>
  </motion.div>
);

// --- Main Page Component ---

const SocialismPage = () => {
  const targetRef = useRef(null);

  return (
    <div ref={targetRef} className="min-h-screen bg-beige-paper overflow-hidden pt-20">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 bg-grid-pattern border-b-4 border-charcoal">
        <div className="max-w-6xl w-full text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-charcoal text-yellow-star font-mono text-sm mb-6 border-2 border-yellow-star shadow-[4px_4px_0px_0px_#DA251D]"
          >
            <Sparkles size={16} />
            <span>MANIFESTO_2026.EXE</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black font-display text-charcoal leading-[0.85] tracking-tighter uppercase mb-8">
            CHỦ NGHĨA <br />
            <span className="text-red-flag text-stroke-charcoal">XÃ HỘI</span>
          </h1>

          <div className="max-w-3xl mx-auto bg-white border-4 border-charcoal p-8 md:p-12 shadow-[12px_12px_0px_0px_#1A1A1A] relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-flag border-2 border-charcoal"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-yellow-star border-2 border-charcoal"></div>

            <p className="font-serif-accent text-2xl md:text-3xl text-charcoal/90 italic leading-relaxed">
              "Không chỉ là một lý thuyết, đó là <span className="text-red-flag font-bold underline decoration-4 decoration-yellow-star">giai đoạn tất yếu</span> của sự phát triển loài người để hướng tới tự do và hạnh phúc."
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <div className="w-[2px] h-12 bg-charcoal"></div>
          <span className="font-mono text-xs uppercase">Scroll to learn</span>
        </div>
      </section>

      {/* 2. PERSPECTIVES (4 GÓC ĐỘ) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading number="01" subtitle="TIẾP CẬN TOÀN DIỆN" title="4 GÓC ĐỘ CƠ BẢN" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            title="Phong Trào Thực Tiễn"
            desc="Là cuộc đấu tranh bền bỉ của nhân dân lao động chống lại áp bức, bóc lột của giai cấp thống trị. Nó không nằm trên giấy, mà nằm ở hành động thực tiễn."
            icon={Flag}
            delay={0.1}
          />
          <Card
            title="Trào Lưu Tư Tưởng"
            desc="Là hệ tư tưởng phản ánh lý tưởng giải phóng giai cấp công nhân và nhân dân lao động, hướng tới một xã hội công bằng, bác ái, văn minh."
            icon={Zap}
            delay={0.2}
          />
          <Card
            title="Khoa Học"
            desc="Chủ nghĩa xã hội khoa học (Mác - Lênin) làm rõ sứ mệnh lịch sử của giai cấp công nhân và tính tất yếu của việc thay thế tư bản bằng xã hội chủ nghĩa."
            icon={BookOpen}
            delay={0.3}
          />
          <Card
            title="Chế Độ Xã Hội"
            desc="Là mô hình xã hội hiện thực tốt đẹp hơn CNTB, đánh dấu giai đoạn phát triển cao hơn của loài người mà chúng ta đang xây dựng."
            icon={Globe}
            delay={0.4}
          />
        </div>
      </section>

      {/* 3. HISTORY TIMELINE */}
      <section className="py-20 bg-charcoal text-off-white border-y-4 border-charcoal relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('/images/home/paperScratched.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bungee text-white mb-2">DÒNG CHẢY LỊCH SỬ</h2>
              <p className="font-mono text-yellow-star">THE_FLOW_OF_TIME // 5_STAGES</p>
            </div>
            <div className="hidden md:block text-right max-w-xs text-sm text-gray-400">
              Lịch sử loài người là lịch sử thay thế các hình thái kinh tế - xã hội (thấp đến cao).
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 overflow-x-auto pb-8 mask-linear-fade">
            <TimelineItem number="01" title="Nguyên Thủy" />
            <TimelineItem number="02" title="Chiếm Hữu Nô Lệ" />
            <TimelineItem number="03" title="Phong Kiến" />
            <TimelineItem number="04" title="Tư Bản (CNTB)" />
            <div className="flex-1 min-w-[150px] relative px-4">
              <div className="bg-red-flag text-yellow-star border-2 border-white p-4 text-center shadow-[4px_4px_0px_0px_#FFF] transform scale-110">
                <div className="font-mono text-xs mb-1 animate-pulse">LOADING...</div>
                <div className="font-bungee text-lg">CHỦ NGHĨA XÃ HỘI</div>
              </div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 -z-10"></div>
            </div>
            <TimelineItem number="05" title="Cộng Sản CN" />
          </div>

          <div className="mt-12 p-6 border-2 border-white/20 bg-white/5 rounded-sm">
            <h4 className="font-bold text-yellow-star mb-2 flex items-center gap-2">
              <Clock size={18} /> THỜI KỲ QUÁ ĐỘ LÀ GÌ?
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ <span className="text-white font-bold">cải biến cách mạng</span>. Thời kỳ này chính là "Thời kỳ quá độ", khi cái cũ chưa mất đi hẳn và cái mới đang dần hình thành.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS FOR BIRTH */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b-4 border-charcoal">
        <SectionHeading number="02" subtitle="ĐIỀU KIỆN RA ĐỜI" title="TÍNH TẤT YẾU LỊCH SỬ" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Economic Conditions */}
          <div className="bg-white p-8 border-l-4 border-red-flag shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-flag text-yellow-star rounded-full"><Zap size={24} /></div>
              <h3 className="font-bungee text-2xl text-charcoal">ĐIỀU KIỆN KINH TẾ</h3>
            </div>
            <div className="font-inter text-charcoal/80 space-y-4">
              <p>Mâu thuẫn cơ bản của chủ nghĩa tư bản ngày càng gay gắt:</p>
              <div className="p-4 bg-gray-100 border-2 border-charcoal text-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Lực lượng sản xuất</span>
                  <span className="text-red-flag font-black text-xl">VS</span>
                  <span className="font-bold">Quan hệ sản xuất</span>
                </div>
                <div className="flex justify-between text-xs text-charcoal/60">
                  <span>(Xã hội hóa cao)</span>
                  <span>(Chiếm hữu tư nhân)</span>
                </div>
              </div>
              <p className="italic text-sm">&rarr; Quan hệ sản xuất TBCN trở thành xiềng xích kìm hãm sự phát triển, đòi hỏi phải bị phá bỏ.</p>
            </div>
          </div>

          {/* Political Conditions */}
          <div className="bg-charcoal p-8 border-l-4 border-yellow-star shadow-lg text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-yellow-star text-charcoal rounded-full"><Users size={24} /></div>
              <h3 className="font-bungee text-2xl text-yellow-star">ĐIỀU KIỆN CHÍNH TRỊ</h3>
            </div>
            <div className="font-inter text-white/80 space-y-4">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-star">01.</span>
                  <span><strong>Giai cấp công nhân:</strong> Phát triển mạnh về số lượng và chất lượng (có ý thức tổ chức, kỷ luật cao).</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-yellow-star">02.</span>
                  <span><strong>Đảng Cộng Sản ra đời:</strong> Là nhân tố quyết định, trang bị lý luận cách mạng khoa học.</span>
                </li>
              </ul>
              <div className="p-4 bg-white/10 border-2 border-white/30 font-bold text-white text-sm mt-4 text-center">
                &rArr; CÁCH MẠNG XÃ HỘI CHỦ NGHĨA NỔ RA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 6 FEATURES (6 ĐẶC TRƯNG) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <SectionHeading number="03" subtitle="BẢN CHẤT" title="6 ĐẶC TRƯNG CƠ BẢN" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <FeatureBento
            title="1. Giải Phóng"
            desc="Mục tiêu cao nhất là giải phóng giai cấp, giải phóng dân tộc và con người. Tạo điều kiện để con người phát triển toàn diện, tự do."
            icon={Target}
          />
          <FeatureBento
            title="2. Làm Chủ"
            desc="Nhân dân lao động là chủ nhân thực sự của xã hội. Quyền lực thuộc về nhân dân, do nhân dân thực thi dưới sự lãnh đạo của Đảng."
            icon={Users}
          />
          <FeatureBento
            title="3. Kinh Tế Cao"
            desc="Nền kinh tế phát triển dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu."
            icon={Zap}
          />
          <FeatureBento
            title="4. Nhà Nước Mới"
            desc="Nhà nước pháp quyền XHCN đại diện cho ý chí và quyền lực của nhân dân, thực hiện chức năng quản lý và xây dựng xã hội mới."
            icon={Shield}
          />
          <FeatureBento
            title="5. Văn Hóa"
            desc="Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc, tiếp thu tinh hoa nhân loại. Văn hóa là nền tảng tinh thần."
            icon={BookOpen}
          />
          <FeatureBento
            title="6. Bình Đẳng"
            desc="Xóa bỏ mọi áp bức dân tộc, bảo đảm bình đẳng, đoàn kết, tôn trọng và giúp đỡ nhau cùng phát triển giữa các dân tộc."
            icon={Globe}
          />
        </div>
      </section>

      {/* 6. OUTRO / CTA */}
      <section className="py-24 bg-charcoal text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-flag opacity-10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6 leading-tight">
            "Sự nghiệp của nhân dân, do nhân dân, vì nhân dân."
          </h2>
          <a
            href="/thoi-ki-qua-do"
            className="inline-block px-8 py-4 bg-yellow-star text-charcoal font-bungee text-lg border-4 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(255,205,0,0.5)] transform hover:scale-105"
          >
            KHÁM PHÁ: THỜI KỲ QUÁ ĐỘ
            <ArrowRight className="inline-block ml-2 mb-1" size={20} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default SocialismPage;
