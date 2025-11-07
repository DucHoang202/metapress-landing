import React from "react";
const GetStarted: React.FC = () => {
   const statsData = [
  { title: "250+", subtitle: "Phóng viên, nhà báo sử dụng hàng ngày" },
  { title: "50+", subtitle: "Tòa soạn và cơ quan báo chí hợp tác" },
  { title: "10.000+", subtitle: "Bài viết được tối ưu bằng AI mỗi tháng" },
];
  // Chia mảng thành các nhóm 3 phần tử
  const rows = [];
  for (let i = 0; i < statsData.length; i += 3) {
    rows.push(statsData.slice(i, i + 3));
  }
    return (<section className="get-started">

        <div className="get-started__container">
                    <div className="get-started__background">
   
                    <div className="get-started__gradient-blur">

          </div>
      <div className="get-started__content">

    
            <div className="title">
Khi công nghệ giải quyết được vấn đề <br></br>của người làm báo
            </div>
            <div className="subtitle">
Được thiết kế từ hiểu biết sâu sắc về nghiệp vụ báo chí, AI của MetaPress nắm bắt tư duy tòa soạn, <br></br>giúp bạn tinh gọn quy trình, tối ưu vận hành và nâng tầm chất lượng nội dung.
            </div>
            <div className="button-container" onClick={() => window.location.href = "/form"} >
            <div className="button">
                <div className="text">
Liên hệ Demo
                </div>
                <div className="arrow">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
    </section>)
}

export default GetStarted;