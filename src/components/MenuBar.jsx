import React from 'react'
import '../styles/menu.css'
import { Link } from 'react-scroll'

export default function MenuBar({ menuClicked, setMenuClicked }) {

    return (
        <div className={`menuBar ${menuClicked ? '' : 'hideMenu'}`}>
            <div className="menuLinks">

                <Link to='home' activeClass='active' spy={true} smooth={500} offset={-100} className='links' onClick={() => { setMenuClicked(!menuClicked) }}>HOME</Link>
                <Link to='about' activeClass='active' spy={true} smooth={500} offset={-95} className='links' onClick={() => { setMenuClicked(!menuClicked) }} >ABOUT ME</Link>
                <Link to='skills' activeClass='active' spy={true} smooth={500} offset={-95} className='links' onClick={() => { setMenuClicked(!menuClicked) }} >SKILLS</Link>
                <Link to='project' activeClass='active' spy={true} smooth={500} offset={-100} className='links' onClick={() => { setMenuClicked(!menuClicked) }}>ROJECTS</Link>
                <Link to='contact' activeClass='active' spy={true} smooth={500} offset={-90} className='links' onClick={() => { setMenuClicked(!menuClicked) }}>CONTACT ME</Link>
            </div>
        </div>

    )
}
