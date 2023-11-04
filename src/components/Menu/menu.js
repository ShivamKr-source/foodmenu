import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div>
        <section id='menu'>
            <span className='menuTitle'>CANTEEN's MENU</span>
            <span classname='categories'>CATEGORIES</span>
            <div className='categoriesLists'>
                <div className="categoriesList">
                    <button className="CL">CHAAT</button>
                    <button className="CL">JUICES</button>
                    <button className="CL">CHINESE</button>
                    <button className="CL">SNACKS</button>
                    <button className="CL">SWEETS</button>
                    <button className="CL">MILK SHAKES</button>
                    <button className="CL">ICE CREAM</button>
                    <button className="CL">SOUTH_INDIAN SNACKS</button>
                    <button className="CL">DOSA</button>
                    <button className="CL">MEAL & PULAO</button>
                    <button className="CL">SPECIAL DOSA</button>
                </div>
            </div>
            
        </section>
      
    </div>
  )
}

export default Menu
