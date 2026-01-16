import { useRef } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {/* FRAME 1: HERO / INTRO */}
      <section className="w-full h-screen snap-start relative bg-off-white flex items-center justify-center p-4 lg:p-10 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center gap-6 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full max-h-[85vh]">

            {/* Block 1: Large Title - Top Left */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-red-flag border-4 border-charcoal shadow-[8px_8px_0px_0px_#1A1A1A] p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20 mix-blend-difference text-white opacity-80 pointer-events-none">
                <h3 className="font-bungee text-xl lg:text-2xl uppercase leading-none">TƯ TƯỞNG<br />HỒ CHÍ MINH</h3>
                <p className="font-mono text-[10px] lg:text-xs mt-2 text-yellow-star">-- FPT_UNIVERSITY_PROJECT</p>
              </div>
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-20 text-right pointer-events-none">
                <h1 className="font-display font-black text-5xl lg:text-8xl uppercase text-yellow-star leading-[0.85] tracking-tighter drop-shadow-lg">
                  CHỦ NGHĨA<br /><span className="text-charcoal text-stroke-white">XÃ HỘI</span>
                </h1>
              </div>
            </motion.div>

            {/* Block 2: Image Portrait - Top Right */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-beige-paper border-4 border-charcoal shadow-[8px_8px_0px_0px_#1A1A1A] relative overflow-hidden flex items-end justify-center min-h-[200px]"
            >
              <div className="absolute inset-0 bg-[#5D0404]/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black/20"></div>
              <img
                src="/images/home/frame1_1.png"
                alt="Bác Hồ"
                className="w-[120%] h-auto object-cover transform translate-y-10 group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Block 3: Description - Bottom Left */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-white border-4 border-charcoal shadow-[8px_8px_0px_0px_#1A1A1A] p-6 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-red-flag rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-star rounded-full"></div>
                <div className="h-1 flex-1 bg-charcoal/10"></div>
              </div>
              <p className="font-inter font-medium text-charcoal text-base lg:text-xl leading-relaxed">
                "Tư tưởng của <span className="text-red-flag font-bold">Đường Kách Mệnh</span>. vẫn còn nguyên giá trị, và chúng ta còn phải tiếp tục học tập, khai thác, phát huy, vận dụng sáng tạo vào điều kiện hiện nay. Những luận điểm tuy cơ bản nhưng đúng và đến bây giờ vẫn đúng."
              </p>
              <p className="font-bungee text-right text-charcoal/50 text-xs lg:text-sm mt-4">HCM202 PROJECT</p>
            </motion.div>

            {/* Block 4: Revolution Image - Bottom Right */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-charcoal border-4 border-charcoal shadow-[8px_8px_0px_0px_#DA251D] relative overflow-hidden flex items-center justify-center min-h-[200px]"
            >
              <img
                src="/images/home/frame1_2.png"
                alt="Cách mạng"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h2 className="text-white font-bungee text-2xl lg:text-4xl text-center w-full">CHỦ NGHĨA XÃ HỘI</h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FRAME 2: QUOTE */}
      <section className="w-full h-screen snap-start relative bg-beige-paper flex items-center justify-center p-4">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="w-full max-w-5xl bg-brown-heritage border-4 border-charcoal shadow-[12px_12px_0px_0px_#1A1A1A] p-8 lg:p-16 relative z-10"
        >
          {/* Card Decorations */}
          <div className="absolute top-0 left-0 w-full h-2 bg-yellow-star"></div>
          <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-red-flag border-2 border-white"></div>
          <div className="absolute top-4 right-10 w-4 h-4 rounded-full bg-yellow-star border-2 border-charcoal"></div>

          <div className="relative text-center">
            <span className="absolute -top-8 lg:-top-12 left-1/2 transform -translate-x-1/2 font-serif text-[6rem] lg:text-[10rem] leading-none text-white/5 select-none z-0">
              “
            </span>
            <p className="font-serif-accent text-2xl lg:text-5xl italic leading-relaxed text-white drop-shadow-md relative z-10">
              "Chủ nghĩa xã hội là làm sao cho <br className="hidden md:block" />
              <span className="text-yellow-star font-bold bg-charcoal/30 px-2 rounded-sm mx-1">dân giàu</span>,
              <span className="text-yellow-star font-bold bg-charcoal/30 px-2 rounded-sm mx-1">nước mạnh</span>, <br className="hidden md:block" />
              mọi người <span className="text-yellow-star font-bold bg-charcoal/30 px-2 rounded-sm mx-1">hạnh phúc</span>."
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-8 lg:mt-12 gap-3">
            <div className="h-1 w-24 bg-yellow-star mb-2"></div>
            <p className="font-bungee text-white text-lg lg:text-2xl tracking-widest uppercase text-center">
              Chủ tịch Hồ Chí Minh
            </p>
            <p className="font-inter text-white/60 text-xs lg:text-sm uppercase tracking-wide">
              (Trích bài nói chuyện tại Hội nghị cán bộ Đảng)
            </p>
          </div>
        </motion.div>
      </section>

      {/* FRAME 3: NAVIGATION */}
      <section className="w-full h-screen snap-start relative bg-off-white overflow-hidden flex items-center justify-center p-4 lg:p-10">
        {/* Background Decorative Elements */}
        <div
          className="absolute top-0 right-0 w-[60%] h-full bg-beige-paper z-0"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="font-bungee text-5xl lg:text-7xl text-brown-heritage mb-6 drop-shadow-md">
              KHÁM PHÁ
            </h2>
            <div className="bg-cream border-2 border-charcoal p-6 lg:p-8 shadow-[8px_8px_0px_-2px_rgba(26,26,26,1)] relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-flag border-2 border-charcoal"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-yellow-star border-2 border-charcoal"></div>

              <h3 className="text-red-flag font-bold font-bungee text-xl mb-4 tracking-wide border-b-2 border-charcoal/10 pb-2">
                Vấn đề đặt ra
              </h3>
              <p className="text-charcoal font-body font-medium text-lg leading-relaxed">
                Vì sao con đường quá độ lên chủ nghĩa xã hội ở Việt Nam được coi là
                <span className="text-red-flag font-black px-1"> "bỏ qua" </span>
                chế độ tư bản chủ nghĩa?
                <br /><br />
                Khám phá cách Hồ Chí Minh lý giải “bỏ qua” không phải phủ định sạch trơn, mà là lựa chọn tất yếu.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 lg:pl-10">
            {[
              { id: "nav_1", num: "01", text: "CHỦ NGHĨA XÃ HỘI", path: "/chu-nghia-xa-hoi" },
              { id: "nav_2", num: "02", text: "THỜI KÌ QUÁ ĐỘ TẠI VIỆT NAM", path: "/thoi-ki-qua-do" },
              { id: "nav_3", num: "03", text: "VIDEO PODCAST", path: "/video-podcast" },
              { id: "nav_4", num: "04", text: "TRỢ LÝ AI TRA CỨU", path: "/ai-chatbot" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(item.path)}
                className="group cursor-pointer bg-white border-2 border-charcoal p-4 pr-6 flex items-center gap-6 shadow-[6px_6px_0px_0px_#DA251D] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200"
              >
                <div className="w-16 h-16 bg-charcoal text-yellow-star flex items-center justify-center font-bungee text-2xl group-hover:bg-brown-heritage transition-colors">
                  {item.num}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold font-inter text-charcoal text-lg lg:text-xl group-hover:text-brown-heritage transition-colors">
                    {item.text}
                  </h4>
                </div>
                <div className="text-charcoal group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
