import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const RegisterForm: React.FC = () => {
    const API_URL = "https://contact.metapress.ai/api.php";
    interface PostQuery {
        name: string;
        email: string;
        phone: string;
        company: string;
        position: string;
        note: string;
    }
    const [formData, setFormData] = useState<PostQuery>({
              name: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            note: '',
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const postData = async () => {
        //Validate
        if (!formData.name || !formData.email || !formData.company) {
            toast.error('Vui lòng điền đầy đủ thông tin bắt buộc');
            return;
        }
        if (formData.email && !formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            toast.error("Email không đúng cú pháp")
            return;
        }

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                toast.error("Bị lỗi khi gửi!")
                 console.log('Error:')
            } else {
                  toast.success("Gửi thông tin thành công!");
                  const data = await res.json()
                      console.log(data);
            }

        } catch (err) {
            const errorMessage = err instanceof Error ? err.
            message: 'Unknown error';
            console.log('Error:', errorMessage);
            toast.error("Bị lỗi khi gửi!")

        } finally {
        }
    }
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

    <input type="text" className="item"  placeholder="Họ và tên*" name="name" value={formData.name} onChange = {handleInputChange}/>

    <div className="item-container">
    <input type="text" className="item itemSmall" placeholder="Email*" name="email" value={formData.email} onChange = {handleInputChange}/>

            <input type="text" className="item itemSmall" placeholder="Số điện thoại" name="phone" value={formData.phone} onChange = {handleInputChange}/>

    </div>
        <input type="text" className="item" placeholder="Tên doanh nghiệp*" name="company" value={formData.company} onChange = {handleInputChange}/>
            <input type="text" className="item" placeholder="Chức vụ của bạn" name="position" value={formData.position} onChange = {handleInputChange}/>
                <input type="text" className="item" placeholder="Ghi chú" style={{height: '126px'}} name="note" value={formData.note} onChange = {handleInputChange}/>
    <div className="button" onClick={postData}>
        <div className="text">
            Gửi thông tin
        </div>
        <div className="arrow">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
        </div>
    </div>
<ToastContainer 
  position="top-right" 
  autoClose={3000}
  style={{ top: '100px' }}
/>
        </div>
    </div>
</div>
    </section>
)
}
export default RegisterForm;