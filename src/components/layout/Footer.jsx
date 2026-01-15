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
    <footer className="relative w-full bg-charcoal mt-auto border-t-8 border-red-flag">

      {/* Quote Section - Neo-Brutalist Box */}
      <section className="py-16 px-4 md:px-8 bg-beige-paper border-b-4 border-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-bungee text-2xl md:text-3xl text-brown-heritage mb-2 drop-shadow-md">
              LỜI BÁC DẠY
            </h2>
            <div className="inline-block bg-yellow-star px-4 py-1 border-2 border-charcoal transform -rotate-1 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <p className="text-charcoal font-bold text-sm uppercase">
                F5 để xem câu nói mới
              </p>
            </div>
          </div>
          <div className="bg-white border-4 border-charcoal shadow-[8px_8px_0px_0px_#DA251D] p-6">
            <HCMQuoteGenerator />
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="font-bungee text-2xl text-yellow-star mb-4 drop-shadow-[2px_2px_0px_#DA251D]">HCM202</h3>
            <p className="text-off-white text-sm leading-relaxed mb-6 font-medium border-l-4 border-red-flag pl-4">
              Dự án nghiên cứu về tư tưởng Hồ Chí Minh và con đường quá độ lên
              chủ nghĩa xã hội ở Việt Nam. <br />Được xây dựng bởi sinh viên FPTU.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-off-white border-2 border-transparent hover:border-yellow-star hover:bg-charcoal group transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-charcoal group-hover:text-yellow-star transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bungee text-xl text-off-white mb-6 border-b-2 border-charcoal/50 pb-2 inline-block">Liên kết</h3>
            <ul className="space-y-3">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Chủ nghĩa Xã hội", href: "/chu-nghia-xa-hoi" },
                { label: "Thời kì quá độ", href: "/thoi-ki-qua-do" },
                { label: "Trợ lý ảo", href: "/ai-chatbot" },
                { label: "Thông tin dự án", href: "/informations" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-yellow-star hover:translate-x-2 transition-transform
                      inline-flex items-center gap-2 group font-medium"
                  >
                    <span className="w-2 h-2 bg-red-flag transform rotate-45 group-hover:bg-yellow-star transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-bungee text-xl text-off-white mb-6 border-b-2 border-charcoal/50 pb-2 inline-block">Công nghệ</h3>
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
                  className="px-3 py-1 text-xs font-bold bg-charcoal border border-gray-600 text-gray-300 hover:border-yellow-star hover:text-yellow-star transition-colors hover:shadow-[2px_2px_0px_0px_#F4B82A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-dark-charcoal border-t-2 border-white/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left font-mono">
            © {currentYear} HCM202 Project. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-flag animate-pulse" /> by FPTU Students.
          </p>
          <p className="text-yellow-star/80 text-xs font-bold uppercase tracking-widest border border-yellow-star/30 px-3 py-1">
            Tư tưởng Hồ Chí Minh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
