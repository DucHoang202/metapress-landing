import React from "react";

const Vision: React.FC = () => {
    return (
        <section className="vision">
            <div className="container">
                <div className="vision__wrapper">
                    {/* <img 
                        className="vision__image" 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/40921a0d3ed30687e43b3c2b1ac8298183683bda?width=2430" 
                        alt="MetaPress vision" 
                    /> */}
                    <div className="vision__overlay"></div>
                    <div className="vision__content">
                        <div className="vision__label">CHÚNG TÔI HƯỚNG TỚI</div>
                        <p className="vision__description">
     Như một trợ lý thông minh đồng hành, MetaPress thấu hiểu công việc báo chí, nắm bắt ý tưởng phóng viên, tinh gọn quy trình và tối ưu sản xuất nội dung chất lượng, nhanh, chính xác
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision;
