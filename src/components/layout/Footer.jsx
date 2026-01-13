/**
 * Footer Component với HCM Quote Generator
 * Neo-Brutalist Heritage style
 *
 * Features:
 * - HCM Quote Generator widget
 * - Project info
 * - Social links
 */

import { Heart, Github, ExternalLink } from "lucide-react";
import HCMQuoteGenerator from "../widgets/HCMQuoteGenerator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent to-[#0D0D0D] mt-auto">
      {/* Decorative Border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#DA251D]/50 to-transparent" />

      {/* Quote Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-bungee text-2xl md:text-3xl text-white mb-2">
              Lời Bác dạy
            </h2>
            <p className="text-gray-400 text-sm">
              Mỗi lần tải lại trang để xem câu nói mới
            </p>
          </div>
          <HCMQuoteGenerator />
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* About */}
            <div>
              <h3 className="font-bungee text-lg text-white mb-4">HCM202</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Dự án nghiên cứu về tư tưởng Hồ Chí Minh và con đường quá độ lên
                chủ nghĩa xã hội ở Việt Nam. Được xây dựng bởi sinh viên FPTU.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 
                    hover:bg-white/10 transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                {[
                  { label: "Trang chủ", href: "/trang-chu" },
                  { label: "Lý luận CNXH", href: "/qua-trinh-ra-doi" },
                  { label: "Vận dụng thực tiễn", href: "/van-dung" },
                  { label: "Trợ lý AI", href: "/ai-chatbot" },
                  { label: "Thông tin dự án", href: "/informations" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#FFCD00] transition-colors
                        inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold text-white mb-4">Công nghệ</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React 19",
                  "Vite",
                  "Tailwind CSS",
                  "Framer Motion",
                  "GSAP",
                  "Three.js",
                  "Groq AI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10
                      text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} HCM202 Project. Made with{" "}
            <Heart className="w-4 h-4 inline text-[#DA251D]" /> by FPTU Students.
          </p>
          <p className="text-gray-600 text-xs">
            Tư tưởng Hồ Chí Minh - Môn học HCM202
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
