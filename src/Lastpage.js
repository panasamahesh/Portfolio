import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import './Lastpage.css';

const Lastpage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.send(
            'service_tsrkawb',           // ← Your Service ID
            'template_aepoxdi',          // ← Change this
            {
                name: formData.name,
                email: formData.email,
                message: formData.message
            },
            'NHu0JrImdcqTnszg9'            // ← Change this
        )
        .then(() => {
            alert("✅ Message sent successfully! I'll reply soon.");
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error(error);
            alert("❌ Failed to send. Please try again later.");
        })
        .finally(() => setIsSending(false));
    };

    return (
        <section className='contact-page' id="contact">
            <div className='contact-container'>
                {/* Left Side */}
                <div className='contact-info'>
                    <h1 className='contact-title'>Let's Connect</h1>
                    <p className='tagline'>I'm always open to new opportunities and interesting conversations.</p>

                    <div className='contact-details'>
                        <p><CiMail /> maheshpanasa7595@gmail.com</p>
                        <p>+91-7995257595</p>
                    </div>

                    <div className='social-links'>
                        <a href='https://github.com/panasamahesh' target='_blank' rel='noopener noreferrer'>
                            <FaGithub /> GitHub
                        </a>
                        <a href='https://www.linkedin.com/in/mahesh-panasa-0b3b2b232' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href='https://www.instagram.com/mahi_mahesh_0000/' target='_blank' rel='noopener noreferrer'>
                            <FaInstagram /> Instagram
                        </a>
                    </div>

                               <a
  href={`${process.env.PUBLIC_URL}/PANASA_MAHESH_Resume.pdf`}
  download="PANASA_MAHESH_Resume.pdf"
  className="download-cv"
>
  Download CV ↓
</a>
                </div>

                {/* Form */}
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Your Name' 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Your Email' 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea 
                            name='message' 
                            placeholder='Your Message' 
                            rows="6"
                            required 
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type='submit' disabled={isSending}>
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <footer className='footer'>
                © 2025 Panasa Mahesh. All Rights Reserved.
            </footer>
        </section>
    );
};

export default Lastpage;