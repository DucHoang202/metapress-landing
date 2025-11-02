import React from "react";
import Logo from "/assets/logo.webp";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const navigate = useNavigate();
 

 return (<section className="header-section">
 <div className="header-section__container ">
     <div className="header-section__icon-container ">
    
            <img src={Logo} onClick = {() => navigate("/")} alt="logo"></img>

     </div>
      <div className="header-section__link-container ">
                <a className="link" href="#solution">Giải pháp</a>
                <a className="link" href="#benefit">Lợi ích</a>
                <a className="link" href="#customer">Khách hàng</a>
                <a className="link" onClick = {() => navigate("/form")}>Liên hệ</a>

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