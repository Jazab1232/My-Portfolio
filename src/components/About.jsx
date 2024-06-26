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
                <h1>I AM AVAILABLE FOR <br /> <span>  UI UX DESIGN </span> <br />PROJECTS</h1>

                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                    below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
                    Bonorum et Malorum by Cicero are also reproduced in their exact original
                    form, accompanied by English versions from the 1914 translation by H.
                    Rackham.</p>
                <button className='btn'>

                    <Link to='contact' activeClass='active' spy={true} smooth={500} offset={-90}>GET IN TOUCH <i className="fa-solid fa-arrow-right-long"></i></Link></button>
            </div>
        </div>
    )
}
