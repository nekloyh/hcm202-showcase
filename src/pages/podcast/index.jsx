import { useRef } from "react";
import { motion } from "framer-motion";

const PostcardPage = () => {
  return (
    <div className="w-full min-h-screen bg-off-white pt-28 pb-10 px-4 md:px-10 flex flex-col items-center justify-center">
      {/* Main Card Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl bg-beige-paper border-4 border-charcoal shadow-[12px_12px_0px_0px_#1A1A1A] p-6 md:p-10 relative overflow-hidden"
      >
        {/* Decorative Corner Label */}
        <div className="absolute top-0 right-0 bg-red-flag text-yellow-star px-4 py-2 border-l-4 border-b-4 border-charcoal font-bungee text-sm md:text-base">
          NEW COLLECTION
        </div>

        {/* Header Section */}
        <div className="mb-8 border-b-4 border-charcoal pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <h1 className="font-bungee text-4xl md:text-6xl text-red-flag uppercase leading-none mb-2">
              Video
              <br />
              Podcast
            </h1>
            <p className="font-mono text-charcoal font-bold text-sm md:text-base bg-white border-2 border-charcoal inline-block px-2 py-1 shadow-[2px_2px_0px_0px_#1A1A1A]">
              File: video.mp4
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="font-bungee text-charcoal opacity-50">
              HCM202 SHOWCASE
            </p>
            <p className="font-mono text-xs text-charcoal">Recorded: 2026</p>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video bg-black border-4 border-charcoal shadow-[6px_6px_0px_0px_#1A1A1A] group">
          {/* Decorative Lines/Grid (Overlay) */}
          <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <video
            controls
            className="w-full h-full object-contain focus:outline-none"
            src="https://github.com/nekloyh/hcm202-showcase/releases/download/assets/video.mp4"
            poster="/podcast/poster.png"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer / Description */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="font-bungee text-xl text-charcoal mb-2">
              Thông điệp
            </h3>
            <p className="font-mono text-sm leading-relaxed text-charcoal/80">
              Việc kiên định con đường quá độ lên Chủ nghĩa xã hội chính là cú
              phủ định biện chứng bản lĩnh của dân tộc: chúng ta bỏ qua sự bóc
              lột nhưng tiếp thu trọn vẹn văn minh nhân loại để tự tay viết nên
              logic phát triển của chính mình.
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-end">
            <button
              onClick={() => window.open("https://github.com/nekloyh/hcm202-showcase/releases/download/assets/video.mp4")}
              className="w-full py-3 bg-yellow-star text-red-flag font-bungee border-2 border-charcoal shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
            >
              <span>TẢI VIDEO</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostcardPage;
