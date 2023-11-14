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

                  <div className='ListGroups'>
                    <a href="categories/Dosa.html" className='CL'>DOSA</a>
                    <a href="categories/gravy.html" className='CL'>GRAVYS</a>
                    <a href="categories/pulao.html" className='CL'>MEAL AND PULAO</a>
                  </div>

                  <div className='ListGroups'>
                    <a href="categories/Snacks.html" className='CL'>SNACKS</a>
                    <a href="categories/Chat.html" className='CL'>CHAATS</a>
                    <a href="categories/Chinese.html" className='CL'>CHINESES</a>
                    <a href="categories/SouthIndian.html" className='CL'>SOUTH INDIAN SNACKS</a>
                  </div>

                  <div className="ListGroups">
                    <a href="categories/Sweets.html" className='CL'>SWEETS</a>
                    <a href="categories/Juices.html" className='CL'>JUICES</a>
                    <a href="categories/Icecream.html" className='CL'>ICE CREAM</a>
                    <a href="categories/Milkshakes.html" className='CL'>MILK SHAKES</a>
                  </div>
                    
                </div>
            </div>
            
        </section>
      
    </div>
  )
}

export default Menu
