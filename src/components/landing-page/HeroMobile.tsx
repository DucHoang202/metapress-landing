import React from "react";

const HeroMobile: React.FC = () => {
    const handleButtonClick = () => {
        // Xử lý khi click button
        console.log('Button clicked');
    };

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
                <button className="hero_mobile__button" onClick={handleButtonClick}>
                    <div className="text">Liên hệ Demo</div>
                    <div className="arrow">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#0E0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
}

export default HeroMobile;