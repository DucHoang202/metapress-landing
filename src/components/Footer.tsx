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

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  // Dữ liệu mặc định (fallback)
  const defaultData: FooterData = {
    section: "footer",
    subtitle: "The AI Operating System for the Newsroom of the Future",
    links: [
      { text: "Solutions" },
      { text: "Benefits" },
      { text: "Customers" },
      { text: "Blog" },
      { text: "Contact" },
    ],
    socials: [
      { text: "Instagram" },
      { text: "YouTube" },
      { text: "Twitter" },
      { text: "LinkedIn" },
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
    e: React.MouseEvent<HTMLAnchorElement>,
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
      // Nếu không tìm thấy element, chuyển hướng đến trang
      window.location.href = "/" + targetId;
    }
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      handleSmoothScroll(e, href);
    } else {
      // Đối với các link như /form
      e.preventDefault();
      window.location.href = href;
    }
  };

  const getLinkConfig = (index: number) => {
    // Map theo thứ tự: 0-Solutions, 1-Benefits, 2-Customers, 3-Blog, 4-Contact
    const linkConfigs = [
      { href: "#solution", target: "#solution" },  // index 0
      { href: "#benefit", target: "#benefit" },    // index 1
      { href: "#customer", target: "#customer" },  // index 2
      { href: "/blog", target: "" },          // index 3
      { href: "/form", target: "" },               // index 4
    ];
    return linkConfigs[index] || { href: "#", target: "" };
  };

  const data = footerData || defaultData;

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="20"
      viewBox="0 3 12 12"
      fill="none"
    >
      <path
        d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875"
        stroke="#FCF5FE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  const arrow_gray = (
    <div className="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  return (
    <section className="footer">
      <div className="upper">
        <div className="left">
          <div className="title">
            <img src="/assets/clean-logo.webp" alt="logo" />
          </div>
          <div className="subtitle">{data.subtitle}</div>
        </div>

        <div className="right">
          {/* Links - CỘT ĐẦU TIÊN với navigation */}
          <div className="col">
            {data.links.map((link, i) => {
              const { href } = getLinkConfig(i);
              return (
                <a 
                  key={i} 
                  className="item" 
                  href={href}
                  onClick={(e) => handleNavigation(e, href)}
                >
                  <div className="text">{link.text}</div>
                  <div className="arrow">{arrow}</div>
                </a>
              );
            })}
          </div>

          {/* Socials - Không có navigation */}
          <div className="col">
            {data.socials.map((social, i) => (
              <a key={i} className="item" href="#">
                <div className="text">{social.text}</div>
                <div className="arrow">{arrow}</div>
              </a>
            ))}
          </div>

          {/* Contact - Không có navigation */}
          <div className="col">
            <div className="item">
              <div className="text">{data.contact.email}</div>
            </div>
            <div className="item">
              <div className="text">{data.contact.phone}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <img
          className="footer_mobile__headline"
          src="../../../assets/MetaPress.AI.webp"
          alt="MetaPress.AI"
        />
        <div className="end">
          <div className="company">{data.bottom.company}</div>
          <div className="policy">
            <div className="item">
              <div className="text">{data.bottom.terms}</div>
              <div className="arrow">{arrow_gray}</div>
            </div>
            <div className="item">
              <div className="text">{data.bottom.privacy}</div>
              <div className="arrow">{arrow_gray}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;