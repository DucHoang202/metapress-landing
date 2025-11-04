import React from "react";
import DemoButton from "../ui/DemoButton";

const HeroMobile: React.FC = () => {


    return (
        <section className="hero_mobile">
            <div className="hero_mobile__container">
                <div className="content">
                    <div className="hero-mobile__content">
                        <div className="category">
                            <div className="new">New</div>
                            <div className="text">The Newsroom OS</div>
                            <div className="arrow">
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.875 0.75L11.25 5.125M11.25 5.125L6.875 9.5M11.25 5.125H0.75" stroke="#FCF5FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="title">
                            Hệ điều hành AI cho tòa soạn tương lai
                        </div>
                        <div className="subtitle">
                            MetaPress là nền tảng AI Multi-Agent dành riêng cho các tòa soạn, giúp tối ưu quy trình, hỗ trợ phóng viên và biên tập viên tạo nội dung nhanh, chính xác và hiệu quả hơn.
                        </div>
                    </div>
                </div>
  <DemoButton href="/form"/>
            </div>
        </section>
    );
}

export default HeroMobile;