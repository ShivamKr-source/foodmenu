import React from 'react'
import './about.css';
import cooking from '../../assets/cooking.png'
import diet from '../../assets/burger.png'
import jar from '../../assets/jar.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">ABOUT</span>
        <span className="skillsDesc">Our canteen is more than just a place to grab a bite. As you step into the world of flavor,<br></br> we proudly present to you the extensive menu.</span>
        <div className="skillsBars">
          <div className="skillBar">
            <img src={cooking} alt="chefs" className="skillBarImg" />
            <div className="skillBarText">
              <h2>CHEF</h2>
              <p>Welcome to the culinary realm curated by our talented chefs. Each plate is adorned with a perfect touch of flavor, meticulously prepared with a passion that aims to craft exquisite dining experiences. The seamless blend of efficiency and elegance is our signature, achieved by harmonizing simplicity and sophistication like no other.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={diet} alt="types of food" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Various types of food</h2>
              <p>Savor the delectable and mouthwatering dishes presented here with utmost care for your taste palette, all crafted with genuine fondness. Our menu boasts a delightful array of flavors, from the irresistibly flavorful to the perfectly crispy, tender bites, and the enticingly spicy. Each dish is an invitation to a world of satisfaction, leaving you with an insatiable craving for more.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={jar} alt="low cost" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Cost Friendly</h2>
              <p>The abundant variety of food comes in many ranges and incredibly economical. The low cost and modest prices will undoubtedly beckon you to return for more of these scrumptious dishes.</p>
            </div>
          </div>   
        </div>
    </section>
  );
}

export default Skills;
