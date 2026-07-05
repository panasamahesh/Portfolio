import React from 'react';
import flight from './download.jpg';
import student from './download.png';
import atm from './download (1).jpg';
import photography from './images.jpg';
import nalinsoftlogo from './imagenewupdated.jpg';
import './Page4.css';

const Page4 = () => {
    return (
        <main className='page4head' id="projects">
            <div className='page4'>
                <h1>My Projects</h1>
                
                <section className='mywork'>
                    {/* Project 1 */}
                    <div className='project-card'>
                        <img src={flight} alt='Flight Management System' />
                        <div className='matter'>
                            <h3>Flight Management System</h3>
                            <p>Comprehensive system for flight scheduling, ticket booking, passenger management, and airline operations.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className='project-card'>
                        <img src={student} alt='Student Management System' />
                        <div className='matter'>
                            <h3>Student Management System</h3>
                            <p>Full-featured database system to manage student records, attendance, and academic information efficiently.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className='project-card'>
                        <img src={atm} alt='ATM Management System' />
                        <div className='matter'>
                            <h3>ATM Management System</h3>
                            <p>Secure and efficient system for managing ATM transactions, monitoring, and banking operations.</p>
                        </div>
                    </div>

                    {/* New - Live Photography */}
                    <div className='project-card'>
                        <img src={photography} alt='Live Photography Website' />
                        <div className='matter'>
                            <h3>Live Photography Website</h3>
                            <p>Modern photography portfolio with QR code integration for easy photo & video sharing at events.</p>
                            <a href="https://vedhamixingunitlivephotography-com.lovable.app/" target="_blank" rel="noopener noreferrer">
                                Visit Live →
                            </a>
                        </div>
                    </div>

                    {/* New - Nalinsoft */}
                    <div className='project-card'>
                        <img src={nalinsoftlogo} alt='Nalinsoft Website' />
                        <div className='matter'>
                            <h3>Nalinsoft Website</h3>
                            <p>Professional business website showcasing ERP, SAP, and Digital Transformation services.</p>
                            <a href="https://panasamahesh.github.io/NalinsoftWebsite/" target="_blank" rel="noopener noreferrer">
                                Visit Live →
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className='seemore'>
                <h2>
                    <a href="https://github.com/panasamahesh" target="_blank" rel="noopener noreferrer">
                        See More on GitHub →
                    </a>
                </h2>
            </div>
        </main>
    );
};

export default Page4;