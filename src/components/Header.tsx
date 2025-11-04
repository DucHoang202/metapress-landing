import React from "react";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const navigate = useNavigate();

  //Smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      //Nếu đang ở trang hiện tại, scroll luôn
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      //Cập nhật URL mà không reload trang
      window.history.pushState(null, '', targetId);
    } else {
    //Nếu đang ở trang khác
    navigate('/' + targetId);
// Đợi 100ms rồi scroll
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }


 return (<section className="header-section">
 <div className="header-section__container ">
     <div className="header-section__icon-container ">
    
            <img src="/assets/clean-logo.webp" onClick = {() => navigate("/")} alt="logo"></img>

     </div>
      <div className="header-section__link-container ">
                <a className="link" href="#solution"  onClick={(e) => handleSmoothScroll(e, '#solution')}>Giải pháp</a>
                <a className="link" href="#benefit"
                onClick = {(e) => handleSmoothScroll(e, '#benefit')}>Lợi ích</a>
                <a className="link" href="#customer"  onClick = {(e) => handleSmoothScroll(e, '#customer')}>Khách hàng</a>
                <a className="link" href="/form">Liên hệ</a>

        </div>
         <button className="header-section__demo-btn ">
            <div className="text" onClick={() => window.location.href = "/form"}>
                Liên hệ demo
                  </div>
                <span className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span>
          

            </button>



 </div>
 </section>)   
}

export default Header;