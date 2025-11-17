import Footer from "./Footer";
import Header from "./Header";
import RegisterForm from "./landing-page/RegisterForm";
import { useMediaQuery } from 'react-responsive';
import FooterMobile from "./FooterMobile";
import HeaderMobile from "./HeaderMobile";
// import LanguageDropdown from "./ui/LanguageDropdown";
function RegisterFormLink() {
    const isTablet = useMediaQuery({ maxWidth: 1023});
      const formatHeader = useMediaQuery({ maxWidth: 1250});

    return (
        <div className="App">
{ formatHeader ? <HeaderMobile/> : <Header/>}
            <main>
                <RegisterForm/>
            </main>
{ isTablet ? <FooterMobile/> : <Footer/>}
        </div>
    )
}
export default RegisterFormLink;