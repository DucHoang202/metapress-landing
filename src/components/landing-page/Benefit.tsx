import React, { useEffect, useState } from "react";

interface BenefitData {
  section: string;
  title: string;
  content: {
    visionLabel: string;
    visionDescription: string;
  };
}

const Benefit: React.FC = () => {
  const [benefitData, setBenefitData] = useState<BenefitData | null>(null);

  useEffect(() => {
    // Lấy dữ liệu từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      // Tìm section có section === "benefit"
      const benefit = languageData.data.find((item: any) => item.section === "benefit");
      if (benefit) {
        setBenefitData(benefit);
      }
    }
  }, []);

  // Hiển thị loading hoặc fallback nếu chưa có dữ liệu
  if (!benefitData) {
    return null;
  }

  return (
    <section className="benefit" id="benefit">
      <div className="benefit__container">
        <div className="title">
          {benefitData.title}
        </div>
        <div className="benefit__image">
          <div className="vision">
            <div className="vision__label">{benefitData.content.visionLabel}</div>
            <p className="vision__description">
              {benefitData.content.visionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;