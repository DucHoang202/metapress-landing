import React, { useState, useEffect, useRef } from "react";

import vietnamese from "../../languages/vietnamese.json";
import english from "../../languages/english.json";
// import french from "../../languages/french.json";
// import german from "../../languages/german.json";

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
      // data = french;
      data = english; // fallback tạm thời
      break;
    case "de":
      // data = german;
      data = english; // fallback tạm thời
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
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "vi";
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    // Lưu vào localStorage
    localStorage.setItem("language", langCode);
    
    // Cập nhật state local
    setCurrentLang(langCode);
    
    // Đóng dropdown
    setOpen(false);
    setSearch("");
    
    // Dispatch custom event để App component biết
    window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }));
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lắng nghe sự thay đổi từ storage event (khi tab khác thay đổi)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "language" && e.newValue) {
        setCurrentLang(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
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
