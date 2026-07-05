import React from 'react';
import { FaCss3, FaJava, FaDatabase } from 'react-icons/fa';
import './Page3.css';

const Page3 = () => {
    const handleLearnMore = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className='services-page' id="services">
            <div className='services-header'>
                <h1>My Services</h1>
                <p>Building end-to-end web solutions with passion and precision</p>
            </div>

            <div className='services-container'>
                {/* Frontend Card */}
                <div className='service-card'>
                    <div className='icon-wrapper'>
                        <FaCss3 className='service-icon' />
                    </div>
                    <h2>Frontend Development</h2>
                    <p>
                        I’m a front-end developer passionate about creating clean, responsive, and user-friendly 
                        web interfaces. With expertise in HTML, CSS, JavaScript, and React, I turn design concepts 
                        into fast, interactive, and visually appealing websites.
                    </p>
                    <button 
                        className='learn-more-btn'
                        onClick={() => handleLearnMore('https://en.wikipedia.org/wiki/Front-end_web_development')}
                    >
                        Learn More
                    </button>
                </div>

                {/* Backend Card */}
                <div className='service-card'>
                    <div className='icon-wrapper'>
                        <FaJava className='service-icon' />
                    </div>
                    <h2>Backend Development</h2>
                    <p>
                        I build robust, scalable, and secure server-side systems using Java, Spring Boot, 
                        RESTful APIs, and databases. Focused on clean architecture, performance optimization, 
                        and reliable data management.
                    </p>
                    <button 
                        className='learn-more-btn'
                        onClick={() => handleLearnMore('https://en.wikipedia.org/wiki/Backend')}
                    >
                        Learn More
                    </button>
                </div>

                {/* Full Stack Card */}
                <div className='service-card'>
                    <div className='icon-wrapper'>
                        <FaDatabase className='service-icon' />
                    </div>
                    <h2>Full Stack Web Development</h2>
                    <p>
                        End-to-end web application development. From modern, responsive frontends to powerful 
                        and scalable backends — I deliver complete, high-quality web solutions tailored to your needs.
                    </p>
                    <button 
                        className='learn-more-btn'
                        onClick={() => handleLearnMore('https://en.wikipedia.org/wiki/Web_development')}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page3;