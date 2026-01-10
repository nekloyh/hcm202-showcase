// src/data/timeline.js
const TIMELINE = [
  {
    id: "pre-1930",
    year: 1900,
    range: "Cuối TK XIX – đầu TK XX",
    title: "Bối cảnh thuộc địa & khủng hoảng đường lối",
    description:
      "Phong trào yêu nước bùng nổ nhưng thất bại; đặt ra yêu cầu tìm con đường cứu nước mới.",
    impactHCM:
      "Đặt nền cho lựa chọn ra đi tìm đường cứu nước của Nguyễn Tất Thành.",
  },
  {
    id: "1911-1920",
    year: 1920,
    title: "Tiếp cận CNMLN – Đại hội Tours (1920)",
    description:
      "Nguyễn Ái Quốc trở thành người cộng sản Việt Nam đầu tiên; mở hướng cách mạng vô sản.",
    impactHCM: "Xác lập cơ sở lý luận cho đường lối giải phóng dân tộc.",
  },
  {
    id: "1923-1927",
    year: 1926,
    title: "Hội VN Cách mạng Thanh niên – Đường Kách Mệnh",
    description:
      "Truyền bá CNMLN, đào tạo cán bộ, đưa Báo Thanh Niên vào Việt Nam.",
    impactHCM: "Chuẩn bị quan trọng về tổ chức, cán bộ cho sự ra đời của Đảng.",
  },
  {
    id: "1929",
    year: 1929,
    title: "Ba tổ chức cộng sản ra đời",
    description:
      "ĐDCSĐ, ANCSĐ, ĐDCS Liên đoàn – phong trào lớn mạnh nhưng phân tán.",
    impactHCM: "Đặt vấn đề phải hợp nhất dưới một đảng duy nhất.",
  },
  {
    id: "1930",
    year: 1930,
    highlight: true,
    title: "Thành lập Đảng Cộng sản Việt Nam (3/2/1930)",
    description:
      "Hội nghị hợp nhất tại Hồng Kông do Nguyễn Ái Quốc chủ trì; thông qua Chánh cương, Sách lược vắn tắt.",
    impactHCM:
      "Vai trò quyết định của Nguyễn Ái Quốc trong hợp nhất và xác lập đường lối.",
  },
  {
    id: "1930-1939",
    year: 1936,
    title: "Rèn luyện trong đấu tranh – Mặt trận Dân chủ",
    description:
      "Từ Xô viết Nghệ Tĩnh đến đấu tranh dân chủ; mở rộng mặt trận đoàn kết.",
    impactHCM: "Đại đoàn kết dân tộc theo tư tưởng HCM.",
  },
  {
    id: "1941-1945",
    year: 1945,
    highlight: true,
    title: "Việt Minh – Cách mạng Tháng Tám – Tuyên ngôn Độc lập",
    description:
      "Hội nghị TƯ 8 (1941); giành chính quyền (8/1945); khai sinh VNDCCH (2/9/1945).",
    impactHCM: "Tư tưởng độc lập dân tộc gắn CNXH được hiện thực hóa.",
  },
  {
    id: "1946-1954",
    year: 1954,
    title: "Kháng chiến chống Pháp – Điện Biên Phủ",
    description:
      "Đường lối toàn dân, toàn diện, lâu dài; kết thúc bằng chiến thắng lịch sử 1954.",
    impactHCM: "Đường lối kháng chiến đúng đắn, phát huy sức mạnh toàn dân.",
  },
  {
    id: "1951",
    year: 1951,
    title: "Đại hội II – Đảng Lao động Việt Nam",
    description: "Kiện toàn lãnh đạo, tiếp tục cách mạng cả nước.",
    impactHCM: "Củng cố vai trò lãnh đạo của Đảng.",
  },
  {
    id: "1960s",
    year: 1960,
    title: "Đại hội III – Hai chiến lược cách mạng",
    description: "Miền Bắc xây dựng CNXH; miền Nam đấu tranh giải phóng.",
    impactHCM: "Đường lối phù hợp thực tiễn đất nước bị chia cắt.",
  },
  {
    id: "1969",
    year: 1969,
    title: "Di chúc của Chủ tịch Hồ Chí Minh",
    description:
      "Di chúc xác định mục tiêu, đạo đức, bồi dưỡng thế hệ cách mạng.",
    impactHCM: "Kim chỉ nam về xây dựng Đảng và con người.",
  },
  {
    id: "1975-1976",
    year: 1976,
    title: "Thống nhất đất nước – ĐCSVN",
    description:
      "30/4/1975 giải phóng miền Nam; 1976 lấy tên Đảng Cộng sản Việt Nam cho cả nước.",
    impactHCM: "Hoàn thành sự nghiệp thống nhất mà Người hằng mong.",
  },
  {
    id: "1986",
    year: 1986,
    highlight: true,
    title: "Đổi Mới",
    description:
      "Đổi mới toàn diện, kinh tế thị trường định hướng XHCN, mở cửa hội nhập.",
    impactHCM:
      "Vận dụng tư tưởng ‘lấy dân làm gốc’, phát huy nội lực, sáng tạo.",
  },
  {
    id: "1991-2011",
    year: 2011,
    title: "Phát triển Cương lĩnh, hội nhập",
    description:
      "Bổ sung, phát triển Cương lĩnh 1991–2011; mở rộng đối ngoại, pháp quyền XHCN.",
    impactHCM: "Kiên định nền tảng tư tưởng, linh hoạt sách lược.",
  },
  {
    id: "2021-now",
    year: 2025,
    title: "Hiện nay",
    description:
      "Công nghiệp hóa–hiện đại hóa–chuyển đổi số–hội nhập; xây dựng, chỉnh đốn Đảng.",
    impactHCM:
      "Tư tưởng HCM tiếp tục là nền tảng và kim chỉ nam cho hành động.",
  },
];

export default TIMELINE;
