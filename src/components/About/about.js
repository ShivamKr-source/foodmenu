import React from 'react'
import './about.css';
import cooking from '../../assets/cooking.png'
import diet from '../../assets/burger.png'
import jar from '../../assets/jar.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">ABOUT</span>
        <span className="skillsDesc">ABOUT THE CANTEEN (FILL THESE)</span>
        <div className="skillsBars">
          <div className="skillBar">
            <img src={cooking} alt="webDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>CHEF</h2>
              <p>About the chefs </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={diet} alt="art" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Various types of food</h2>
              <p>About various types of food</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={jar} alt="Machine Learning" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Cost Friendly</h2>
              <p>low cost , high quality foods</p>
            </div>
          </div>   
        </div>
    </section>
  );
}

export default Skills;
