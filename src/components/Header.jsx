import '../styles/header.css'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png';

export default function ({ menuClicked, setMenuClicked }) {
  function toggleMenu() {
    setMenuClicked(!menuClicked)
  }

  return (

    <div className='header'>
      <div className='logo' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to='home' activeClass='active' spy={true} smooth={500} offset={-100} >
          <img className='logoImg' src={logo} alt=""  /></Link>
        <Link to='home' activeClass='active' spy={true} smooth={500} offset={-100} >
          <h1>JAZAB</h1>
        </Link>
      </div>
      <div className="navLinks">

        <Link to='home' activeClass='active' spy={true} smooth={500} offset={-100} className='links'>HOME</Link>
        <Link to='about' activeClass='active' spy={true} smooth={500} offset={-95} className='links' >ABOUT ME</Link>
        <Link to='skills' activeClass='active' spy={true} smooth={500} offset={-95} className='links'>SKILLS</Link>
        <Link to='project' activeClass='active' spy={true} smooth={500} offset={-100} className='links'>ROJECTS</Link>
        <Link to='contact' activeClass='active' spy={true} smooth={500} offset={-90} className='links'>CONTACT ME</Link>
      </div>
      <button className='btn navBtn' ><Link to='contact' activeClass='active' spy={true} smooth={500} offset={-90}>LET'S TAKL</Link></button>
      <div className="menu" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

    </div>

  )
}
