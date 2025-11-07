import React from "react";
import Marquee from "react-fast-marquee";


const Sponsor: React.FC = () => {
    const StarIcon = () => (
        <svg className="customer__star" width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.925 32.1234L28.4932 40.7045L25.0613 32.1234C24.1743 29.9068 22.5113 27.8883 20.2291 26.2581C17.947 24.628 15.121 23.4402 12.0178 22.8066L0 20.3523L12.0136 17.9009C15.1167 17.2674 17.9427 16.0795 20.2249 14.4494C22.5071 12.8193 24.1701 10.8007 25.0571 8.58413L28.4932 0L31.925 8.58111C32.812 10.7977 34.475 12.8162 36.7572 14.4464C39.0393 16.0765 41.8653 17.2644 44.9685 17.8979L56.9863 20.3523L44.9728 22.8036C41.8696 23.4371 39.0436 24.625 36.7614 26.2551C34.4793 27.8852 32.8162 29.9038 31.9292 32.1204L31.925 32.1234Z" fill="#888888"/>
        </svg>
    );


 const MarqueeItems = () => (<div className="customer__line">
    <div className="customer__item--invert">
        <img src="../../../assets/KinhTe.webp" />
    </div>
    <div className="customer__item">
        <StarIcon/>
    </div>
        <div className="customer__item">
        <img src="../../../assets/Tatler.webp" />
    </div>
    <div className="customer__item">
        <StarIcon/>
    </div>
        <div className="customer__item">
        <img src="../../../assets/WebTheThao.webp" />
    </div>
    <div className="customer__item">
        <StarIcon/>
    </div>
        <div className="customer__item">
        <img src="../../../assets/Thu'sShow.webp" />
    </div>
    <div className="customer__item">
        <StarIcon/>
    </div>
    <div className="customer__item"></div>


 </div>);


    
    return (
        <section className="customer">
            <div className="customer__container">
                <div className="customer__title-container">
                <div className="customer__title">
                    Được tin tưởng bởi 
                </div>
                </div>

                                <Marquee gradient={false} speed={70} className="customer__marquee">

{Array(50).fill(0).map((_, i) => (
    <div key={i}>
       <MarqueeItems /> 
    </div>
))}

                                </Marquee>

            </div>
        </section>
    )
}

export default Sponsor;

