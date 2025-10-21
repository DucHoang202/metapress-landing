import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

const NotFound: React.FC = () => {
  return (
    
    <div className="notfound-page">
      <Header />
      <main>
        <section className="section-tight">
          <div className="container">
            <div className="notfound__inner">
              <div className="notfound__illustration">
                <img src="/images/under-construction.svg" alt="Trang đang hoàn thiện" />
              </div>
              <div className="notfound__content">
                <h2 className="notfound__title">🚧 Oops! Trang này đang được hoàn thiện 🚧</h2>
                <p className="notfound__description">
                  Đội ngũ của chúng tôi đang nỗ lực cập nhật nội dung để mang đến cho bạn trải nghiệm tốt nhất.
Trong lúc chờ đợi, bạn hãy quay lại trang chủ nhé.
                </p>
                <a href="/" className="button button--primary ">Trở về trang chủ</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
