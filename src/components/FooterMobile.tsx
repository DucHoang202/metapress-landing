import React from "react";
const FooterMobile: React.FC = () => {
    const arrow = (            <div className="arrow">
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>);
                        const arrow_gray = (            <div className="arrow">
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>);
return (<section className="footer_mobile">
    <div className="footer_mobile__container">
        <div className="footer_mobile__head">
            <div className="r1">
<img src="/assets/clean-logo.webp"/>

            </div>
            <div className="r2">
                Hệ điều hành AI cho tòa soạn tương lai
            </div>
        </div>
        <div className="footer_mobile__contact">
            contact@metapress.ai
        </div>
                <div className="footer_mobile__contact">
+91 9876543210
        </div>
        <div className="footer_mobile__line">

        </div>
        <div className="footer_mobile__navigation">
            <div className="col">
                <div className="row">
                    <div className="text">Giải pháp</div>
                 {arrow}
                </div>
                              <div className="row">
                    <div className="text">Lợi ích </div>
                 {arrow}
                </div>
              <div className="row">
                    <div className="text">Khách hàng </div>
                 {arrow}
                </div>
              <div className="row">
                    <div className="text">Liên hệ </div>
                 {arrow}
                </div>
              <div className="row">
                    <div className="text">Facebook </div>
                 {arrow}
                </div>
            </div>
                       <div className="col">
                <div className="row">
                    <div className="text"> 
Linkedln
                    </div>
                 {arrow}
                </div>
                              <div className="row">
                    <div className="text"> 
                        Twitter </div>
                 {arrow}
                </div>
              <div className="row">
                    <div className="text">YouTube  </div>
                 {arrow}
                </div>
           
            </div>
        </div>
              <div className="footer_mobile__line">

        </div>
        <div className="footer_mobile__policy-container">
            <div className="row">
                <div className="text">
                    Terms of Service
                </div>
                { arrow_gray}
            </div>
                      <div className="row">
                <div className="text">
                    Privacy Policy
                </div>
                { arrow_gray}
            </div>
        </div>
 <img className="footer_mobile__headline" src="../../../assets/MetaPress.AI.webp" alt="MetaPress.AI" />
        <div className="footer_mobile__company">
            ©2025 All Rights Reserved by MetaPress
        </div>

    </div>
</section>)
}
export default FooterMobile;