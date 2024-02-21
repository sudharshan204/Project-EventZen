import React, { useState } from 'react';
import './ContactUs.css'; 
import { useNavigate } from 'react-router-dom';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const navigate=useNavigate();
    const alert1 = () =>
    {
        alert("SUBMITED!!")
        navigate('/h')
    }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

  return (
    <div>
        <center>
      <header class="header">
        <h1>Contact Us</h1>
      </header>
      </center>

      <section className="section">
          <center>
        <form>
          <div className='input'>
          <label>
            
            <input type="text" name="name" placeholder='NAME' value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            
            <input type="email" name="email" placeholder='EMAIL' value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            
            <input type="text" name="subject" placeholder='SUBJECT' value={formData.subject} onChange={handleChange} required />
          </label>

          <label>
        
            <input type="text" name="subject" placeholder='Type your requirements here' onChange={handleChange} required />

            {/* <textarea name="message" value={formData.message} onChange={handleChange} required /> */}
          </label>
          </div>
<center>
          <button onClick={alert1}>Submit</button>
          </center>
        </form>
        </center>
      </section>
    </div>
  );
}

export default ContactUs;
