import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../src/Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [filteredList, setFilteredList] = useState(food_list);

  useEffect(() => {
    if (category === "all") {
      setFilteredList(food_list);
    } else {
      setFilteredList(
        food_list.filter((item) => item.category === category)
      );
    }
  }, [category, food_list]); 

  return (
    <div className="display">
      <h4 className="h4">{category == "all" ? "All Dishes" : category}</h4>
      <div className="displaylist">
        {filteredList.map((item, index) => (
          <FoodItem
            key={index} 
            id={item._id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
