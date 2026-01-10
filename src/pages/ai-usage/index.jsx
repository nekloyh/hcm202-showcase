import "./styles.css";

const tools = [
  {
    name: "ChatGPT",
    purpose: [
      "Tóm tắt, đối chiếu giáo trình Tư tưởng Hồ Chí Minh và các văn kiện Đảng về thời kỳ quá độ lên CNXH.",
      "Gợi ý cấu trúc nội dung trang web, sắp xếp mục lục lý luận – thực tiễn.",
      "Kiểm tra logic, phát hiện chỗ thiếu dẫn giải khi trình bày khái niệm \"bỏ qua chế độ tư bản chủ nghĩa\".",
    ],
    images: ["/images/ai-usage/1.jpg", "/images/ai-usage/2.jpg"],
  },
  {
    name: "NoteGPT.io",
    purpose: [
      "Transcript bài giảng, toạ đàm học thuật về quá độ lên CNXH để trích xuất luận điểm chính.",
    ],
    images: ["/images/ai-usage/6.jpg"],
  },
  {
    name: "v0.dev",
    purpose: [
      "Phác thảo ý tưởng UI/UX cho các section lý luận – vận dụng – chatbot.",
    ],
    images: ["/images/ai-usage/8.jpg"],
  },
  {
    name: "groq",
    purpose: [
      "Cung cấp API key cho chatbot \"Tèo\" để trả lời về con đường quá độ lên CNXH.",
    ],
    images: ["/images/ai-usage/9.jpg"],
  },
];

const AiUsagePage = () => {
  return (
    <div
      id="ai_usage_page"
      className="w-full flex flex-col items-center gap-10 overflow-y-auto px-20 md:px-4 pt-30"
    >
      <h1 className="font-bungee text-[36px] text-center">AI Usage cho đề tài quá độ lên CNXH</h1>

      {tools.map((tool, idx) => (
        <div key={tool.name} className="w-full flex flex-col gap-6 px-10">
          <h2 className="font-bungee text-[28px]">{idx + 1}. {tool.name}</h2>
          <p className="font-grenze text-[24px]">Mục đích</p>
          {tool.purpose.map((line, i) => (
            <p key={i}>• {line}</p>
          ))}
          <p className="font-grenze text-[24px]">Hình ảnh minh họa quá trình sử dụng</p>
          <div className="w-full flex flex-col items-center gap-4">
            {tool.images.map((src) => (
              <img key={src} src={src} alt={tool.name} className="w-1/2 rounded-lg" />
            ))}
          </div>
        </div>
      ))}

      <div className="w-full mb-50 flex flex-col items-center mt-50">
        <p className="font-grenze text-[36px] font-bold text-center">
          Cam kết sử dụng AI có trách nhiệm
        </p>

        <div className="w-8/12 bg-white/30 rounded-lg p-6 mt-6">
          <p className="font-grenze text-[20] text-justify font-light">
            Nhóm cam kết dùng AI như công cụ hỗ trợ tra cứu, tóm tắt, kiểm chứng và gợi ý cấu trúc, luôn đối chiếu với nguồn chính thống (giáo trình Tư tưởng Hồ Chí Minh, Văn kiện Đảng, tạp chí lý luận). Không dùng AI để tạo thông tin chưa xác thực hay suy diễn ngoài phạm vi học thuật. Nội dung cuối cùng được biên tập thủ công, đảm bảo tính chính xác, khách quan và phù hợp chuẩn mực học thuật.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiUsagePage;
