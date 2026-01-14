import React from "react";
import { motion } from "framer-motion";
import { 
  History, 
  Scale, 
  Ban, 
  Lightbulb, 
  ArrowRightCircle, 
  Hourglass,
  Quote
} from "lucide-react";
import "./style.css";

const contentData = [
  {
    id: 1,
    title: "Việt Nam cuối thế kỷ XIX – đầu XX: Một xã hội bị “đóng băng phát triển”",
    icon: History,
    content: [
      "Sau khi hoàn thành quá trình xâm lược, thực dân Pháp không xây dựng Việt Nam như một quốc gia tư bản thuộc địa kiểu mới, mà biến Việt Nam thành nguồn cung nguyên liệu, nhân công rẻ và thị trường tiêu thụ bắt buộc. Chính sách này làm cho xã hội Việt Nam không thể phát triển theo quy luật tư bản chủ nghĩa tự thân.",
      "Về kinh tế, nền sản xuất nhỏ nông nghiệp chiếm tuyệt đối; công nghiệp chỉ là các cơ sở khai thác mỏ, đồn điền, nhà máy phục vụ chính quốc. Người Việt không nắm tư liệu sản xuất, không nắm thị trường, không nắm công nghệ.",
      "Về xã hội, các giai cấp bị phân hóa nhưng không phát triển đầy đủ:"
    ],
    list: [
      "Giai cấp tư sản dân tộc yếu ớt, lệ thuộc",
      "Tiểu tư sản trí thức phân tán",
      "Nông dân chiếm đa số, bị bần cùng hóa",
      "Công nhân tuy ít nhưng tập trung, có tổ chức"
    ],
    highlight: "👉 Hồ Chí Minh nhận ra: Việt Nam không thiếu lòng yêu nước, mà thiếu một con đường đúng."
  },
  {
    id: 2,
    title: "Mâu thuẫn dân tộc quyết định hướng đi của cách mạng Việt Nam",
    icon: Scale,
    content: [
      "Khác với các nước tư bản châu Âu, nơi mâu thuẫn giai cấp là trung tâm, xã hội Việt Nam đặt ra mâu thuẫn dân tộc như mâu thuẫn bao trùm:",
      "Không giành được độc lập dân tộc thì mọi cải cách xã hội đều vô nghĩa.",
      "Chính từ thực tế đó, Hồ Chí Minh phát triển một tư duy mang tính sáng tạo lớn:"
    ],
    list: [
      "Không máy móc áp dụng mô hình cách mạng vô sản châu Âu",
      "Đặt giải phóng dân tộc lên hàng đầu",
      "Nhưng không tách rời mục tiêu xã hội chủ nghĩa"
    ],
    highlight: "Đây là điểm then chốt để hiểu vì sao Người không lựa chọn con đường tư bản chủ nghĩa, dù đã quan sát nó rất kỹ ở phương Tây."
  },
  {
    id: 3,
    title: "Vì sao con đường tư bản chủ nghĩa không khả thi ở Việt Nam?",
    icon: Ban,
    content: [
      "Hồ Chí Minh không phủ nhận giá trị lịch sử của chủ nghĩa tư bản, nhưng Người chỉ ra những điều kiện Việt Nam không có:"
    ],
    subSections: [
      {
        subtitle: "(1) Không có giai cấp tư sản đủ mạnh",
        items: ["Không độc lập về kinh tế", "Không đủ năng lực lãnh đạo dân tộc", "Dễ thỏa hiệp với đế quốc"]
      },
      {
        subtitle: "(2) Không có thị trường tự do đúng nghĩa",
        items: ["Bị Pháp kiểm soát", "Không có tích lũy tư bản"]
      },
      {
        subtitle: "(3) CNTB không giải quyết được mâu thuẫn dân tộc",
        items: ["Các dân tộc thuộc địa không thể “tư bản hóa” trong vòng kìm kẹp của đế quốc"]
      }
    ],
    highlight: "👉 Vì vậy, Hồ Chí Minh đi đến kết luận: Cách mạng tư sản không thể triệt để ở Việt Nam."
  },
  {
    id: 4,
    title: "Hồ Chí Minh: Từ khảo nghiệm thực tiễn đến lựa chọn con đường cách mạng vô sản",
    icon: Lightbulb,
    content: [
      "Điểm đặc biệt trong tư tưởng Hồ Chí Minh là tư duy thực nghiệm:",
      "Người không tiếp thu chủ nghĩa Mác – Lênin từ sách vở, mà từ thực tiễn quan sát nhiều xã hội khác nhau.",
      "Khi đọc Luận cương của Lênin, Hồ Chí Minh tìm thấy: Lời giải cho vấn đề dân tộc, sự kết nối giữa độc lập và chủ nghĩa xã hội, một con đường phù hợp với các nước thuộc địa."
    ],
    highlight: "Từ đây, Người xác định: Cách mạng giải phóng dân tộc phải gắn với cách mạng xã hội chủ nghĩa."
  },
  {
    id: 5,
    title: "“Bỏ qua chế độ tư bản chủ nghĩa” trong tư duy Hồ Chí Minh",
    icon: ArrowRightCircle,
    content: [
      "Khái niệm “bỏ qua” ở Hồ Chí Minh mang tính lịch sử – cụ thể, không giáo điều."
    ],
    comparison: {
      left: {
        title: "Bỏ qua là:",
        items: ["Không thiết lập quan hệ thống trị của tư bản", "Không để hình thành giai cấp bóc lột mới"]
      },
      right: {
        title: "Nhưng không bỏ qua:",
        items: ["Kinh tế hàng hóa", "Khoa học – kỹ thuật", "Phương pháp tổ chức sản xuất tiên tiến"]
      }
    },
    highlight: "Hồ Chí Minh luôn nhấn mạnh tính linh hoạt, từng bước, phù hợp điều kiện Việt Nam."
  },
  {
    id: 6,
    title: "Thời kỳ quá độ: Con đường dài, phức tạp nhưng tất yếu",
    icon: Hourglass,
    content: [
      "Theo Hồ Chí Minh: Việt Nam đi lên CNXH từ điểm xuất phát thấp, không thể nóng vội, không thể sao chép mô hình nước khác.",
      "Thời kỳ quá độ vì thế: Kéo dài, có bước tiến – bước lùi, phải gắn với cải thiện đời sống nhân dân."
    ],
    quote: "“Làm cho dân có ăn, có mặc, được học hành.”",
    highlight: "CNXH trước hết không phải là học thuyết trừu tượng."
  }
];

const SectionCard = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border-l-4 border-[var(--color-red-flag)] mb-8 max-w-4xl w-full mx-auto"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-full bg-red-50 text-[var(--color-red-flag)] shrink-0">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-800 leading-tight">
            {item.title}
          </h2>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed font-body">
          {item.content && item.content.map((paragraph, idx) => (
            <p key={idx} className="text-lg">{paragraph}</p>
          ))}

          {item.list && (
            <ul className="list-disc list-inside space-y-2 ml-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
              {item.list.map((li, i) => (
                <li key={i} className="text-gray-800 font-medium">{li}</li>
              ))}
            </ul>
          )}

          {item.subSections && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {item.subSections.map((sub, i) => (
                <div key={i} className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2 text-lg">{sub.subtitle}</h4>
                  <ul className="space-y-1">
                    {sub.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 mt-1">•</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {item.comparison && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-3 border-b border-red-200 pb-2">{item.comparison.left.title}</h4>
                <ul className="space-y-2">
                  {item.comparison.left.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2 text-red-900">
                      <Ban size={16} className="text-red-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-5 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-3 border-b border-green-200 pb-2">{item.comparison.right.title}</h4>
                <ul className="space-y-2">
                  {item.comparison.right.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2 text-green-900">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {item.quote && (
            <blockquote className="mt-6 border-l-4 border-[var(--color-yellow-star)] bg-yellow-50 p-4 italic text-xl text-gray-800 font-serif relative">
              <Quote className="absolute top-2 right-2 text-yellow-200" size={40} />
              {item.quote}
            </blockquote>
          )}

          {item.highlight && (
            <div className="mt-6 p-4 bg-[var(--color-red-flag)]/5 rounded-lg border-l-4 border-[var(--color-red-flag)] flex gap-3">
              <span className="text-2xl">👉</span>
              <p className="font-bold text-gray-900 italic">{item.highlight.replace("👉 ", "")}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CommunistPage = () => {
  return (
    <div id="communist_page" className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-[#F5F5DC]">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black font-display text-[var(--color-red-flag)] mb-4 uppercase drop-shadow-sm">
          QUÁ TRÌNH RA ĐỜI & PHÁT TRIỂN <br/>
          <span className="text-[#B31B1B] drop-shadow-none">CỦA ĐẢNG CỘNG SẢN VIỆT NAM</span>
        </h1>
        <div className="h-2 w-32 bg-[var(--color-red-flag)] mx-auto rounded-full mb-6"></div>
        <p className="text-xl md:text-2xl text-gray-700 font-serif max-w-3xl mx-auto italic opacity-90">
          "Đường cách mệnh" và sự lựa chọn lịch sử của Nguyễn Ái Quốc
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {contentData.map((item, index) => (
          <SectionCard key={item.id} item={item} index={index} />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20 mb-10"
      >
        <p className="text-gray-500 font-mono text-sm">© HCM202 Showcase - Tư tưởng Hồ Chí Minh</p>
      </motion.div>
    </div>
  );
};

export default CommunistPage;
