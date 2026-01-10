import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-6">
      <nav className="flex justify-around items-center gap-4 max-w-7xl mx-auto">
        {navItems.map((item) => {
          let isActive = location.pathname === item.href;
          if (location.pathname === "/" && item.href === "/trang-chu") {
            isActive = true;
          }
          return (
            <button
              key={item.href}
              onClick={() => handleNavigate(item.href)}
              className="flex-1 px-4 py-3 rounded-full font-grenze text-sm md:text-base transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#5D0404",
                color: isActive ? "#F4B82A" : "white",
              }}
            >
              <span className="block truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
