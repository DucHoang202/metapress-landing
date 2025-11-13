import React, { useEffect, useState } from "react";

interface FooterLink {
  text: string;
}

interface FooterSocial {
  text: string;
}

interface FooterContact {
  email: string;
  phone: string;
}

interface FooterBottom {
  company: string;
  terms: string;
  privacy: string;
}

interface FooterData {
  section: string;
  subtitle: string;
  links: FooterLink[];
  socials: FooterSocial[];
  contact: FooterContact;
  bottom: FooterBottom;
}

const FooterMobile: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  // Dữ liệu mặc định (fallback)
  const defaultData: FooterData = {
    section: "footer",
    subtitle: "Hệ điều hành AI cho tòa soạn tương lai",
    links: [
      { text: "Giải pháp" },
      { text: "Lợi ích" },
      { text: "Khách hàng" },
      { text: "Tri thức" },
      { text: "Liên hệ" },
    ],
    socials: [
      { text: "Facebook" },
      { text: "LinkedIn" },
      { text: "Twitter" },
      { text: "YouTube" },
    ],
    contact: {
      email: "contact@metapress.ai",
      phone: "+91 9876543210",
    },
    bottom: {
      company: "©2025 All Rights Reserved by MetaPress",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
  };

  // Lấy dữ liệu từ window.language
  useEffect(() => {
    const languageData = (window as any).language;
    if (languageData?.data) {
      const footer = languageData.data.find(
        (item: any) => item.section === "footer"
      );
      if (footer) {
        setFooterData(footer);
      } else {
        setFooterData(defaultData);
      }
    } else {
      setFooterData(defaultData);
    }
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const languageData = (window as any).language;
      if (languageData?.data) {
        const footer = languageData.data.find(
          (item: any) => item.section === "footer"
        );
        if (footer) {
          setFooterData(footer);
        }
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLDivElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", targetId);
    } else {
      window.location.href = "/" + targetId;
    }
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLDivElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      handleSmoothScroll(e, href);
    } else {
      e.preventDefault();
      window.location.href = href;
    }
  };

  const getLinkConfig = (index: number) => {
    // Map theo thứ tự: 0-Solutions, 1-Benefits, 2-Customers, 3-Blog, 4-Contact
    const linkConfigs = [
      { href: "#solution", target: "#solution" },
      { href: "#benefit", target: "#benefit" },
      { href: "#customer", target: "#customer" },
      { href: "#blog", target: "#blog" },
      { href: "/form", target: "" },
    ];
    return linkConfigs[index] || { href: "#", target: "" };
  };

  const data = footerData || defaultData;

  const arrow = (
    <div className="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875" stroke="#FCF5FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  const arrow_gray = (
    <div className="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  return (
    <section className="footer_mobile">
      <div className="footer_mobile__container">
        <div className="footer_mobile__head">
          <div className="r1">
            <img src="/assets/clean-logo.webp" alt="logo" />
          </div>
          <div className="r2">{data.subtitle}</div>
        </div>

        <div className="footer_mobile__contact">{data.contact.email}</div>
        <div className="footer_mobile__contact">{data.contact.phone}</div>

        <div className="footer_mobile__line"></div>

        <div className="footer_mobile__navigation">
          {/* Cột 1: Links với navigation */}
          <div className="col">
            {data.links.slice(0, 5).map((link, i) => {
              const { href } = getLinkConfig(i);
              return (
                <div
                  key={i}
                  className="row"
                  onClick={(e) => handleNavigation(e, href)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="text">{link.text}</div>
                  {arrow}
                </div>
              );
            })}
          </div>

          {/* Cột 2: Socials - không có navigation */}
          <div className="col">
            {data.socials.map((social, i) => (
              <div key={i} className="row">
                <div className="text">{social.text}</div>
                {arrow}
              </div>
            ))}
          </div>
        </div>

        <div className="footer_mobile__line"></div>

        <div className="footer_mobile__policy-container">
          <div className="row">
            <div className="text">{data.bottom.terms}</div>
            {arrow_gray}
          </div>
          <div className="row">
            <div className="text">{data.bottom.privacy}</div>
            {arrow_gray}
          </div>
        </div>

        <img
          className="footer_mobile__headline"
          src="../../../assets/MetaPress.AI.webp"
          alt="MetaPress.AI"
        />
        <div className="footer_mobile__company">{data.bottom.company}</div>
      </div>
    </section>
  );
};

export default FooterMobile;