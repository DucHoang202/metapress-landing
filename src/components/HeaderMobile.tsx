import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

interface HeaderData {
  section: string;
  links: string[];
  button: {
    text: string;
    dropdown: string;
  };
}

const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const languageData = (window as any).language;
    if (languageData?.data) {
      const header = languageData.data.find(
        (item: any) => item.section === "header"
      );
      if (header) {
        setHeaderData(header);
      }
    }
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", targetId);
    } else {
      navigate("/" + targetId);
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const getLinkConfig = (linkText: string) => {
    const linkMap: { [key: string]: { href: string; target: string } } = {
      Solutions: { href: "#solution", target: "#solution" },
      "Giải pháp": { href: "#solution", target: "#solution" },
      Benefits: { href: "#benefit", target: "#benefit" },
      "Lợi ích": { href: "#benefit", target: "#benefit" },
      Customers: { href: "#customer", target: "#customer" },
      "Khách hàng": { href: "#customer", target: "#customer" },
      Contact: { href: "/form", target: "" },
      "Liên hệ": { href: "/form", target: "" },
    };
    return linkMap[linkText] || { href: "#", target: "" };
  };

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleDemoClick = () => {
    navigate("/form");
  };

  return (
    <section className="header-mobile">
      <div className="header-mobile__container">
        <div className="header-mobile__icon-container">
          <img
            src="/assets/clean-logo.webp"
            onClick={() => navigate("/")}
            alt="logo"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="header-mobile-right">
          <div className="header-mobile__language-placeholder"></div>
          <button
            className="header-mobile__demo-button"
            onClick={handleDemoClick}
          >
            {headerData?.button.text || "Liên hệ demo"}
          </button>
          <div className="header-mobile__burger-menu">
            <Menu
              right
              isOpen={menuOpen}
              onStateChange={handleStateChange}
              customBurgerIcon={
                <div className="burger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              }
            >
              {headerData?.links.map((linkText, index) => {
                const { href, target } = getLinkConfig(linkText);
                return (
                  <a
                    key={index}
                    className="menu-item"
                    href={href}
                    onClick={
                      target
                        ? (e) => handleSmoothScroll(e, target)
                        : () => {
                            navigate(href);
                            closeMenu();
                          }
                    }
                  >
                    {linkText}
                  </a>
                );
              })}
            </Menu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
