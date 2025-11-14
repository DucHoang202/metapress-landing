import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DemoButton from "./ui/DemoButton";
import vietnamese from "../languages/vietnamese.json";
import english from "../languages/english.json";
import french from "../languages/french.json";
import german from "../languages/german.json";
import japanese from "../languages/japanese.json";
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
  { code: "ja", name: "日本語 (Japanese)", flag: "🇯🇵" }
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
    case "ja":
      data = japanese;
      break;
    default:
      data = english;
      break;
  }

  (window as any).language = data;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  
  // Language dropdown states
  const [open, setOpen] = useState(false);
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
        setOpen(false);
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
    setOpen(false);
    setSearch("");
    window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }));
    window.location.reload();
  };

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

  const getLinkConfig = (index: number) => {
    // Map theo thứ tự: 0-Solutions, 1-Benefits, 2-Customers, 3-Blog, 4-Contact
    const linkConfigs = [
      { href: "#solution", target: "#solution" },
      { href: "#benefit", target: "#benefit" },
      { href: "#customer", target: "#customer" },
      { href: "/blog", target: "" },
      { href: "/form", target: "" },
    ];
    return linkConfigs[index] || { href: "#", target: "" };
  };

  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!headerData) return null;

  return (
    <section className="header-section">
      <div className="header-section__container">
        <div className="header-section__icon-container">
          <img
            src="/assets/clean-logo.webp"
            onClick={() => navigate("/")}
            alt="logo"
          />
        </div>

        <div className="header-section__link-container">
          {headerData.links.map((linkText, index) => {
            const { href, target } = getLinkConfig(index);
            return (
              <a
                key={index}
                className="link"
                href={href}
                onClick={target ? (e) => handleSmoothScroll(e, target) : undefined}
              >
                {linkText}
              </a>
            );
          })}
        </div>
        
        <div className="header-section__right">
          <div className="header__dropdown__button-container">
            {/* Language Dropdown */}
            <div className="header__dropdown" ref={dropdownRef}>
              <button
                className="header__dropdown-button"
                onClick={() => setOpen((prev) => !prev)}
              >
                {currentLanguage.flag} {currentLanguage.name}
              </button>

              {open && (
                <div className="header__dropdown-menu">
                  {/* <input
                    type="text"
                    placeholder="Tìm ngôn ngữ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="header__dropdown-search"
                  /> */}

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
          </div>
          
          <DemoButton href="/form" text={headerData.button.text}/>
        </div>
      </div>
    </section>
  );
};

export default Header;