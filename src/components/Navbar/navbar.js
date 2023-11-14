import React ,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/Nitte-Trust-Logo.webp'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">ABOUT</Link>
            <Link activeClass='active' to='menu' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">MENU</Link>
        </div>

        <img src={menu} alt='MENU' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>ABOUT</Link>
            <Link activeClass='active' to='menu' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>MENU</Link>
        </div>
         
    </nav>
  )
}
export default Navbar 
