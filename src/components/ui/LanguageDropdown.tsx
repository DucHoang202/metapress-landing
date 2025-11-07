import React, { useState, useEffect } from "react";
import vietnamese from '../../languages/vietnamese.json';
import english from '../../languages/english.json';
// import french from '../../languages/french.json';
// import german from '../../languages/german.json';

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
      // data = french;
      data = english; // Fallback tạm thời
      break;
    case "de":
      // data = german;
      data = english; // Fallback tạm thời
      break;
    default:
      data = english;
      break;
  }

  (window as any).language = data;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ 
  currentLang: propLang, 
  onChange: propOnChange 
}) => {
  const [open, setOpen] = useState(false);
  
  // Quản lý state ngôn ngữ nội bộ
  const [internalLang, setInternalLang] = useState(() => {
    // Ưu tiên: prop > localStorage > default 'vi'
    if (propLang) return propLang;
    return localStorage.getItem('language') || 'vi';
  });

  // Load ngôn ngữ khi component mount
  useEffect(() => {
    loadLanguage(internalLang);
  }, []);

  // Sử dụng prop hoặc internal state
  const currentLang = propLang || internalLang;
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    // Load dữ liệu ngôn ngữ mới
    loadLanguage(langCode);
    
    // Lưu vào localStorage
    localStorage.setItem('language', langCode);
    
    // Cập nhật internal state
    setInternalLang(langCode);
    
    // Gọi callback nếu có
    if (propOnChange) {
      propOnChange(langCode);
    }
    
    setOpen(false);
    
    // Trigger re-render cho các component khác
    window.dispatchEvent(new CustomEvent('languageChange', { detail: langCode }));
  };

  return (
    <div className="header__dropdown">
      <button
        className="header__dropdown-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {currentLanguage.flag} {currentLanguage.name}
      </button>

      {open && (
        <div className="header__dropdown-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`header__dropdown-item ${
                currentLang === lang.code ? "header__dropdown-item--active" : ""
              }`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;