import React from "react";

const Hero: React.FC = () => {
    return (<section className="hero-section">
        <div className="hero-section__container">
            <div className="hero-section__content">
                <div className="newsroom">
                    <div className="status">
                                    <div className="text">New</div>
                    </div>
                    <div className="name">The Newsroom OS</div>
                    <div className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
  <path d="M8.375 2.625L12.75 7M12.75 7L8.375 11.375M12.75 7H2.25" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
                </div>
                <div className="title">
                    Hệ điều hành AI cho <br></br> tòa soạn tương lai
                </div>
                <div className="subtitle">
                    MetaPress là nền tảng AI Multi-Agent dành riêng cho các tòa soạn, giúp tối ưu quy trình, hỗ trợ phóng viên và biên tập viên tạo nội dung nhanh, chính xác và hiệu quả hơn.
                </div>
                        <div className="button" onClick={() => window.location.href = "/form"}>
            <div className="text">Liên hệ demo</div>
            <div className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
        </div>
            </div>

        </div>
        
    </section>)
}

export default Hero;