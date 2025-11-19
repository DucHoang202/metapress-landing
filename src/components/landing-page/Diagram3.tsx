import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface DiagramContent {
  title: string;
  subtitle: string;
}

interface Diagram3Data {
  section: string;
  content: DiagramContent[];
}

const Diagram3: React.FC = () => {
  const [diagram3Data, setDiagram3Data] = useState<Diagram3Data | null>(null);
  const isDesktop = useMediaQuery({ minWidth: 0});
  useEffect(() => {
    // Lấy dữ liệu từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      // Tìm section có section === "diagram3"
      const diagram3 = languageData.data.find((item: any) => item.section === "diagram3");
      if (diagram3) {
        setDiagram3Data(diagram3);
      }
    }
  }, []);

  // Hiển thị loading hoặc fallback nếu chưa có dữ liệu
  if (!diagram3Data || !diagram3Data.content) {
    return null;
  }

  const [item1, item2, item3, item4] = diagram3Data.content;

  return (
    <section className="diagram3">
      <div className="diagram3__container">
        <div className="diagram3__1">
          <div className="left">
            <div className="title">{item1?.title}</div>
            <div className="subtitle">
              {item1?.subtitle}
            </div>
          </div>
          {isDesktop ? (
          <div className="brand">
            <div className="brand__decoration">
              <div className="brand__circle brand__circle--outer"></div>
              <div className="brand__circle brand__circle--middle"></div>
              <div className="brand__icon">
                <svg width="120" height="120" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2044 15.7837L10 20L8.79556 15.7837C8.48426 14.6946 7.90059 13.7028 7.09964 12.9018C6.29869 12.1009 5.30687 11.5172 4.21778 11.2059L0 10L4.2163 8.79556C5.30539 8.48426 6.29721 7.90059 7.09816 7.09964C7.89911 6.29869 8.48277 5.30687 8.79407 4.21778L10 0L11.2044 4.2163C11.5157 5.30539 12.0994 6.29721 12.9004 7.09816C13.7013 7.89911 14.6931 8.48277 15.7822 8.79407L20 10L15.7837 11.2044C14.6946 11.5157 13.7028 12.0994 12.9018 12.9004C12.1009 13.7013 11.5172 14.6931 11.2059 15.7822L11.2044 15.7837Z" fill="rgba(40, 0, 26, 0.61)"/>
                </svg>
              </div>
            </div>
          </div> )
           : (
            <div className="diagram3__pink_circle">
              <img src="/assets/Frame 74.webp"/>
            </div> 
          )}
        </div>

        <div className="diagram3__2">
          <div className="container">
            <div className="item">
              <div className="title-container">
                <div className="title">{item2?.title}</div>
                <div className="subtitle">{item2?.subtitle}</div>
              </div>
              <div className="img-container">
                <img className="diag-2-img" src="../../../assets/Diagram_1.svg" alt="Diagram 1" />
              </div>
            </div>
            <div className="item">
              <div className="title-container">
                <div className="title">{item3?.title}</div>
                <div className="subtitle">{item3?.subtitle}</div>
              </div>
              <div className="img-container">
                <img src="../../../assets/Diagram_2.svg" alt="Diagram 2" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="diagram3__3">
          <div className="container">
            <div className="content">
              <div className="left">
                <div className="title">
                  {item4?.title}
                </div>
                <div className="subtitle">
                  {item4?.subtitle}
                </div>
              </div>
              <div className="right">
                <img className="diag-2-img" src="../../../assets/Diagram_3.svg" alt="Diagram 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagram3;