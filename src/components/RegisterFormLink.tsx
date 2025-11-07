import Footer from "./Footer";
import Header from "./Header";
import RegisterForm from "./landing-page/RegisterForm";
import { useMediaQuery } from 'react-responsive';
import FooterMobile from "./FooterMobile";
import LanguageDropdown from './ui/LanguageDropdown';

function RegisterFormLink() {
    //const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1023});
    return (
        <div className="App">
            <Header DropdownComponent={LanguageDropdown}/>
            <main>
                <RegisterForm/>
            </main>
{ isTablet ? <FooterMobile/> : <Footer/>}
        </div>
    )
}
export default RegisterFormLink;