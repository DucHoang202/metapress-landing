import React, { useState } from "react";

const Question: React.FC = () => {
  const [faqs, setFaqs] = useState([
    {
      open: false,
      title: "Tại sao chọn MetaPress?",
      subtitle:
        "Khác với các hệ thống CMS truyền thống chỉ quản lý nội dung, MetaPress tích hợp AI chuyên sâu cho từng công đoạn báo chí...",
    },
    {
      open: false,
      title: "MetaPress có phù hợp với tòa soạn nhỏ không?",
      subtitle:
        "Có. MetaPress được thiết kế linh hoạt, có thể tùy biến theo quy mô...",
    },
    {
      open: false,
      title: "Tôi có thể tích hợp MetaPress với hệ thống sẵn có?",
      subtitle:
        "MetaPress hỗ trợ API mở, dễ dàng kết nối với CMS, CRM hoặc các nền tảng dữ liệu khác...",
    },
  ]);

  const toggleDropdown = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : faq
      )
    );
  };

  return (
    <section className="question">
      <div className="container">
        <div className="content">
          <div className="title">Các câu hỏi thường gặp</div>
          <div className="subtitle">
            Discover how leading businesses optimize performance, automate
            workflows, and achieve transformative growth with NexaAI.
          </div>
          <div className="button">
            <div className="text">Get Started</div>
          </div>
        </div>

        <div className="content">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`dropdown ${faq.open ? "open" : ""}`}
            >
              <div className="info">
                <div className="title">{faq.title}</div>
                <div className="subtitle">{faq.subtitle}</div>
              </div>

              <div className="icon" onClick={() => toggleDropdown(index)}>
                {/* 👇 Conditionally render SVG */}
                {faq.open ? (
                  // When opened → minus icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
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
                  // When closed → plus icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
