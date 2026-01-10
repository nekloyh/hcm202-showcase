import "./styles.css";

const sections = [
  {
    title: "1. Kinh tế thị trường định hướng xã hội chủ nghĩa",
    paragraphs: [
      "Sử dụng kinh tế thị trường như một công cụ phát triển lực lượng sản xuất, nhưng đặt dưới định hướng xã hội chủ nghĩa: tôn trọng quy luật thị trường, song Nhà nước điều tiết để bảo đảm tiến bộ, công bằng, an sinh và kiểm soát các tác động tiêu cực.",
      "Phát triển đa sở hữu, nhiều thành phần kinh tế; thúc đẩy doanh nghiệp nhà nước giữ vai trò then chốt ở lĩnh vực thiết yếu, khuyến khích khu vực tư nhân trở thành động lực tăng trưởng, thu hút FDI gắn với chuyển giao công nghệ và liên kết chuỗi giá trị.",
    ],
  },
  {
    title: "2. Công nghiệp hóa, hiện đại hóa gắn kinh tế số, kinh tế tri thức",
    paragraphs: [
      "Đẩy nhanh chuyển dịch cơ cấu kinh tế theo hướng công nghiệp – dịch vụ hiện đại; ưu tiên hạ tầng số, năng lượng tái tạo, logistics, đô thị thông minh, nông nghiệp công nghệ cao.",
      "Đầu tư mạnh cho khoa học – công nghệ, đổi mới sáng tạo và chuyển đổi số trong quản trị nhà nước, doanh nghiệp, giáo dục, y tế; phát triển nguồn nhân lực chất lượng cao, đặc biệt các lĩnh vực STEM và quản trị số.",
    ],
  },
  {
    title: "3. An sinh xã hội, văn hóa và con người",
    paragraphs: [
      "Bảo đảm an sinh từ sớm, từ xa: giảm nghèo đa chiều, bảo hiểm xã hội toàn dân, y tế cơ bản cho mọi người; ưu tiên vùng khó khăn, nhóm yếu thế.",
      "Xây dựng hệ giá trị văn hóa và con người Việt Nam trong thời kỳ mới: yêu nước, đoàn kết, nhân ái, trung thực, sáng tạo; phát huy dân chủ, pháp quyền, kỷ cương; gắn tăng trưởng với bảo vệ môi trường và phát triển bền vững.",
    ],
  },
  {
    title: "4. Hội nhập quốc tế chủ động, giữ vững độc lập tự chủ",
    paragraphs: [
      "Đa phương hóa, đa dạng hóa quan hệ; tận dụng các FTA thế hệ mới (CPTPP, EVFTA, RCEP…) để mở rộng thị trường, nâng chuẩn quản trị, lao động và môi trường.",
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, bảo vệ lợi ích quốc gia – dân tộc, giữ vững hòa bình, ổn định để phát triển; tham gia tích cực vào các sáng kiến toàn cầu về chuyển đổi số, năng lượng xanh, thích ứng biến đổi khí hậu.",
    ],
  },
];

const ApplicationPage = () => {
  return (
    <div
      id="application_page"
      className="w-full flex flex-col items-center gap-16 overflow-y-auto px-2 md:px-4 pt-30"
    >
      <div className="w-full max-w-6xl flex items-center justify-center py-6 md:py-10">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bungee leading-tight">
          Vận dụng tư tưởng Hồ Chí Minh về con đường quá độ lên CNXH trong thực tiễn hiện nay
        </p>
      </div>

      <div className="w-full max-w-7xl px-3 md:px-7 gap-10 md:gap-12 flex flex-col">
        {sections.map((section, idx) => (
          <section
            key={section.title}
            className="w-full bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 px-6 md:px-10 py-8 md:py-10 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-bungee text-xl sm:text-2xl md:text-3xl text-[#5D0404] leading-tight">
                {section.title}
              </p>
              <span className="text-sm text-[#F4B82A] font-bold">{String(idx + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-col gap-4">
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-grenze text-base sm:text-lg md:text-xl leading-relaxed text-gray-800"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="w-full max-w-6xl text-center mb-16">
        <p className="font-bungee text-2xl md:text-3xl text-[#5D0404] mb-3">
          Điểm nhấn hành động
        </p>
        <p className="font-grenze text-lg md:text-xl text-gray-800 leading-relaxed">
          Kiên định mục tiêu CNXH, linh hoạt phương thức, coi đổi mới sáng tạo và giáo dục con người là động lực then chốt; kết hợp chặt chẽ phát triển kinh tế thị trường với bảo đảm công bằng, an sinh và bảo vệ môi trường.
        </p>
      </div>
    </div>
  );
};

export default ApplicationPage;
