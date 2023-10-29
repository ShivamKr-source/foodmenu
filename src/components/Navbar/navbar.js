import React ,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/letter-s.png'
import {Link} from 'react-scroll'
import contactImage from '../../assets/contact.png'
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">MENU</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behaviour:'smooth'});
        }}>
            <img src={contactImage} alt="" className="desktopMenuImg" />Contact Me</button>

            
        <img src={menu} alt='MENU' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
        <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>ABOUT</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>MENU</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-10} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
         
    </nav>
  )
}
export default Navbar 
