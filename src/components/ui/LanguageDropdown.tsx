import React, { useState, useEffect, useRef } from "react";
import vietnamese from "../../languages/vietnamese.json";
import english from "../../languages/english.json";
import french from "../../languages/french.json";
import german from "../../languages/german.json";

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageDropdownProps {
  currentLang?: string;
  onChange?: (lang: string) => void;
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
      data = german; // fallback tạm thời
      break;
    default:
      data = english;
      break;
  }

  (window as any).language = data;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  currentLang: propLang,
  onChange: propOnChange,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [internalLang, setInternalLang] = useState(() => {
    if (propLang) return propLang;
    return localStorage.getItem("language") || "vi";
  });

  useEffect(() => {
    loadLanguage(internalLang);
  }, []);

  const currentLang = propLang || internalLang;
  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    loadLanguage(langCode);
    localStorage.setItem("language", langCode);
    setInternalLang(langCode);
    if (propOnChange) propOnChange(langCode);
    setOpen(false);
    setSearch("");
    window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }));
    window.location.reload();
  };

  // Lọc ngôn ngữ theo text nhập
  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  // Đóng dropdown khi click ra ngoài
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

  return (
 <div className="header__dropdown" ref={dropdownRef}>
      <button
        className="header__dropdown-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {currentLanguage.flag} {currentLanguage.name}
      </button>

      {open && (
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
  );
};

export default LanguageDropdown;
