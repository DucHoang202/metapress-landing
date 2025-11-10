import React, { useEffect, useState } from "react";

interface Testimonial {
  heading?: string;
  quote: string;
  name: string;
  position: string;
}

interface CustomerData {
  section: string;
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const Customer: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    // Lấy dữ liệu từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      // Tìm section có section === "customer"
      const customer = languageData.data.find((item: any) => item.section === "customer");
      if (customer) {
        setCustomerData(customer);
      }
    }
  }, []);

  // Map avatar và style cho mỗi người dựa trên tên
  const getAvatarConfig = (name: string) => {
    const avatarMap: { [key: string]: { src: string; style?: React.CSSProperties } } = {
      'Dương Quỳnh': { src: '../../assets/Mr.webp' },
      'Phạm Nguyên Lập': { src: '../../assets/kryp_boss.webp',  style: { transform: 'scale(1.6) translateY(5px)' } },
      'Ms. Minh Thư': { 
        src: '../../assets/Ms. Minh Thu.webp',
        style: { transform: 'scale(1.8) translateX(10px)' }
      },
    };
    return avatarMap[name] || { src: '../../assets/default.webp' };
  };

  if (!customerData) {
    return null;
  }

  // Chia testimonials thành 2 cột (chẵn và lẻ)
  const column1 = customerData.testimonials.filter((_, i) => i % 2 === 0);
  const column2 = customerData.testimonials.filter((_, i) => i % 2 === 1);

  return (
    <section className="testimonials" id="customer">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 
            className="testimonials__title"
            dangerouslySetInnerHTML={{ __html: customerData.title }}
          />
          <p className="testimonials__subtitle">
            {customerData.subtitle}
          </p>
        </div>
        <div className="testimonials__grid">
          <div className="testimonials__column">
            {column1.map((testimonial, index) => {
              const avatarConfig = getAvatarConfig(testimonial.name);
              return (
                <article key={index} className="testimonials__card">
                  <div className="testimonials__content">
                    {testimonial.heading && (
                      <h3 className="testimonials__heading">{testimonial.heading}</h3>
                    )}
                    <p className={testimonial.heading ? "testimonials__quote--small" : "testimonials__quote"}>
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      <img 
                        src={avatarConfig.src} 
                        alt={testimonial.name}
                        style={avatarConfig.style}
                      />
                    </div>
                    <div className="testimonials__author-info">
                      <div className="testimonials__name">{testimonial.name}</div>
                      <div className="testimonials__position">{testimonial.position}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="testimonials__column">
            {column2.map((testimonial, index) => {
              const avatarConfig = getAvatarConfig(testimonial.name);
              return (
                <article key={index} className="testimonials__card">
                  <div className="testimonials__content">
                    {testimonial.heading && (
                      <h3 className="testimonials__heading">{testimonial.heading}</h3>
                    )}
                    <p className={testimonial.heading ? "testimonials__quote--small" : "testimonials__quote"}>
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      <img 
                        src={avatarConfig.src} 
                        alt={testimonial.name}
                        style={avatarConfig.style}
                      />
                    </div>
                    <div className="testimonials__author-info">
                      <div className="testimonials__name">{testimonial.name}</div>
                      <div className="testimonials__position">{testimonial.position}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;