import React from 'react'
import about from '../assets/profile.png'
import '../styles/about.css'
import { Link } from 'react-scroll'
export default function About() {
    return (
        <div className='about' id='about'>
            <div className="aboutImg">
                <div className="aboutCard">
                    <img src={about} alt="" />
                </div>
            </div>
            <div className="aboutContent">
                <p className='aboutHeading'>ABOUT ME</p>
                <h1>I AM AVAILABLE FOR <br /> <span>  WEB APP  </span> PROJECTS</h1>

                <p>I'm a passionate front-end developer specializing in crafting user-centric
                    interfaces using React.js. I leverage the power of this dynamic library to
                    build clean, responsive, and performant web applications that engage users
                    and bring ideas to life.</p>
                <button className='btn'>

                    <Link to='contact' activeClass='active' spy={true} smooth={500} offset={-90}>GET IN TOUCH <i className="fa-solid fa-arrow-right-long"></i></Link></button>
            </div>
        </div>
    )
}
