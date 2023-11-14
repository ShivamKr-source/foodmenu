import React from 'react';
import './intro.css'
import img from '../../assets/NMAM Institute of Technology.jpg';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="introText">It's <br></br><span className="introName">SHREE DURGA HOSPITALITY</span></span>
            <p className="introPara">Welcome to Shree Durga canteen of NITTE.</p>
        </div>
        <img src={img} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
