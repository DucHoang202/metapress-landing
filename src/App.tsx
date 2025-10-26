import NotFound from './pages/NotFound.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import { Benefit, Customer, Diagram, Feature, GetStarted, Hero, Question, Sponsor, Unlock, Vision} from './components/landing-page/landing-page.ts'
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Home () {
  return (
    <div className='App'>
      <Header />
      <main>
        <Hero />
        <Sponsor/>
        <Feature/>
        <Benefit />
        <Vision/>
        <Diagram />
        <GetStarted />
        <Customer/>
        <Question/>
        <Unlock/>
        </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
<BrowserRouter>
<Routes>
 <Route path="/" element={<Home />} />
 <Route path="/404" element={<NotFound/>}/>
 <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
  );
}

export default App;