import NotFound from './pages/NotFound.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import FooterMobile from './components/FooterMobile.tsx';

import { Benefit, Customer, Feature, GetStarted, Hero, Question, Sponsor, Unlock, HeroMobile, Diagram3} from './components/landing-page/landing-page.ts'
import RegisterFormLink from './components/RegisterFormLink.tsx';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
function Home () {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1023});
    const displayUnlock = useMediaQuery({ maxWidth: 1262});
  return (
    <div className='App'>
      <Header />
      <main>
{ isMobile ? <HeroMobile/> : <Hero/>}   
     <Sponsor/>
        <Feature/>
        <Benefit />
        <Diagram3/>
        <GetStarted />
        <Customer/>
        <Question/>
{displayUnlock ? "" : <Unlock/>}
        </main>
{ isTablet ? <FooterMobile/> : <Footer/>}
    </div>
  )
}

function App() {
  return (
<BrowserRouter>
<Routes>
 <Route path="/" element={<Home />} />
  <Route path="https://metapress.ai/form" element={<RegisterFormLink />} />
 <Route path="/404" element={<NotFound/>}/>
 <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
  );
}

export default App;