import React from "react";
import DemoButton from "../ui/DemoButton";

const Unlock: React.FC = () => {
  return (
    <section className="unlock">

      <div className="unlock__container">
        <div className="unlock__content">

          <div className="unlock__half">
            <div className="category"></div>
            <div className="title">
              Bắt đầu hành trình đổi mới tòa soạn cùng MetaPress ngay hôm nay
            </div>
            <div className="subtitle">
             Ứng dụng AI để tòa soạn vận hành linh hoạt hơn, tiết kiệm hơn và sản xuất nội dung nhanh hơn mỗi ngày.
            </div>
          <DemoButton href="/form"/>
          </div>
    <div className="unlock__half-1">
      



          </div>
        </div>
        </div>
      
    </section>
  );
};

export default Unlock;
