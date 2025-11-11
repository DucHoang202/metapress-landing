import NotFound from './pages/NotFound.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import FooterMobile from './components/FooterMobile.tsx';
import { Benefit, Customer, Feature, GetStarted, Hero, Question, Sponsor, Unlock, HeroMobile, Diagram3, Blog, Customer3 } from './components/landing-page/landing-page.ts';
import RegisterFormLink from './components/RegisterFormLink.tsx';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import HeaderMobile from './components/HeaderMobile.tsx';
import vietnamese from "./languages/vietnamese.json";
import english from "./languages/english.json";
import french from "./languages/french.json";
import german from "./languages/german.json";

function getWidthExcludesScrollbar(): number {
  return document.documentElement.clientWidth;
}

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

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const displayUnlock = useMediaQuery({ maxWidth: 1262 });
  const formatHeader = useMediaQuery({ maxWidth: 1035 });

  // Load ngôn ngữ ban đầu
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "vi";
    loadLanguage(savedLang);
  }, []);

  // Set app width
  useEffect(() => {
    const setAppWidth = () => {
      const width = getWidthExcludesScrollbar();
      document.documentElement.style.setProperty('--app-width', `${width}px`);
    };

    setAppWidth();
    window.addEventListener('resize', setAppWidth);

    return () => {
      window.removeEventListener('resize', setAppWidth);
    };
  }, []);

  // Lắng nghe sự thay đổi ngôn ngữ từ LanguageDropdown
  useEffect(() => {
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      const newLang = customEvent.detail;

      console.log("Language changed to:", newLang);

      // Load lại ngôn ngữ mới
      loadLanguage(newLang);

      // Reload trang để cập nhật tất cả components
      window.location.reload();
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  // Lắng nghe storage event (khi tab khác thay đổi)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "language" && e.newValue) {
        console.log("Storage changed:", e.newValue);
        loadLanguage(e.newValue);
        window.location.reload();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className='App'>
        {/* <LanguageDropdown /> */}
      {formatHeader ? <HeaderMobile /> : <Header />}
    
      
      <main>
        {isMobile ? <HeroMobile /> : <Hero />}
        <Sponsor />
        <Feature />
        <Benefit />
        <Diagram3 />
        <GetStarted />
        <Customer />
        <Customer3 />
        <Question />
        <Blog />
        {displayUnlock ? "" : <Unlock />}
      </main>
      
      {isTablet ? <FooterMobile /> : <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<RegisterFormLink />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;