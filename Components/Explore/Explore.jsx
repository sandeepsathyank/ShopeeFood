import React from 'react';
import './Explore.css';
import { menu_list } from '../../src/assets/assets.js';

const Explore = ({ category, setCategory }) => {
  return (
    <div>
      <h4 className="head">Menu</h4>
      <div className="explore">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory(prev =>
                prev == item.menu_name ? "all" : item.menu_name
              )
            }
            className={`menu-item ${category === item.menu_name && "active"}`} 
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <h3>{item.menu_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
