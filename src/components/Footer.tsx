import React from "react";

const Footer: React.FC = () => {
    const arrow = (   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 3 12 12" fill="none">
  <path d="M2.25 9.75L9.75 2.25M9.75 2.25H4.125M9.75 2.25V7.875" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
 return (<section className="footer">
    <div className="upper">
        <div className="left">
            <div className="title">
<img src="/assets/clean-logo.webp" alt="logo" />

            </div>
            <div className="subtitle">
                Hệ điều hành AI cho tòa soạn tương lai
            </div>
        </div>
        <div className="right">
            <div className="col">
                <a className="item">
                    <div className="text">
Solutions
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
Pricing
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
Resources
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
About
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
Contact
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
            </div>
                        <div className="col">
                <a className="item">
                    <div className="text">
Instagram
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
YouTube
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
Twitter
                    </div>
      <div className="arrow">{arrow}</div>

                </a>
                                <a className="item">
                    <div className="text">
Linkedln
                    </div>
      <div className="arrow">{arrow}</div>

                </a>

            </div>
            <div className="col">
                         <div className="item">
                    <div className="text">contact@metapress.ai
                        </div></div>
                                               <div className="item">
                    <div className="text">+91 9876543210
                        </div></div>
            </div>
        </div>
    </div>
    <div className="bottom">
 <img className="footer_mobile__headline" src="../../../assets/MetaPress.AI.webp" alt="MetaPress.AI" />
        <div className="end">
        <div className="company">
            ©2025 All Rights Reserved by MetaPress
        </div>
        <div className="policy">
            <div className="item">
                <div className="text">
Terms of Service                </div>
                <div className="arrow">{arrow}</div>
            </div>
                        <div className="item">
                <div className="text">
                    Privacy Policy
                </div>
                <div className="arrow">{arrow}</div>
            </div>
        </div>
        </div>
    </div>
 </section>)   
}

export default Footer;