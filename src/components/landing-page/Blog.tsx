import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  thumb: string | null;
  link: string;
}

interface BlogSectionData {
  section: string;
  title: string;
  subtitle: string;
  description: string;
  button: {
    text: string;
  };
}

const Blog: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const cardTitleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogSectionData, setBlogSectionData] = useState<BlogSectionData | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch('https://metapress.ai/blog/wp-json/wp/v2/posts?_embed&per_page=12');
      const data = await res.json();
      const posts = data.map((p: any) => ({
        title: p.title.rendered,
        date: new Date(p.date).toLocaleDateString('vi-VN'),
        excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 120) + '...',
        thumb: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
        link: p.link
      }));
      console.log('Fetched posts:', posts);
      setBlogPosts(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  useEffect(() => {
    // Lấy dữ liệu section từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      const blog = languageData.data.find((item: any) => item.section === "blog");
      if (blog) {
        setBlogSectionData(blog);
      }
    }

    // Fetch blog posts từ WordPress API
    fetchData();
  }, []);

  useEffect(() => {
    if (!blogPosts.length) return;

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

    // Đợi font load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setTimeout(adjustHeights, 50);
      });
    } else {
      setTimeout(adjustHeights, 100);
    }
  }, [blogPosts]);

  if (!blogSectionData || !blogPosts.length) {
    return null;
  }

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__header">
          <div className="blog__left">
            <div className="blog__title">{blogSectionData.title}</div>
            <div className="blog__subtitle">{blogSectionData.subtitle}</div>
          </div>
          <div className="blog__right">
            {blogSectionData.description}
          </div>
        </div>
        <div className="blog__carousel">
          <Swiper
            ref={swiperRef}
            className="blog__swiper"
            slidesPerView={3}
            spaceBetween={24}
            grabCursor={true}
            speed={300}
            freeMode={false}
            pagination={{
              clickable: true,
              el: ".blog__pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Navigation, Pagination, FreeMode]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
                freeMode: false
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 14,
              },
              0: {
                slidesPerView: 'auto',
                spaceBetween: 14,
              },
            }}
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index} className="blog__card-container">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`blog__card ${index === 0 ? "first" : index === blogPosts.length - 1 ? "last" : ""}`}
                >
                  <div className="blog__image">
                    <img 
                      src={post.thumb || '../../../assets/Knowledge Hub.webp'} 
                      alt={post.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '../../../assets/Knowledge Hub.webp';
                      }}
                    />
                  </div>
                  <div className="blog__text">
                    <div className="title" ref={(el) => {cardTitleRefs.current[index] = el;}}>
                      {post.title}
                    </div>
                    <div className="subtitle">{post.excerpt}</div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots pagination hiển thị ở đây */}
          <div className="blog__pagination"></div>
          <div className="blog__button" onClick={() => window.location.href = "https://metapress.ai/blog"}>
            <div className="text">{blogSectionData.button.text}</div>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;