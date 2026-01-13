import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll for header animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/trang-chu", label: "Trang chủ" },
    {
      href: "/qua-trinh-ra-doi",
      label: "Quá độ lên CNXH: Lý luận",
    },
    { href: "/van-dung", label: "Vận dụng thực tiễn hiện nay" },
    {
      href: "/ai-chatbot",
      label: "Trợ lý AI về quá độ CNXH",
    },
    {
      href: "/ai-usage",
      label: "AI Usage cho đề tài mới",
    },
    {
      href: "/informations",
      label: "Thông tin dự án & nguồn tham khảo",
    },
  ];

  const handleNavigate = (href) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg"
            : "py-4 bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center gap-4 max-w-7xl mx-auto px-4 md:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-around items-center gap-3 w-full">
            {navItems.map((item) => {
              let isActive = location.pathname === item.href;
              if (location.pathname === "/" && item.href === "/trang-chu") {
                isActive = true;
              }
              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavigate(item.href)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 px-4 py-3 rounded-full font-inter text-sm transition-all duration-200
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#DA251D] to-[#8B0000] text-[#FFCD00] shadow-lg"
                        : "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="block truncate font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="font-bungee text-white text-lg">HCM202</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white
                focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] 
                border-l border-white/10 shadow-2xl p-6 pt-20"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => {
                  let isActive = location.pathname === item.href;
                  if (location.pathname === "/" && item.href === "/trang-chu") {
                    isActive = true;
                  }
                  return (
                    <motion.button
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavigate(item.href)}
                      className={`w-full px-4 py-4 rounded-xl font-inter text-left text-sm transition-all
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
                        ${
                          isActive
                            ? "bg-gradient-to-r from-[#DA251D] to-[#8B0000] text-[#FFCD00]"
                            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                        }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
