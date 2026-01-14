import { useEffect, useRef } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);
  const frame3Ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Frame 1
        const tl1 = gsap.timeline({scrollTrigger: {
            trigger: frame1Ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Animate elements ra khỏi màn hình khi scroll
        tl1
          .to("#home_title", {y: -200, opacity: 0, duration: 1,})
          .to("#anh_chien_si", {x: -window.innerWidth, duration: 1,}, 0.3)
          .to("#anh_bac", {x: window.innerWidth, duration: 1,}, 0.3);

        // FRAME 2 ANIMATIONS - ENTER
        // Set initial states cho frame 2
        gsap.set("#quote_container", { y: 100, opacity: 0 });
        gsap.set("#anh_bac_2", { x: -200, opacity: 0 });

        const tl2Enter = gsap.timeline({
          scrollTrigger: {
            trigger: frame2Ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        });

        // Animation vào màn hình
        tl2Enter
          .to("#quote_container", {
            y: 0,
            opacity: 1,
            duration: 0.8,
          })
          .to(
            "#anh_bac_2",
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
            },
            0.2
          );

        // FRAME 2 ANIMATIONS - EXIT
        const tl2Exit = gsap.timeline({
          scrollTrigger: {
            trigger: frame2Ref.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Animation ra khỏi màn hình
        tl2Exit
          .to(
            "#quote_container",
            {
              y: -200,
              opacity: 0,
              duration: 1,
              ease: "power1.inOut",
            },
            0
          )
          .to(
            "#anh_bac_2",
            {
              x: -window.innerWidth,
              opacity: 0,
              duration: 1,
              ease: "power1.inOut",
            },
            0.2
          );

        // FRAME 3 ANIMATIONS - ENTER
        // Set initial states cho frame 3
        gsap.set("#nav_1, #nav_2, #nav_3", { x: -innerWidth, opacity: 0 });
        gsap.set("#model", { opacity: 0 });
        gsap.set("#description", { y: 150, opacity: 0 });
        gsap.set("#white_section", {
          scaleX: 0,
          transformOrigin: "left center",
        });

        const tl3Enter = gsap.timeline({
          scrollTrigger: {
            trigger: frame3Ref.current,
            start: "top bottom+=100", // Bắt đầu sớm hơn một chút
            end: "center center", // Mở rộng range để animation mượt hơn
            scrub: 1.2, // Tăng scrub để chậm lại
            anticipatePin: 1,
          },
        });

        // Animation vào màn hình với timing tốt hơn
        tl3Enter
          .to(
            "#white_section",
            {
              scaleX: 1,
              duration: 2,
              ease: "power2.out",
            },
            0
          )
          .to(
            "#nav_1",
            {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "back.out(1.2)",
            },
            0.5
          )
          .to(
            "#nav_2",
            {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "back.out(1.2)",
            },
            0.7
          )
          .to(
            "#nav_3",
            {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "back.out(1.2)",
            },
            0.9
          )
          .to(
            "#model",
            {
              opacity: 1,
              duration: 2.5,
              ease: "power2.out",
            },
            1
          )
          .to(
            "#description",
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease: "power2.out",
            },
            1.5
          );
      }, containerRef);

      return () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="home-page w-full min-h-screen overflow-y-auto overflow-x-hidden"
      style={{ height: "auto" }}
    >
      {/* FRAME 1 */}
      <div
        ref={frame1Ref}
        id="frame_1"
        className="w-full h-screen p-10 relative overflow-x-hidden"
      >
        <div
          id="home_title"
          className="relative flex flex-col items-start justify-center p-20 w-3/5 z-20 gap-5"
        >
          <div className="w-full flex items-center justify-center text-(--color-red-flag)">
            <p id="gradient_text" className="font-bungee text-8xl drop-shadow-lg pt-4 pb-1">
              CHỦ NGHĨA XÃ HỘI
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="font-bungee text-5xl text-white drop-shadow-[0_4px_4px_rgba(218,37,29,0.8)]">
              TÌM HIỂU LÝ LUẬN QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="font-bungee text-center text-3xl text-white drop-shadow-[0_4px_4px_rgba(218,37,29,0.8)]">
              về đảng cộng sản Việt Nam
            </p>
          </div>
        </div>

        {/* Ảnh Chiến Sĩ */}
        <div
          id="anh_chien_si"
          className="w-full absolute bottom-0 left-0 overflow-hidden z-1"
        >
          <img
            className="w-10/12 h-auto mt-56"
            style={{ transform: "translateY(200px)" }}
            src="/images/home/nhandan.png"
            alt="Ảnh Chiến Sĩ"
          />
        </div>
        {/* Ảnh Bác */}
        <div
          id="anh_bac"
          className="absolute bottom-0 right-0 overflow-hidden h-full z-10"
        >
          <img
            className="h-full w-auto "
            style={{ transform: "translateY(210px)" }}
            src="/images/home/anhbac1.png"
            alt="Ảnh Bác Hồ"
          />
        </div>
      </div>

      {/* FRAME 2 */}
      <div
        ref={frame2Ref}
        id="frame_2"
        className=" w-full h-screen flex flex-col relative"
      >
        <div
          id="quote_container"
          className="mt-30 w-full h-72 flex bg-[var(--color-brown-heritage)] border-t-2 border-b-2 border-white justify-end"
        >
          <div
            id="quote_text"
            className="h-full w-3/5 flex flex-col justify-between p-10"
          >
            <div className="flex items-end text-white">
              <p className="font-serif italic text-9xl leading-none opacity-50">
                "
              </p>
              <p className="font-serif-accent text-5xl italic leading-tight">
                "Chủ nghĩa xã hội là làm sao cho dân giàu, nước mạnh, mọi người
                hạnh phúc."
              </p>
            </div>
            <div
              id="quote_author"
              className="w-full flex items-center justify-end text-white"
            >
              <p className="font-serif-accent font-light italic mt-4">
                - Chủ tịch Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        <div
          id="anh_bac_2"
          className="absolute bottom-0 left-0 overflow-hidden h-11/12 z-10"
        >
          <img
            className="h-full"
            src="/images/home/anhbac2.png"
            alt="Ảnh Bác Hồ"
          />
        </div>
      </div>

      {/* FRAME 3 */}
      <div
        ref={frame3Ref}
        id="frame_3"
        className="w-full h-screen relative overflow-x-hidden"
      >
        {/* White/Light section - bottom part with diagonal cut */}
        <div
          id="white_section"
          className="absolute bottom-0 left-0 w-full h-3/5 bg-[var(--color-beige-paper)] z-1"
          style={{
            clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>

        {/* Menu Tags on the right */}
        <div
          id="menu_navs"
          className=" absolute top-10 right-10 flex flex-col gap-4 z-20"
        >
          <div
            onClick={() => navigate("/qua-trinh-ra-doi")}
            id="nav_1"
            className="bg-[var(--color-red-flag)] hover:bg-[#B31B1B] transition-colors cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-3 min-w-96 shadow-lg border border-yellow-400/30"
          >
            <div className="bg-[var(--color-yellow-star)] text-[var(--color-red-flag)] rounded-full w-8 h-8 flex items-center justify-center font-black font-bungee">
              1
            </div>
            <span className="font-bold text-sm font-inter">
              LÝ LUẬN QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </span>
          </div>
          <div
            onClick={() => navigate("/van-dung")}
            id="nav_2"
            className="bg-[var(--color-red-flag)] hover:bg-[#B31B1B] transition-colors cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-3 min-w-96 shadow-lg border border-yellow-400/30"
          >
            <div className="bg-[var(--color-yellow-star)] text-[var(--color-red-flag)] rounded-full w-8 h-8 flex items-center justify-center font-black font-bungee">
              2
            </div>
            <span className="font-bold text-sm font-inter">
              VẬN DỤNG TRONG PHÁT TRIỂN HIỆN NAY
            </span>
          </div>
          <div
            onClick={() => navigate("/ai-chatbot")}
            id="nav_3"
            className="bg-[var(--color-red-flag)] hover:bg-[#B31B1B] transition-colors cursor-pointer text-white px-6 py-3 rounded-full flex items-center gap-3 min-w-96 shadow-lg border border-yellow-400/30"
          >
            <div className="bg-[var(--color-yellow-star)] text-[var(--color-red-flag)] rounded-full w-8 h-8 flex items-center justify-center font-black font-bungee">
              3
            </div>
            <span className="font-bold text-sm font-inter">
              TRỢ LÝ AI VỀ QUÁ ĐỘ CNXH
            </span>
          </div>
        </div>

        {/* Main Content Text */}
        <div
          id="description"
          className="absolute bottom-32 right-20 text-right z-20"
        >
          <h3 className="text-[var(--color-red-flag)] font-bold font-bungee text-xl mb-2 tracking-wide">
            FPTU HCM202 STUDENTS GROUP
          </h3>
          <h1 className="text-[#8B0000] font-black font-display text-7xl mb-6">
            ĐỀ TÀI MỚI
          </h1>
          <p className="text-[var(--color-charcoal)] font-body font-medium text-lg max-w-2xl leading-relaxed ml-auto">
            Vì sao con đường quá độ lên chủ nghĩa xã hội ở Việt Nam được coi là
            <span className="text-[var(--color-red-flag)] font-bold">
              {" "}
              "bỏ qua"{" "}
            </span>
            chế độ tư bản chủ nghĩa? Khám phá cách Hồ Chí Minh lý giải “bỏ qua”
            không phải phủ định sạch trơn, mà là lựa chọn tất yếu dựa trên điều
            kiện lịch sử, kinh tế, xã hội của Việt Nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
