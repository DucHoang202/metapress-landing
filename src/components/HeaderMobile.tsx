import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import vietnamese from "../languages/vietnamese.json";
import english from "../languages/english.json";
import french from "../languages/french.json";
import german from "../languages/german.json";

interface HeaderData {
  section: string;
  links: string[];
  button: {
    text: string;
    dropdown: string;
  };
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

function loadLanguage(lang: string): void {
  let data;

  switch (lang) {
    case "vi":
      data = vietnamese;
      break;
    case "en":
      data = english;
      break;
    case "fr":
      data = french;
      break;
    case "de":
      data = german;
      break;
    default:
      data = english;
      break;
  }

  (window as any).language = data;
}

const HeaderMobile: React.FC = () => {
  const navigate = useNavigate();
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Language dropdown states
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  // Load initial language
  useEffect(() => {
    loadLanguage(currentLang);
  }, []);

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

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const languageData = (window as any).language;
      if (languageData?.data) {
        const header = languageData.data.find(
          (item: any) => item.section === "header"
        );
        if (header) {
          setHeaderData(header);
        }
      }
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    loadLanguage(langCode);
    localStorage.setItem("language", langCode);
    setCurrentLang(langCode);
    setLangDropdownOpen(false);
    setSearch("");
    window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }));
    window.location.reload();
  };

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

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

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
              {/* Navigation Links */}
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

              {/* Language Dropdown inside Burger Menu */}
              <div className="menu-item menu-item--language" ref={dropdownRef}>
                <button
                  className="header__dropdown-button"
                  onClick={() => setLangDropdownOpen((prev) => !prev)}
                >
                  {currentLanguage.flag} {currentLanguage.name}
                </button>

                {langDropdownOpen && (
                  <div className="header__dropdown-menu">
                    <input
                      type="text"
                      placeholder="Tìm ngôn ngữ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="header__dropdown-search"
                    />

                    <div className="header__dropdown-list">
                      {filteredLanguages.length > 0 ? (
                        filteredLanguages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`header__dropdown-item ${
                              currentLang === lang.code
                                ? "header__dropdown-item--active"
                                : ""
                            }`}
                          >
                            {lang.flag} {lang.name}
                          </button>
                        ))
                      ) : (
                        <div className="header__dropdown-empty">Không tìm thấy</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;