import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import profile from './hY1IW.jpg';
import './Header.css';

const Header = () => {
    return (
        <main className='main'>
            {/* Navigation */}
            <nav className='navbar'>
                <div className='nav-container'>
                    <div className='nav-links'>
                        <Link to="home" smooth={true} duration={800} offset={-80}>Home</Link>
                        <Link to="about" smooth={true} duration={800} offset={-80}>About</Link>
                        <Link to="services" smooth={true} duration={800} offset={-80}>Services</Link>
                        <Link to="projects" smooth={true} duration={800} offset={-80}>Projects</Link>
                        <Link to="contact" smooth={true} duration={800} offset={-80}>Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className='hero' id="home">
                <div className='hero-content'>
                    <div className='text-section'>
                        <h1>
                            Hi, My Name is <span className='name'>PANASA MAHESH</span>
                        </h1>
                        <h2>I am a passionate</h2>
                        <TypeAnimation
                            sequence={[
                                "FRONTEND DEVELOPER...!", 4000,
                                "WEB DESIGNER...!", 4000,
                                "FULL STACK DEVELOPER...!", 4000,
                            ]}
                            speed={60}
                            repeat={Infinity}
                            wrapper="h3"
                            className="type-text"
                        />
                        <p className='subtitle'>
                            Crafting beautiful and functional web experiences
                        </p>
                    </div>

                    <div className='image-section'>
                        <div className='image-wrapper'>
                            <img src={profile} alt="Panasa Mahesh" className='profile-img' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Header;