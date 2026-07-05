import React, { useState } from 'react';
import './Page2.css';
import { FaLaptop, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Page2 = () => {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className='about-page' id="about">
            <div className='about-container'>
                <div className='about-content'>
                    <h1 className='about-title'>About Me</h1>
                    
                    <p className='about-description'>
                        My name is <strong>Panasa Mahesh</strong>, and I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                        I specialize in building responsive, user-friendly, and scalable web applications using modern tools like React.js, Java, Spring Boot, and MySQL.
                        
                        I completed my B.Com (Computers) in 2025 and am currently pursuing MCA with a specialization in Artificial Intelligence and Machine Learning at KL University, Hyderabad. 
                        My journey into software development has been driven by a deep interest in technology and problem-solving. With hands-on experience in full-stack development and multiple real-world projects, 
                        I focus on writing clean, efficient code and delivering high-quality solutions.
                    </p>

                    {/* Tabs */}
                    <div className='tabs'>
                        <button 
                            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                            onClick={() => setActiveTab('skills')}
                        >
                            <FaLaptop /> Skills
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                            onClick={() => setActiveTab('experience')}
                        >
                            <FaBriefcase /> Experience
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            <FaGraduationCap /> Education
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className='tab-content'>
                        {activeTab === 'skills' && (
                            <div className='skills-content'>
                                <h3>Frontend</h3>
                                <p>HTML5, CSS3, JavaScript (ES6+), React.js</p>
                                
                                <h3>Backend</h3>
                                <p>Java SE & Java EE, Spring Framework, Hibernate, JPA</p>
                                
                                <h3>Database</h3>
                                <p>MySQL, PL/SQL</p>
                                
                                <h3>Tools & Others</h3>
                                <p>OOPS, Design Patterns, Maven, Git, GitHub, Postman</p>
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div className='experience-content'>
                                <h3>Experience</h3>
                                <div className='exp-item'>
                                    <p><strong>Full Stack Developer</strong> - Grahith Software Solutions</p>
                                    <p>1+ Year of experience in SAP Maintenance & Full Stack Development</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'education' && (
                            <div className='education-content'>
                                <div className='edu-item'>
                                    <span className='year'>Pursuing</span>
                                    <h4>MCA (Master of Computer Applications)</h4>
                                    <p>KL University, Hyderabad</p>
                                </div>

                                <div className='edu-item'>
                                    <span className='year'>2017 — 2025</span>
                                    <h4>B.Com (Computers)</h4>
                                    <p>CGPA: 5.0 / 10</p>
                                    <p>Dr. B.R. Ambedkar Open University, Nalgonda</p>
                                </div>

                                <div className='edu-item'>
                                    <span className='year'>2018 — 2020</span>
                                    <h4>Diploma in Multi Purpose Health Assistant (DMPHA)</h4>
                                    <p>Ravindranath Paramedical College, Nalgonda</p>
                                    <p>Clinical Experience - Govt Hospital, Nalgonda (2 YEARS include total)</p>
                                </div>

                                <div className='edu-item'>
                                    <span className='year'>2015 — 2017</span>
                                    <h4>CEC (Commerce)</h4>
                                    <p>CGPA: 5.8 / 10</p>
                                    <p>Govt Junior College, Nalgonda</p>
                                </div>

                                <div className='edu-item'>
                                    <span className='year'>2014 — 2015</span>
                                    <h4>SSC</h4>
                                    <p>CGPA: 6.2 / 10</p>
                                    <p>ZPHS Kanchanapally</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page2;