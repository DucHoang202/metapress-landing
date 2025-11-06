import React, { useEffect, useState } from "react";

interface Stat {
  title: string;
  subtitle: string;
}

interface GetStartedData {
  section: string;
  title: string;
  subtitle: string;
  button: string;
  stats: Stat[];
}

const GetStarted: React.FC = () => {
  const [getStartedData, setGetStartedData] = useState<GetStartedData | null>(null);

  useEffect(() => {
    // Lấy dữ liệu từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      // Tìm section có section === "get-started"
      const getStarted = languageData.data.find((item: any) => item.section === "get-started");
      if (getStarted) {
        setGetStartedData(getStarted);
      }
    }
  }, []);

  // Hiển thị loading hoặc fallback nếu chưa có dữ liệu
  if (!getStartedData) {
    return null;
  }

  // Chia mảng thành các nhóm 3 phần tử
  const rows = [];
  for (let i = 0; i < getStartedData.stats.length; i += 3) {
    rows.push(getStartedData.stats.slice(i, i + 3));
  }

  return (
    <section className="get-started">
      <div className="get-started__container">
        <div className="get-started__background">
          <div className="get-started__gradient-blur"></div>
          <div className="get-started__content">
            <div className="title" dangerouslySetInnerHTML={{ __html: getStartedData.title }} />
            <div className="subtitle" dangerouslySetInnerHTML={{ __html: getStartedData.subtitle }} />
            <div className="button-container" onClick={() => window.location.href = "/form"}>
              <div className="button">
                <div className="text">
                  {getStartedData.button}
                </div>
                <div className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-started__stats-container">
        <div className="get-started__stats">
          {rows.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((item, index) => (
                <div className="item" key={index}>
                  <div className="title">{item.title}</div>
                  <div className="subtitle">{item.subtitle}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;