import React, { useState, useRef, useEffect } from "react";

interface FAQ {
  open: boolean;
  title: string;
  subtitle: string;
}

const Question: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      open: false,
      title: "Tại sao chọn MetaPress?",
      subtitle:
        "MetaPress là giải pháp AI toàn diện dành riêng cho các tòa soạn báo, giúp tự động hóa toàn bộ quy trình sản xuất tin bài từ phát hiện đề tài đến xuất bản và phân phối. Điều này giúp tòa soạn tăng tốc độ xử lý, giảm chi phí vận hành và giữ vững bản sắc báo chí riêng biệt.",
    },
    {
      open: false,
      title: "Sự khác biệt của MetaPress là gì?",
      subtitle:
        "Khác với các hệ thống CMS truyền thống chỉ quản lý nội dung, MetaPress tích hợp AI chuyên sâu cho từng công đoạn báo chí: nhận diện xu hướng, kiểm chứng thông tin, tự động tạo bài viết, đa dạng hóa hình thức nội dung và phân phối thông minh đa kênh. Hệ thống giữ nguyên DNA đặc trưng của tòa soạn đồng thời giảm thiểu rủi ro pháp lý và sai sót thông tin đáng kể.",
    },
{
  open: false,
  title: "MetaPress có gì đặc biệt?",
  subtitle: `Chuỗi quy trình báo chí tự động hóa toàn bộ, mỗi bước đều có AI Agent chuyên trách, đảm bảo quy trình nhanh - chính xác - nhất quán.\n
Định hướng giọng điệu, phạm vi chủ đề được thiết lập rõ ràng giúp bảo toàn bản sắc tòa soạn.\n
Đáp ứng đa dạng các định dạng nội dung: bài báo, infographic, video, dữ liệu mở rộng.`,
},

    
    {
      open: false,
      title: "MetaPress được tính phí như thế nào?",
      subtitle:
        "Chi phí triển khai MetaPress thay đổi dựa trên quy mô tòa soạn, số lượng người dùng và các tính năng tùy chọn. Chúng tôi cung cấp các gói dịch vụ linh hoạt kèm tư vấn chi tiết nhằm tối ưu chi phí và hiệu quả vận hành cho từng khách hàng. Liên hệ để nhận báo giá phù hợp nhất với yêu cầu tòa soạn.",
    },
        {
      open: false,
      title: "Tôi cần làm gì để bắt đầu hợp tác với MetaPress?",
      subtitle:
        "Bước đầu tiên là liên hệ với đội ngũ tư vấn của MetaPress để trao đổi về đặc thù và nhu cầu của tòa soạn. Sau đó, chúng tôi cùng phối hợp xây dựng lộ trình tích hợp AI, triển khai thử nghiệm và đào tạo nhân sự. MetaPress sẽ đồng hành hỗ trợ liên tục để đảm bảo hiệu quả sử dụng tối ưu.",
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, // chỉ mở 1 câu tại 1 thời điểm
      }))
    );
  };

  return (
    <section className="question">
      <div className="container">
        <div className="content">
          <div className="title">Các câu hỏi thường gặp</div>
        </div>
        <div className="content">
          <ul className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} onToggle={toggleFAQ} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  faq: FAQ;
  index: number;
  onToggle: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(faq.open ? contentRef.current.scrollHeight : 0);
    }
  }, [faq.open]);
  
  return (
    <li
      className="faq-item"
      onClick={() => onToggle(index)}
      style={{ cursor: "pointer", background:  faq.open ?"linear-gradient(150deg, #0E0A0F 17.18%, #443149 227.36%" : "", }}
    >
      <div className="faq-container">
        <div className="faq-question">{faq.title}</div>

        <div className="icon">
          {faq.open ? (
            // icon khi mở
                        <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 18H13.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                stroke="#FCF5FE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

         
          ) : (
            // icon khi đóng
   <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13.5V22.5M22.5 18H13.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                stroke="#FCF5FE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`faq-answer ${faq.open ? "margin-16" : ""}`}
        style={{
          height: `${height}px`,
          opacity: faq.open ? 1 : 0,
          overflow: "hidden",
          transition: "height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div className="faq-answer-text" ref={contentRef}>
          {faq.subtitle}
        </div>
      </div>
    </li>
  );
};

export default Question;
