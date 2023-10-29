import React from 'react';
import './intro.css'
import img from '../../assets/nitte1.png';
//import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">NITTE</span>
            <span className="introText">It's <br></br><span className="introName">SHREE DURGA HOSPITALITY</span></span>
            <p className="introPara">NITTE KA CANTEEN HAI APUN</p>
        </div>
        <img src={img} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
