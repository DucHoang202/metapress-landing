const RegisterForm: React.FC = () => {
return (
    <section className="reg_form">
<div className="reg_form__container">
    <div className="reg_form__content">
        <div className="reg_form__left">
<div className="title">
    Liên hệ <br></br>với MetaPress
</div>
<div className="subtitle">
    Ứng dụng AI để tòa soạn vận hành linh hoạt hơn, tiết kiệm hơn và sản xuất nội dung nhanh hơn mỗi ngày.
</div>
<div className="contact-container">
    <div className="contact">
        Hotline:    <span className="contact--gray"> 094 104 9400</span>
    </div>
     <div className="contact">
        Email:    <span className="contact--gray">    contact@metapress.ai</span>
    </div>
</div>

        </div>
        <div className="reg_form__right">

    <input type="text" className="item" placeholder="Họ và tên*"/>

    <div className="item-container">
    <input type="text" className="item itemSmall" placeholder="Email*" />

            <input type="text" className="item itemSmall" placeholder="Số điện thoại" />

    </div>
        <input type="text" className="item" placeholder="Tên doanh nghiệp*"/>
            <input type="text" className="item" placeholder="Chức vụ của bạn"/>
                <input type="text" className="item" placeholder="Ghi chú" style={{height: '126px'}}/>
    <div className="button">
        <div className="text">
            Gửi thông tin
        </div>
        <div className="arrow">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
        </div>
    </div>
        </div>
    </div>
</div>
    </section>
)
}
export default RegisterForm;