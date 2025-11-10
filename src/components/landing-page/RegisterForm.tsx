import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

interface PostQuery {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  note: string;
}

interface RegisterFormData {
  section: string;
  title: string;
  subtitle: string;
  contact: {
    hotline_label: string;
    hotline_value: string;
    email_label: string;
    email_value: string;
  };
  form: {
    placeholders: {
      name: string;
      email: string;
      phone: string;
      company: string;
      position: string;
      note: string;
    };
    button: string;
  };
  toast: {
    error_required: string;
    error_email: string;
    error_submit: string;
    success_submit: string;
  };
}

const RegisterForm: React.FC = () => {
  const API_URL = "https://contact.metapress.ai/api.php";
  const [registerData, setRegisterData] = useState<RegisterFormData | null>(null);
  const [formData, setFormData] = useState<PostQuery>({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    note: '',
  });

  useEffect(() => {
    // Lấy dữ liệu từ (window as any).language
    const languageData = (window as any).language;
    if (languageData?.data) {
      // Tìm section có section === "register_form"
      const register = languageData.data.find((item: any) => item.section === "register_form");
      if (register) {
        setRegisterData(register);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const postData = async () => {
    if (!registerData) return;

    // Validate
    if (!formData.name || !formData.email || !formData.company) {
      toast.error(registerData.toast.error_required);
      return;
    }
    if (formData.email && !formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      toast.error(registerData.toast.error_email);
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
        toast.error(registerData.toast.error_submit);
        console.log('Error:');
      } else {
        toast.success(registerData.toast.success_submit);
        const data = await res.json();
        console.log(data);
        // Reset form sau khi gửi thành công
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          note: '',
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      console.log('Error:', errorMessage);
      toast.error(registerData.toast.error_submit);
    }
  };

  if (!registerData) {
    return null;
  }

  return (
    <section className="reg_form">
      <div className="reg_form__container">
        <div className="reg_form__content">
          <div className="reg_form__left">
            <div className="title" dangerouslySetInnerHTML={{ __html: registerData.title }} />
            <div className="subtitle">{registerData.subtitle}</div>
            <div className="contact-container">
              <div className="contact">
                {registerData.contact.hotline_label}:    
                <span className="contact--gray"> {registerData.contact.hotline_value}</span>
              </div>
              <div className="contact">
                {registerData.contact.email_label}:    
                <span className="contact--gray"> {registerData.contact.email_value}</span>
              </div>
            </div>
          </div>
          <div className="reg_form__right">
            <input 
              type="text" 
              className="item" 
              placeholder={registerData.form.placeholders.name}
              name="name" 
              value={formData.name} 
              onChange={handleInputChange}
            />

            <div className="item-container">
              <input 
                type="text" 
                className="item itemSmall" 
                placeholder={registerData.form.placeholders.email}
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                className="item itemSmall" 
                placeholder={registerData.form.placeholders.phone}
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange}
              />
            </div>
            
            <input 
              type="text" 
              className="item" 
              placeholder={registerData.form.placeholders.company}
              name="company" 
              value={formData.company} 
              onChange={handleInputChange}
            />
            
            <input 
              type="text" 
              className="item" 
              placeholder={registerData.form.placeholders.position}
              name="position" 
              value={formData.position} 
              onChange={handleInputChange}
            />
            
            <textarea 
              className="item" 
              placeholder={registerData.form.placeholders.note}
              style={{ height: '126px', resize: 'vertical' }} 
              name="note" 
              value={formData.note} 
              onChange={handleInputChange}
            />
            
            <div className="button" onClick={postData}>
              <div className="text">{registerData.form.button}</div>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#FCF5FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
  );
};

export default RegisterForm;