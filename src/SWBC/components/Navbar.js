import React, {useState} from 'react'
import Logo from './swbc--logo.png'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import "animate.css";

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg animate__animated animate__fadeIn' : 'header animate__animated animate__fadeIn'} >
           
           <Link to='/'>  <img src={Logo} alt="-logo" className="logo--SWBC"></img></Link> 
         
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link className="h--"to='/'>Home</Link>
               </li>
               <li>
                   <Link className="h--" to='/careers'>Careers</Link>
               </li>
               <li>
                   <Link className="h--" to='/services'>Services</Link>
               </li>
               <li>
                   <Link className="h--" to='/contact'>Contact</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}

export default Navbar
