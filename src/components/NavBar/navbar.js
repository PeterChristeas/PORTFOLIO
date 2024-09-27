import React from 'react'
import './navbar.css'
import Logo from '../../components/Logo.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className='Logo'/>  
      <div className="desktopmenu">
    <Link className="desktopMenuListItem">Home</Link>
    <Link className="desktopMenuListItem">Services</Link>
    <Link className="desktopMenuListItem">About me</Link> 
    <Link className="desktopMenuListItem">Projects</Link>
    <Link className="desktopMenuListItem">Contact me</Link>
      </div>
      <button className="deskotopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>

  )
}

export default Navbar

