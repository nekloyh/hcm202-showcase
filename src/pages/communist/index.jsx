import Book from "../../components/models/DuongKachMenhBook";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CommunistPage = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="communist_page"
      className="w-full flex flex-col items-center gap-4 md:gap-6 overflow-y-auto px-2 md:px-4 pt-30"
    >
      <div className="w-full max-w-6xl flex items-center justify-center py-6 md:py-10">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bungee leading-tight">
          Quá trình ra đời và phát triển của Đảng Cộng Sản Việt Nam
        </p>
      </div>

      {/* Phần 1: Lý do Bác ra đi tìm đường cứu nước */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10">
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          1. Lý do Bác ra đi tìm đường cứu nước
        </p>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Cuối Thế Kỷ XVIII - Đầu Thế Kỷ XIX: Việt Nam trải qua quãng thời
            gian đau thương, cả dân tộc rên xiết dưới ách xâm lược của thực dân
            Pháp.
          </p>

          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-4">
            <div className="flex flex-col items-center gap-3 md:gap-5 max-w-sm md:max-w-none">
              <img
                src="/images/communist/1.png"
                className="w-full h-auto max-w-xs md:max-w-sm"
              />
              <p className="text-sm md:text-base text-center italic px-2">
                (Công Nhân Việt Nam Làm Việc Tại Hầm Mỏ Trong Thời Pháp Thuộc)
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 md:gap-5 max-w-sm md:max-w-none">
              <img
                src="/images/communist/2.png"
                className="w-full h-auto max-w-xs md:max-w-sm"
              />
              <p className="text-sm md:text-base text-center italic px-2">
                (Văn Hóa Thuốc Phiện Được Thực Dân Pháp Tiêm Nhiễm Vào Xã Hội
                VN, Chế độ Ngu Dân)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-10 mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Nhân dân chịu cảnh "1 cổ 2 tròng", vừa chịu áp bức bóc lột của chế
            độ Phong Kiến và Thực Dân: "Sưu Cao Thuế Nặng, Lao Dịch Phu Phem".
          </p>

          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-4">
            <div className="flex flex-col items-center gap-3 md:gap-5 max-w-sm md:max-w-none">
              <img
                src="/images/communist/3.png"
                className="w-full max-h-[536px] max-w-xs md:max-w-sm"
              />
              <p className="text-sm md:text-base text-center italic px-2 max-w-[480px]">
                (Tác phẩm "Tắt Đèn" - do Ngô Tất Tố viết nhằm vạch trần cảnh sưu
                cao thuế nặng, người nông dân khổ cực)
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 md:gap-5 max-w-sm md:max-w-none">
              <img
                src="/images/communist/4.png"
                className="w-full max-h-[536px] max-w-xs md:max-w-sm"
              />
              <p className="text-sm md:text-base text-center italic px-2 max-w-[480px]">
                (Tác phẩm "Bước Đường Cùng" - của Nguyễn Công Hoan phản ánh cảnh
                nông dân bị sưu cao thuế nặng, phải bán cả ruộng đất, cuối cùng
                bị dồn vào chỗ chết.)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-6 md:mt-10 gap-4 md:gap-5">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Hàng trăm cuộc khởi nghĩa và phong trào yêu nước đã được nổ ra trên
            khắp 3 miền Bắc - Trung - Nam.
          </p>

          <div className="w-full max-w-4xl p-4 md:p-5 flex justify-center items-center rounded-lg bg-gradient-to-r from-[#5D0404] to-[#C30707]">
            <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center leading-relaxed">
              "Đúc Gang Sắt Để Dời Non Lấp Biển, Xối Máu Nóng Rửa Vết Nhơ Nô Lệ"
            </p>
          </div>

          <div className="w-full max-w-6xl relative flex flex-col items-center gap-6 md:gap-10">
            <img
              src="/images/communist/5.png"
              className="hidden md:block h-full absolute opacity-20"
            />

            {/* Miền Bắc */}
            <div className="w-full flex flex-col md:flex-row z-10 gap-4 md:gap-0 md:justify-between items-center md:items-start">
              <img
                src="/images/communist/6.png"
                className="w-full max-w-xs md:max-w-sm h-auto"
              />
              <div className="flex flex-col gap-2 font-grenze text-center md:text-left max-w-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Miền Bắc - Khởi Nghĩa "Yên Thế" (1884 - 1913)
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                  🔹Lãnh Đạo: Hoàng Hoa Thám
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                  🔹Kết cục: Sau khi Đề Thám bị ám hại (1913), phong trào tan rã
                  → thất bại.
                </p>
              </div>
            </div>

            {/* Miền Trung */}
            <div className="w-full flex flex-col md:flex-row-reverse z-10 gap-4 md:gap-0 md:justify-between items-center md:items-start">
              <img
                src="/images/communist/7.png"
                className="w-full max-w-xs md:max-w-sm h-auto"
              />
              <div className="flex flex-col gap-2 font-grenze text-center md:text-left max-w-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Miền Trung - Phong trào "Cần Vương" (1885 – 1896)
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                  🔹Lãnh đạo: dưới danh nghĩa vua Hàm Nghi, các sĩ phu như Tôn
                  Thất Thuyết, Phan Đình Phùng, Nguyễn Thiện Thuật…
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                  🔹Kết cục: Sau khi Phan Đình Phùng mất (1895), phong trào suy
                  yếu rồi thất bại (1896).
                </p>
              </div>
            </div>

            {/* Miền Nam */}
            <div className="w-full flex flex-col md:flex-row z-10 gap-4 md:gap-0 md:justify-between items-center md:items-start">
              <img
                src="/images/communist/8.png"
                className="w-full max-w-xs md:max-w-sm h-auto"
              />
              <div className="flex flex-col gap-2 font-grenze text-center md:text-left max-w-lg">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Miền Nam - Khởi nghĩa "Trương Định" (1861 – 1864)
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                  🔹Lãnh đạo: Trương Định
                </p>
                <p className="text-base sm:text-lg md:text-xl">
                  🔹Kết Cục: Bị Pháp phản công dữ dội, Trương Định hi sinh năm
                  1864, cuộc khởi nghĩa tan rã.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl flex flex-col items-center p-6 md:p-10">
            <p className="font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#929292] to-[#9C1212] bg-clip-text text-transparent text-center leading-tight">
              "Xong Tất Cả Đều Thất Bại, Bị Địch Dìm Trong Bể Máu"
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-5 mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Vô cùng khâm phục tấm lòng sắc son vì tổ quốc của các anh hùng chí
            sĩ đương thời. Nhưng người thanh niên yêu nước Nguyễn Tất Thành đã
            sớm nhận ra những hạn chế của đường hướng cứu nước TRUNG QUÂN ÁI
            QUỐC của hệ tư tưởng phong kiến và đường hướng cứu nước theo khuynh
            hướng TƯ SẢN không thể đi đến thành công.
          </p>

          <img
            src="/images/communist/9.png"
            className="w-full max-w-6xl h-auto"
          />

          <div className="w-full flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grenze text-[#5D0404] mt-6 md:mt-10 justify-center">
            <p className="p-0 m-0 ml-2 text-center">
              Dẫn tới quyết định Ra Đi Tìm Đường Cứu Nước
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6">
            <img
              src="/images/communist/10.png"
              className="w-full max-w-lg h-auto"
            />
            <p className="italic text-sm md:text-base text-center px-2">
              (Hình ảnh người thanh niên Nguyễn Tất Thành và con tàu Amiral
              Latouche-Tréville, nơi bác ra đi "Tìm Đường Cứu Nước")
            </p>

            <div className="w-full flex flex-col items-center gap-6 md:gap-9">
              <p className="font-light font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                Quyết định Ra đi tìm đường cứu nước là sự lựa chọn đầy tính{" "}
                <span className="text-[#F42A2A]">sáng tạo</span>, hướng đi mới
                trên cơ sở tư duy độc lập, tầm nhìn mới{" "}
                <span className="text-[#F42A2A]">khác hoàn toàn</span> các bậc
                tiền bối đương thời.
              </p>

              <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                <span className="text-[#5D0404]">
                  "Tự Do, Bình Đẳng, Bác Ái"
                </span>{" "}
                - Là những khẩu hiệu của cuộc Cách Mạng Pháp, đây là những khẩu
                hiệu rất mỹ miều. Người thanh niên Nguyễn Tất Thành muốn tìm
                hiểu xem có điều gì ẩn nấp đằng sau những khẩu hiệu mỹ miều đó.
                Nghe thì rất hay nhưng tại sao những người dân ở Việt Nam lại
                phải chịu những sự bất công, bị chà đạp ?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần 2:  */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10 mt-12 md:mt-20">
        {/* Title */}
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          2. Sự Trải Nghiệm và Giác Ngộ của Nguyễn Ái Quốc
        </p>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Năm 1911, khi mới 21 tuổi, người xin làm phụ bếp trên con tàu Đô đốc
            Amiral Latouche-Tréville để rời bến Nhà Rồng. Từ đó có điều kiện
            thực hiện hành trình bôn ba suốt 10 năm ròng vượt qua 3 Đại Dương,
            tới 4 Châu Lục (Âu - Á - Phi - Mỹ) và khoảng 30 Quốc Gia.
          </p>

          <div className="w-full flex flex-col items-center gap-4 md:gap-5">
            <img
              src="/images/communist/11.png"
              className="w-full max-w-lg h-auto"
            />
            <p className="text-sm md:text-base text-center italic px-2">
              (Bàn chân của người thanh niên yêu nước Nguyễn Tất Thành đã in dấu
              trên nhiều nước thuộc các đại lục Âu, Á, Phi, Mỹ.)
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between flex-col items-center sm:flex sm:flex-col sm:items-center mt-6 md:mt-10 px-6 md:px-20">
          <img
            src="/images/communist/12.png"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
          <div className="w-full md:w-1/2 flex flex-col text-center md:text-start">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-grenze italic leading-relaxed">
              Người làm nhiều nghề để sống, tận mức chứng kiến đời sống khổ cực
              của nhân dân lao động từ các nước thuộc địa cho đến những quốc gia
              phát triển nhất của Đế Quốc Tư Bản thời bấy giờ như Mỹ - Anh -
              Pháp.
            </p>
            <p className="text-sm md:text-base text-center md:text-start italic mt-2">
              (Hình ảnh người thanh niên Nguyễn Tất Thành làm phụ bếp trên tàu
              Đô Đốc Latouche-Tréville)
            </p>
          </div>
        </div>

        <div className="w-full flex items-center mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            <strong>Người kết luận:</strong> "Ở đâu bọn Đế Quốc Thực Dân cũng
            tàn bạo độc ác, ở đâu những người lao động cũng bị bóc lột áp bức
            nặng nề và dù màu da có khác nhau trên đời này chỉ có 2 giống người.
            Giống người bóc lột và giống người bị bóc lột"
          </p>
        </div>

        <div className="w-full flex justify-between items-center px-6 md:px-20 gap-6 md:gap-8 mt-6 md:mt-10">
          <div className="w-full md:w-1/2 flex flex-col text-center md:text-start">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-grenze text-start">
              Tham gia tích cực các hoạt động của nhóm như Người An Nam Yêu Nước
              tại Pháp, tham gia phong trào Cộng Sản tại Pháp lấy tên là Nguyễn
              Ái Quốc. Người đã viết nhiều bài đăng trên báo Peuple Annamite để
              vạch trần chính sách đàn áp dã man của chủ nghĩa Đế Quốc nói chung
              và Đế Quốc Pháp nói riêng đối với Nhân Dân Việt Nam và Các Nước
              Thuộc Địa.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <img
              src="/images/communist/13.png"
              className="w-full max-w-lg h-auto"
            />
            <p className="text-sm md:text-base text-center italic mt-2">
              (Hình ảnh người thanh niên Nguyễn Tất Thành làm phụ bếp trên tàu
              Đô Đốc Latouche-Tréville)
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-6 md:mt-10">
          <img
            src="/images/communist/14.png"
            className="w-full max-w-2xl h-auto"
          />
          <div className="w-full px-6 md:px-20 pt-6 md:pt-10 flex items-center justify-center">
            <p className="font-grenze font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
              Trải qua hơn 10 năm trời tìm hiểu ở nhiều Quốc Gia trên Thế Giới.
              Đến khi nghiên cứu bản{" "}
              <strong>
                "Sơ Thảo Lần Thứ Nhất Luận Cương Về Vấn Đề Dân Tộc Và Vấn Đề
                Thuộc Địa"
              </strong>{" "}
              của Vladimir Ilyich Lenin. Nguyễn Ái Quốc đã tìm ra lời giải cho
              đường lối đấu tranh giành độc lập tự do thực sự dành cho Dân Tộc.
            </p>
          </div>
        </div>

        <div className="w-full md:flex md:justify-between md:items-center sm:flex sm:flex-col sm:items-center px-6 md:px-20 gap-6 md:gap-8 mt-6 md:mt-10">
          <img
            src="/images/communist/15.png"
            className="h-[620px] md:h-[720px]"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
              "Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác
              ngoài Cách Mạng Vô Sản"
            </p>
            <div className="w-full flex items-center justify-center md:justify-start mt-2">
              <p className="font-grenze font-light text-base sm:text-lg md:text-xl">
                Nguyễn Ái Quốc
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-6 md:px-10 flex flex-col items-center gap-6 md:gap-8 mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Với tư duy độc lập, sáng tạo, Người đã sớm nhìn ra điều nhiều nhà
            yêu nước Việt Nam đương thời chưa nhận thấy. Đó là mối liên hệ thân
            thiết giữa “Cách Mạng Thuộc Địa” và “Cách Mạng Tư Sản” - “Giải Phóng
            Dân Tộc” và “Giải Phóng Giai Cấp” hay cao hơn là “Giải Phóng Con
            Người”. Đây là những phát hiện mới mẻ về vấn đề Dân Tộc và Thuộc Địa
            mà thời kỳ trước Mark và Angel của có điều kiện lịch sử để tiếp cận.
          </p>

          <p className="font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#929292] to-[#9C1212] bg-clip-text text-transparent text-center leading-tight">
            Người nhận ra đấu tranh giai cấp ở Phương Đông không giống như ở
            Phương Tây.
          </p>
        </div>

        <div className="w-full px-6 md:px-10 md:flex md:justify-between md:items-center mt-6 md:mt-10 sm:flex sm:flex-col sm:items-center gap-5">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl w-full text-center">
            Mark đã xây dựng học thuyết của mình trên 1 triết lý nhất định của
            lịch sử Châu Âu, mà Châu Âu chưa phải{" "}
            <strong>TOÀN BỘ NHÂN LOẠI</strong>.
          </p>
          <img
            src="/images/communist/16.png"
            className="w-full max-w-lg h-auto"
          />
        </div>

        <div className="w-full flex items-center justify-center mt-6 md:mt-10">
          <img
            src="/images/communist/17.png"
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </div>

      {/* Phần 3: Tiếp thu, cải thiện và hiện thực hóa */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10 mt-12 md:mt-20">
        {/* Title */}
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          3. Tiếp thu, cải thiện và hiện thực hóa
        </p>

        {/* Content */}
        <div className="w-full flex flex-col items-center gap-4 md:gap-5 mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Sau khi có lý luận nhận thức rõ ràng về chủ nghĩa Mark-Lenin, xác
            định rõ đường hướng cứu nước, Nguyễn Ái Quốc đã sáng tạo ra nhiều
            hình thức hoạt động cách mạng
          </p>
          <p className="font-grenze font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Tháng 12 năm 1920, Nguyễn Ái Quốc tham gia Đại Hội lần thứ XVIII
            Đảng Xã Hội tại thành phố Tours - Pháp, với tư cách là Đại Biểu
            chính thức và duy nhất của các nước thuộc địa Đông Dương. Người đã
            bỏ phiếu tán thành tham gia Quốc Tế 3, Quốc Tế Cộng Sản. Trở thành
            người{" "}
            <span className="text-[#F42A2A]">Cộng Sản Việt Nam đầu tiên</span>.
          </p>
          <img
            src="/images/communist/18.png"
            className="w-full max-w-2xl h-auto"
          />
          <p className="italic text-sm md:text-base text-center px-2">
            (Đồng chí Nguyễn Ái Quốc tham dự và phát biểu tại Đại hội đại biểu
            toàn quốc lần thứ XVIII Đảng Xã hội Pháp ở thành phố Tours, ngày
            26/12/1920.)
          </p>
        </div>

        <div className="w-full flex justify-center mt-6 md:mt-10">
          <div className="md:w-10/12 sm:w-full md:flex sm:flex sm:flex-col sm:items-center md:items-center md:justify-between gap-6 md:gap-8 ">
            <img
              src="/images/communist/19.png"
              className="md:w-full sm:mx-auto max-w-lg h-auto"
            />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-grenze w-[568px] md:w-full font-light text-center leading-relaxed">
              Người cùng với 1 số người yêu nước Thuộc Địa Pháp sáng lập hội
              “Liên Hiệp Các Dân Tộc Thuộc Địa”. Xuất Bản báo “Người Cùng Khổ -
              Le Paria” nhằm đoàn kết tổ chức và hướng dẫn phong trào đấu tranh
              giải phóng dân tộc ở các nước thuộc địa.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-4 md:gap-5 mt-16 md:mt-20">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Tiếp thu và vận dụng sáng tạo chủ nghĩa Mark-Lenin, Nguyễn Ái Quốc
            đã dần xây dựng được một hệ thống lý luận về Cách Mạng Giải Phóng
            Dân Tộc phù hợp với thực tiễn Việt Nam. Trong đó lấy lực lượng Thanh
            Niên làm nòng cốt.
          </p>
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Người tích chuẩn bị về tổ chức và cán bộ, lập ra “Thanh Niên Cách
            Mạng Đồng Chí Hội”. Tổ chức các lớp huấn luyện chính trị cho Thanh
            Niên yêu nước Việt Nam.
          </p>
          <img
            src="/images/communist/20.png"
            className="w-full max-w-2xl h-auto"
          />
          <p className="italic text-sm md:text-base text-center px-2">
            (Nguyễn Ái Quốc giảng bài tại lớp huấn luyện cán bộ Cách mạng Việt
            Nam tại Quảng Châu, Trung Quốc.)
          </p>

          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Từ đó, Bác đã đưa lực lượng Thanh Niên nòng cốt thâm nhập vào từng
            Công Xưởng, từng Xí Nghiệp, từng Đồn điền Cao Su. Đưa tư tưởng Chủ
            nghĩa Mark-Lenin vào Việt Nam
          </p>
          <p className="font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#5D0404] to-[#F42A2A] bg-clip-text text-transparent text-center leading-tight">
            Tạo nền tảng cho sự phát triển của Đảng Cộng Sản Việt Nam sau này.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 md:gap-5 mt-16 md:mt-20">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Nguyễn Ái Quốc cũng chủ trì xuất bản “Báo Thanh Niên” một tờ báo bí
            mật được dùng làm cơ quan ngôn luận và đấu tranh của “Việt Nam Thanh
            Niên Cách Mạng Đồng Chí Hội” và cuốn sách “Đường Kách Mệnh”.
          </p>
          <img
            src="/images/communist/21.png"
            className="w-full max-w-2xl h-auto"
          />
          <p className="italic text-sm md:text-base text-center px-2">
            (Báo Thanh Niên - tờ báo Cách mạng đầu tiên của Việt Nam)
          </p>
        </div>

        <div className="w-full md:flex md:items-center md:justify-between sm:flex sm:flex-col sm:items-center mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            “Đường Kách Mệnh” là cuốn sách giáo khoa chính trị đầu tiên của Việt
            Nam, do chính Người viết. Trong đó tầm quan trọng của lý luận Cách
            Mạng được đặt ở vị trí hàng đầu đối với cuộc vận động cách mạng và
            đối với đảng cách mạng tiên phong.
          </p>
          <img
            src="/images/communist/22.png"
            className="w-full max-w-2xl h-auto"
          />
        </div>

        <div className="w-full flex flex-col items-center mt-6 md:mt-10">
          <Book />
          <p className="italic text-sm md:text-base text-center px-2">
            (Mô hình 3D cuốn sách Đường Kách Mệnh - tái bản)
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 md:gap-5 mt-6 md:mt-10">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Trong “Đường Kách Mệnh”, Người chỉ rõ về sự cần thiết tất yếu phải
            có 1 chính đảng cách mạng để làm nên lịch sử:
          </p>
          <img
            src="/images/communist/23.png"
            className="w-full max-w-2xl h-auto"
          />
          <img
            src="/images/communist/24.png"
            className="mt-6 md:mt-10 w-full max-w-2xl h-auto"
          />
          <img
            src="/images/communist/25.png"
            className="mt-6 md:mt-10 w-full max-w-2xl h-auto"
          />

          <div className="w-full mt-20 bg-white/10 border-3 border-white rounded-2xl p-6 md:p-10">
            <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center leading-relaxed">
              Những tư duy đột phá của “Đường Kách Mệnh” đã thổi luồng gió mới
              vào phong trào Cách Mạng ở Việt Nam. Từ đó phong trào Công Nhân
              Việt Nam có bước chuyển mình từ TỰ PHÁT đến TỰ GIÁC. Tạo nên những
              làn sóng đấu tranh mạnh mẽ, hình thành nên các tổ chức cộng sản
              ban đầu
            </p>
          </div>
        </div>
      </div>

      {/* Phần 4: Sự ra đời của đảng cộng sản việt nam */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10 mt-12 md:mt-20">
        {/* Title */}
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          4. Sự ra đời của đảng cộng sản việt nam
        </p>

        {/* Content */}
        {/* Đông Dương Cộng Sản Đăng */}
        <div className="w-full px-6 md:px-10 flex flex-col gap-4 md:gap-5 mt-6 md:mt-10">
          <p className="font-bungee text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            Đông Dương Cộng Sản Đảng
          </p>
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Ngày 17 tháng 6 năm 1929, những thành viên trong Chi Bộ Cộng Sản 5D,
            Hàm Long tuyên bố thành lập “Đông Dương Cộng sản Đảng”. Thông qua
            tuyên ngôn, điều lệnh của Đảng ra báo “Búa Liềm” làm cơ quan ngôn
            luận
          </p>
          <div className="w-full flex items-center justify-between gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-3 md:gap-5 max-w-sm md:max-w-none">
              <img
                src="/images/communist/26.png"
                className="w-full h-auto max-w-xs md:max-w-sm"
              />
              <p className="italic text-sm md:text-base text-center px-2">
                (Báo Búa Liềm)
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-5 max-w-sm md:max-w-none">
              <img
                src="/images/communist/27.png"
                className="w-full h-auto max-w-xs md:max-w-sm"
              />
              <p className="italic text-sm md:text-base text-center px-2">
                (Hình ảnh ngôi nhà 5D, Hàm Long - Nơi thành lập Chi Bộ Cộng Sản
                Đầu Tiên ở Việt Nam tháng 3 năm 1929)
              </p>
            </div>
          </div>
        </div>

        {/* An Nam Cộng Sản Đảng */}
        <div className="w-full px-6 md:px-10 flex flex-col gap-4 md:gap-5 mt-6 md:mt-10">
          <p className="font-bungee text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            An Nam Cộng Sản Đảng
          </p>
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Tháng 7, 1929 tại phòng 1, lầu 2, nhà số 1 đường Philippini (nay là
            đường Nguyễn Trung Trực) Tổng bộ Thanh Niên cùng Kì bộ Nam Kỳ của
            Hội Việt Nam Cách Mạng Thanh Niên quyết định thành lập An Nam Cộng
            Sản Đảng do đồng chí Châu Văn Liêm làm bí thư
          </p>
          <div className="w-full flex flex-col items-center gap-4 md:gap-5">
            <img
              src="/images/communist/28.png"
              className="w-full h-auto max-w-lg"
            />
            <p className="italic text-sm md:text-base text-center px-2">
              (Đồng chí Châu Văn Liêm - Bí thư An Nam Cộng Sản Đảng)
            </p>
          </div>
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Tại Sài Gòn, An Nam Cộng Sản Đảng đã lập được Tổng Công Hội Nam Kỳ
            bao gồm nhiều Công Hội Xí Nghiệp, Công Hội Thợ Thủ Công
          </p>
        </div>

        {/* Đông Dương Cộng Sản Liên Đoàn */}
        <div className="w-full px-6 md:px-10 flex flex-col gap-4 md:gap-5 mt-6 md:mt-10">
          <p className="font-bungee text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
            Đông Dương Cộng Sản Liên Đoàn
          </p>
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Tại Đức Thọ, Hà Tĩnh: Tân Việt Cách Mạng Đảng sau quá trình chịu ảnh
            hưởng của chủ nghĩa Mark-Lenin, các thành viết cốt cán đã thành lập
            nhóm hạt nhân Cộng sản lấy tên là Đông Dương Cộng Sản Liên Đoàn vào
            tháng 9 năm 1929.
          </p>
        </div>

        <div className="w-full text-center font-grenze font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl flex items-center justify-center mt-30 md:mt-40">
          <p className="text-center leading-relaxed">
            Sự ra đời của 3 Tổ Chức Cộng Sản Việt Nam là xu thế khách quan của
            Cách Mạng giải phóng Dân tộc Việt Nam. Đã khẳng định bước phát triển
            nhảy vọt của nước ta. Tuy nhiên trong quá trình hoạt động, các tổ
            chức Cộng Sản đều cho rằng mình mới xứng đáng đại diện cho giai cấp
            vô sản, đồng thời tranh giành ảnh hưởng với quần chúng lao động. Sự
            thiếu đoàn kết ý chí về tư tưởng và hành động của các Tổ Chức Cộng
            Sản dẫn tới nguy cơ phân tán về lực lượng và tổ chức. Hai Tổ chức đã
            từng bàn về chuyện hợp nhất nhưng không tìm được tiếng nói chung
          </p>
        </div>
      </div>

      {/* Phần 5: Quá trình giải quyết mâu thuẫn và hợp nhất */}
      <div className="w-full max-w-7xl px-3 md:px-7 gap-6 md:gap-10 mt-12 md:mt-20">
        {/* Title */}
        <p className="font-bungee text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
          5. Quá trình giải quyết mâu thuẫn và hợp nhất
        </p>

        {/* Content */}
        <div className="w-full flex flex-col gap-4 md:gap-5 font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl mt-6 md:mt-10">
          <p className="text-center leading-relaxed">
            Để chấm dứt tình trạng tồn tại cùng 1 lúc 3 Tổ chức Cộng Sản ở Việt
            Nam, Nguyễn Ái Quốc lúc này đang hoạt động tại Xiêm, Thái Lan với
            trách nhiệm lịch sử là phải thành lập 1 Đảng Cộng Sản duy nhất, chấm
            dứt tình trạng chia rẽ phong trào Cộng sản tại Việt Nam. Tuy chưa
            nhận được chỉ thị của Quốc Tế Cộng Sản, người đã chủ động với tư
            cách quyền hạn là Phái viên của Quốc Tế Cộng Sản triệu tập Hội Nghị
            hợp nhất các Tổ Chức Cộng Sản.
          </p>
          <p className="font-light text-center leading-relaxed">
            Trong báo cáo gửi Quốc Tế Cộng Sản ngày 18/02/1930, Người viết:{" "}
            <span className="font-medium">
              ”… một đồng chí từ Hồng Kông tới Xiêm tới Xiêm và cho tôi biết
              tình hình Hội An Nam Thanh niên Cách mạng tan rã; những người cộng
              sản chia thành nhiều phái … Lập tức tôi đi Trung Quốc”
            </span>
          </p>
        </div>

        <div className="w-full flex items-center justify-between gap-6 md:gap-8 font-grenze mt-6 md:mt-10">
          <img
            src="/images/communist/29.png"
            className="w-full max-w-lg h-auto"
          />
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <p className="font-grenze font-light text-lg sm:text-xl md:text-2xl lg:text-3xl w-[553px] md:w-full text-center leading-relaxed">
              ”Chúng tôi đang lo buồn cho sự đoàn kết nhất trí của những người
              cộng sản, thì một tin mừng lớn bất ngờ đến: Đồng chí Vương - tức
              Nguyễn Ái Quốc đã trở về Trung Quốc, gặp các đồng chí An Nam Cộng
              sản Đảng ở Hương Cảng và gửi thư về nước triệu tập các nhóm An Nam
              và Đông Dương Cộng sản Đảng lập tức cử đại biểu ra Hương Cảng bàn
              chuyện hợp nhất... Chúng tôi rất vui sướng vì sẽ được gặp đồng chí
              Nguyễn Ái Quốc, người mà chúng tôi biết từ lâu nhưng chưa từng gặp
              mặt … Từ lâu, chúng tôi vẫn ao ước có một người mà ai cũng phải
              thừa nhận là vô tư, là hiểu biết sâu rộng về cách mạng hơn hẳn
              chúng tôi, để nhận xét và giúp chúng tôi giải quyết mọi vấn đề
              phức tạp. Người đó chính là đồng chí Vương”
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-6 md:mt-10">
          <p className="text-sm md:text-base italic text-center leading-relaxed">
            (Đồng chí Nguyễn Thiệu, một trong sáu ủy viên Ban Lâm thời chỉ đạo
            của An Nam Cộng Sản Đảng được cử sang Hương Cảng để bàn về việc hợp
            nhất các Tổ chức Cộng sản đã kể lại)
          </p>
        </div>

        <div className="w-full flex flex-col mt-10 md:mt-16 gap-6 md:gap-8">
          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Từ ngày 06/01 đến ngày 07/02 năm 1930. Hội nghị hợp nhất các Tổ Chức
            Cộng Sản thành lập Đảng Cộng Sản Việt Nam đã họp ở bán đảo Cửu Long
            thuộc Hồng Kông dưới sự chủ trì của đồng chí Nguyễn Ái Quốc dưới tên
            gọi là Vương thay mặt cho Quốc Tế Cộng Sản. Với sự tham gia của các
            Đại Biểu của các Tổ Chức:
          </p>

          <div className="w-full flex items-center justify-center">
            <img
              src="/images/communist/30.png"
              className="w-full max-w-2xl h-auto"
            />
          </div>

          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            Sau Hội nghị thành lập Đảng Cộng sản Việt Nam - với sự đồng ý của
            Nguyễn Ái Quốc, ngày 24/02/1930 tại Sài Gòn Ban chấp hành Lâm thời
            của Đảng đã họp và quyết định chấp nhận Đông Dương Cộng sản Liên
            đoàn gia nhập Đảng Cộng Sản Việt Nam.
          </p>

          <div className="w-full flex flex-col items-center gap-4 md:gap-5">
            <img
              src="/images/communist/31.png"
              className="w-full max-w-2xl h-auto"
            />
            <p className="italic text-sm md:text-base text-center px-2">
              (Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930. Tranh
              của họa sĩ Phi Hoanh)
            </p>
          </div>

          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
            <span className=" font-light">
              Trong quá trình diễn ra cuộc họp, dưới yêu cầu phân xử các ý kiến
              trái chiều của các bên. Nguyễn Ái Quốc đã nói:
            </span>{" "}
            “Bây giờ không nói chuyện cũ để xem ai phải, ai trái nữa. Thực ra
            nhóm nào cũng có cái đúng, cũng có cái sai, nhưng mục đích của cuộc
            họp này không phải là để chỉ trích lẫn nhau, để kết luận ai đúng,
            sai sai - thì giờ và công tác cách mạng trước mắt không cho phép
            chúng ta làm chuyện đó … mục đích duy nhất của cuộc họp này là hợp
            nhất tất cả các tổ chức Cộng sản trong nước và nước ngoài thành một
            Đảng cộng sản thống nhất và vững mạnh, chiến đấu cho lợi ích chung
            của Cách mạng.”
          </p>

          <div className="w-full py-30 md:py-40 px-20 md:px-30 font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F42A2A] flex flex-col items-center justify-center text-center">
            <p className="text-center leading-relaxed">
              Các đại biểu dự hội nghị đều nhất chí thống nhất các Tổ chức Cộng
              sản, thành lập một Đảng lấy tên là
            </p>
            <p className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
              ĐẢNG CỘNG SẢN VIỆT NAM
            </p>
          </div>

          <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
            Hội nghị đã thông qua chánh cương vắn tắt, sách lược vắn tắt, chương
            trình tóm tắt và điều lệ vắn tắt của Đảng do đồng chí Nguyễn Ái Quốc
            soạn thảo:
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="w-full flex flex-col items-center gap-4 md:gap-5 font-grenze">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center leading-relaxed">
                Chánh cương vắn tắt nêu rõ
              </p>
              <div className="w-full flex flex-col gap-4 md:gap-5 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left leading-relaxed">
                <p>
                  <strong>Về phương diện xã hội:</strong> Dân chúng được tự do,
                  nam nữ bình quyền
                </p>
                <p>
                  <strong>Về phương diện kinh tế:</strong> Thủ tiêu hết các thứ
                  quốc trái, thu sản nghiệp lớn của đế quốc Pháp giao cho Chính
                  phủ công nông binh, thu ruộng đất chia cho người nghèo.
                </p>
                <p>
                  <strong>Về phương diện chính trị:</strong> Đánh đổ chủ nghĩa
                  đế quốc Pháp và tay sai, làm cho nước Việt Nam hoàn toàn độc
                  lập.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col items-center gap-4 md:gap-5 font-grenze">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center leading-relaxed">
                Sách lược vắn tắt chỉ rõ
              </p>
              <div className="w-full text-center md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
                {" "}
                “Đảng là đội tiên phong của giai cấp công nhân. Đảng phải tập
                hợp của đại bộ phận giai cấp, làm cho giai cấp lãnh đạo được dân
                chúng”
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-4 md:gap-5 mt-6 md:mt-10">
            <img
              src="/images/communist/32.png"
              className="w-full max-w-2xl h-auto"
            />
            <p className="italic text-sm md:text-base text-center px-2">
              (Ảnh tư liệu về Chánh cương vắn tắt, Sách lược vắn tắt, do lãnh tụ
              Nguyễn Ái Quốc soạn thảo, tháng 2/1930.)
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 md:gap-5 mt-6 md:mt-10">
            <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
              Văn kiện quan trọng nhất là Lời Kêu Gọi của Đảng Cộng Sản Việt Nam
              tới mọi tầng lớp nhân dân do đồng chí Nguyễn Ái Quốc thay mặt Quốc
              Tế Cộng Sản và Đảng Cộng Sản Việt Nam soạn thảo
            </p>
            <div className="w-full md:flex sm:flex sm:flex-col items-center justify-center gap-6 md:gap-8">
              <img
                src="/images/communist/33.png"
                className="w-full max-w-lg h-auto"
              />
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-center leading-relaxed">
                  “Nếu đế quốc Pháp tưởng có thể dùng khủng bố trắng hòng tiêu
                  diệt cách mạng An Nam thì chúng đã lầm to! Một là, cách mạng
                  An Nam không bị cô lập, trái lại, được giai cấp vô sản thế
                  giới nói chung và giai cấp cần lao Pháp nói riêng ủng hộ. Hai
                  là, giữa lúc cuộc khủng bố trắng lên đến đỉnh cao thì những
                  người cộng sản An Nam trước kia chưa có tổ chức đang thống
                  nhất lại thành một đảng, Đảng Cộng sản Việt Nam, để lãnh đạo
                  toàn thể anh chị em bị áp bức chúng ta làm cách mạng.”
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4 md:gap-5 mt-6 md:mt-10 mb-50 md:mb-60">
              <p className="font-grenze text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                Ở giai đoạn lịch sử này, Nguyễn Ái Quốc là người duy nhất có đủ
                năng lực và uy tín để đứng ra tập hợp và đoàn kết các Tổ chức
                Cộng sản tại Việt Nam thành 1 Đảng Cộng sản duy nhất. Hội nghị
                hợp nhất các Đảng Cộng sản Việt Nam mang tầm vóc như một Đại hội
                thành lập Đảng.
              </p>
              <p className="mx-auto font-grenze text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#9C1212] text-center leading-tight">
                Ngày 03 tháng 02 năm 1930 trở thành ngày thành lập Đảng Cộng sản
                Việt Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunistPage;
