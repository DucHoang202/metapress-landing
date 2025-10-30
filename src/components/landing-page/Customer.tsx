import React from "react";

const Customer: React.FC = () => {
    return (
        <section className="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__header">
                    <h2 className="testimonials__title">
                        Niềm tin được xây dựng <br></br> từ hiệu quả vận hành thực tế
                    </h2>
                    <p className="testimonials__subtitle">
                        Mỗi lời chia sẻ là một minh chứng cho hiệu quả vận hành mà MetaPress mang lại.
                    </p>
                </div>
                <div className="testimonials__grid">
                    <div className="testimonials__column">
                        <article className="testimonials__card">
                            <div className="testimonials__content">
                                <p className="testimonials__quote">
                                    MetaPress đã giúp tòa soạn tôi rút ngắn thời gian sản xuất tin tức, đồng thời nâng cao tính đa dạng và chất lượng sản phẩm báo chí
                                </p>
                            </div>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">
                                    <img src="../../assets/customer.webp" alt="Carlos Ramirez" />
                                </div>
                                <div className="testimonials__author-info">
                                    <div className="testimonials__name">Sarah Johnson</div>
                                    <div className="testimonials__position">Thời Báo Kinh Tế Sài Gòn</div>
                                </div>
                            </div>
                        </article>
                        <article className="testimonials__card">
                            <div className="testimonials__content">
                                <h3 className="testimonials__heading">Seamless Integration, Instant Results</h3>
                                <p className="testimonials__quote">
                                    Integrating NexaAI into our legacy systems was effortless. Within days we automated critical workflows, reduced errors, and freed our team to focus on strategic initiatives. Simply outstanding.
                                </p>
                            </div>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">
                                    <img src="../../assets/customer.webp" alt="Carlos Ramirez" />
                                </div>
                                <div className="testimonials__author-info">
                                    <div className="testimonials__name">Priya Kumar</div>
                                    <div className="testimonials__position">VP of Operations, Meridian Financial</div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="testimonials__column">
                        <article className="testimonials__card">
                            <div className="testimonials__content">
                                <p className="testimonials__quote">
                                    Là người làm nội dung phân tích tài chính, một lĩnh vực hết sức đặc thù, tôi từng nghĩ AI sẽ chẳng giúp gì được đâu. Nhưng tôi đã nhầm. Metapress như một trợ lý giỏi của tôi, giúp tôi sắp xếp những suy nghĩ, ý tưởng đang lộn xộn thành một câu chuyện ngay ngắn, hấp dẫn. Ngay từ video đầu tiên khi kênh vừa ra mắt, nhờ sự hỗ trợ của Metapress, kênh của tôi đã đạt lượng view khủng với thời gian xem hàng nghìn giờ, giúp kênh trở thành đối tác của YouTube ngay sau video đầu tiên
                                </p>
                            </div>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">
                                    <img src="../../assets/customer.webp" alt="Carlos Ramirez" />
                                </div>
                                <div className="testimonials__author-info">
                                    <div className="testimonials__name">Ms. Minh Thư</div>
                                    <div className="testimonials__position">Host, Thư's Show - kênh tin tức tài chính & kinh doanh</div>
                                </div>
                            </div>
                        </article>
                        <article className="testimonials__card">
                            <div className="testimonials__content">
                                <h3 className="testimonials__heading">Scalable AI That Grows with Us</h3>
                                <p className="testimonials__quote">
                                    As a fast-growing startup, we needed an AI partner that could scale. NexaAI's modular platform expanded alongside our business—delivering enterprise-grade features.
                                </p>
                            </div>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">
                                    <img src="../../assets/customer.webp" alt="Carlos Ramirez" />
                                </div>
                                <div className="testimonials__author-info">
                                    <div className="testimonials__name">Carlos Ramirez</div>
                                    <div className="testimonials__position">CEO, NovaSolutions</div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
         
       </div> 
       </section>
    )
}

export default Customer;