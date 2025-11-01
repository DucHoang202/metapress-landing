import React, { useState, useRef, useEffect } from "react";

interface FAQ {
  open: boolean;
  title: string;
  subtitle: string;
}

const Diagram: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
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

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
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
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                onToggle={toggleFAQ}
              />
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
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(faq.open ? contentRef.current.scrollHeight : 0);
    }
  }, [faq.open]);

  return (
    <li className="faq-item">
      <div
        className="faq-question"
        onClick={() => onToggle(index)}
        style={{ cursor: "pointer" }}
      >
        {faq.title}
      </div>
      <div
        className="faq-answer"
        style={{
          height: `${height}px`,
          opacity: faq.open ? "1" : "0",
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

export default Diagram;