import React from 'react';
import profile from '../assets/profile.png';
import '../styles/home.css';
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <div className='home' id='home'>
            <div className="mainContent">
                <h1 className='heading1'>HAY! I'M JAZAB</h1>
                <h1 className='heading2'>I'M A DEVELOPER</h1>
                <p>As a front-end developer, I'm passionate about crafting exceptional web applications
                    that not only looks beautiful but also improves the lives of those around me.
                    {/* I believe in the power of technology to bridge cultures and create positive change. */}
                    </p>

                <div className="homeButtons">
                    <button className='btn homeBtn'>
                        <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-90}>  GET IN TOUCH <i className="fa-solid fa-arrow-right-long"></i></Link>
                    </button>
                    <div className="homeIcons">
                        <a href="https://www.linkedin.com/in/jazab-ahmad-079863236/" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/jazab-ahmad-079863236/" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://github.com/Jazab1232" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="mainImage">
                <img src={profile} alt="Profile" />
            </div>
        </div>
    );
}
