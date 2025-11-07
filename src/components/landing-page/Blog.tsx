import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Blog: React.FC = () => {
    const swiperRef = useRef<any>(null);
    const cardTitleRefs = useRef<(HTMLDivElement | null)[]>([]);
 
    const items = [{
        
            image: "../../../assets/Knowledge Hub.webp",
            title: "Việt Nam và nước cờ địa chính trị trên mặt biển: Khi các bến cảng trở thành tiền đồn chiến lược Việt Nam và nước cờ địa chính trị trên mặt biển: Khi các bến cảng trở thành tiền đồn chiến lược",
            subtitle: "Nhiều người đã quên đi câu nói ấy, phát ra tại một hội trường nhỏ bên bờ cảng Đình Vũ cách đây hơn hai thập kỉ qua và đã"
        
    },
{
        
            image: "../../../assets/Knowledge Hub (1).webp",
            title: "Từ tăng trưởng nóng đến tái cấu trúc thị trường ",
            subtitle: "Sau hơn một thập kỷ mở rộng ồ ạt, thị trường thực phẩm – đồ uống (F&B) Việt Nam bước vào giai đoạn 2024"
        
},
{
        
            image: "../../../assets/Knowledge Hub (2).webp",
            title: "Nghệ thuật đặt câu hỏi phỏng vấn cùng AI",
            subtitle: "Hub kiến thức chuyên môn đầu tiên tại Việt Nam dành cho Solo Expert về Kinh Doanh Tri Thức."
        
    },
    {
        
            image: "../../../assets/Knowledge Hub.webp",
            title: "Việt Nam và nước cờ địa chính trị trên mặt biển: Khi các bến cảng trở thành tiền đồn chiến lược",
            subtitle: "Nhiều người đã quên đi câu nói ấy, phát ra tại một hội trường nhỏ bên bờ cảng Đình Vũ cách đây hơn hai thập kỉ qua và đã"
        
    },
    {
        
            image: "../../../assets/Knowledge Hub (1).webp",
            title: "Từ tăng trưởng nóng đến tái cấu trúc thị trường ",
            subtitle: "Sau hơn một thập kỷ mở rộng ồ ạt, thị trường thực phẩm – đồ uống (F&B) Việt Nam bước vào giai đoạn 2024"
        
},
{
        
            image: "../../../assets/Knowledge Hub (2).webp",
            title: "Nghệ thuật đặt câu hỏi phỏng vấn cùng AI",
            subtitle: "Hub kiến thức chuyên môn đầu tiên tại Việt Nam dành cho Solo Expert về Kinh Doanh Tri Thức."
        
    }
]
useEffect(() => {
    const adjustHeights = () => {
        // Reset heights
        cardTitleRefs.current.forEach(ref => {
            if (ref) {
                ref.style.height = 'auto';
            }
        });

        // Get heights
        const heights = cardTitleRefs.current.map(ref => ref?.offsetHeight || 0);
        const maxHeight = Math.max(...heights);

        // Set uniform height
        cardTitleRefs.current.forEach(ref => {
            if (ref) {
                ref.style.height = `${maxHeight}px`;
            }
        });
    };

    // Đợi fonts load xong
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            // Thêm một chút delay để đảm bảo layout ổn định
            setTimeout(adjustHeights, 50);
        });
    } else {
        // Fallback nếu browser không support Font Loading API
        setTimeout(adjustHeights, 100);
    }
}, [items]);
    return (<section className="blog">
        <div className="blog__container">
            <div className="blog__header">
            <div className="blog__left">
                <div className="blog__title">Blog</div>
                <div className="blog__subtitle">Tri thức MetaPress</div>

            </div>
            <div className="blog__right">
Những bản tin mới nhất về AI, chuyển đổi số và công nghệ trong lĩnh vực báo chí, được MetaPress tự động sản xuất tới quý vị bạn đọc hàng ngày
            </div>
            </div>
<div className="blog__carousel">
  <Swiper
    ref={swiperRef}
    className="blog__swiper"
    slidesPerView={3}
    spaceBetween={24}
    grabCursor={true}
    loop={false}
    speed={300}
    autoplay={false}
    pagination={{
      clickable: true,
      el: ".blog__pagination", // chọn class đúng tên phần tử bạn đã đặt dưới
      bulletClass: "swiper-pagination-bullet", // class mặc định của Swiper
      bulletActiveClass: "swiper-pagination-bullet-active",
    }}
    // navigation={{
    //   nextEl: ".sports__navigation-arrow",
    //   prevEl: ".sports__navigation-prev",
    // }}
    modules={[Navigation, Pagination, FreeMode]}
    freeMode={true}
    breakpoints={{
      1024: {
        slidesPerView: 3,
        freeMode: false,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 'auto',
      },
      0: {
         slidesPerView: 'auto',
      },
    }}
  >
    {items.map((item, index) => (
      <SwiperSlide key={index} className="blog__card-container">
        <div className={`blog__card ${index === 0 ? "first" : index === items.length - 1 ? "last" : ""}`}>
          <div className="blog__image">
<img src={item.image} alt=""/>
          </div>
          <div className="blog__text">
            <div className="title" ref={(el) => {cardTitleRefs.current[index] = el;}}>
              {item.title}
            </div>
            <div className="subtitle">{item.subtitle}</div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Dots pagination hiển thị ở đây */}
  <div className="blog__pagination"></div>
                         <div className="blog__button" onClick={() => window.location.href = "/form"}>
            <div className="text">Xem thêm</div>
            <div className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
</div>
</div>
        </div>
    </section>)
}
export default Blog;