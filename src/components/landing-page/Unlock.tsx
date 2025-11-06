import React, { useEffect, useState } from "react";

interface UnlockData {
  section: string;
  category: string;
  title: string;
  subtitle: string;
  button: string;
}

const Unlock: React.FC = () => {
  const [unlockData, setUnlockData] = useState<UnlockData | null>(null);

  useEffect(() => {
    // Lấy dữ liệu từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      // Tìm section có section === "unlock"
      const unlock = languageData.data.find((item: any) => item.section === "unlock");
      if (unlock) {
        setUnlockData(unlock);
      }
    }
  }, []);

  // Hiển thị loading hoặc fallback nếu chưa có dữ liệu
  if (!unlockData) {
    return null;
  }

  return (
    <section className="unlock">
      <div className="unlock__container">
        <div className="unlock__content">
          <div className="unlock__half">
            <div className="category">{unlockData.category}</div>
            <div className="title">
              {unlockData.title}
            </div>
            <div className="subtitle">
              {unlockData.subtitle}
            </div>
            <a className="button" href="/form">
              <div className="text">{unlockData.button}</div>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 2 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
          <div className="unlock__half-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;