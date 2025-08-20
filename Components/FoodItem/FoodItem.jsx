import React from 'react'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import './FoodItem.css'
import { useState } from 'react'
import { useContext } from 'react'
import { assets } from '../../src/assets/assets'
import { StoreContext } from '../../src/Context/StoreContext'

const FoodItem = ({id,name,description,price,image}) => {
  const {addToCart,RemoveFromCart,CartItems}=useContext(StoreContext)
  const [ItemCount, setItemCount] = useState(0)
  return (
    <div className='food-item'>
        <div className='food-item-image-container'>
          <img src={image}  alt={name} className='food-item-image'/>
          {!CartItems[id]? 
          <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>:
           <div className='food-item-counter'>
            <img className='plus' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            <p >{CartItems[id] || 0}</p>
            <img className='minus' src={assets.remove_icon_red} onClick={()=>RemoveFromCart(id)} alt="" />
            </div>}
        </div>
        <div className='food-item-info'>
          <div className='food-item-name-rating'>
            <p >{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'>{price} ₹</p>
        </div>
    </div>
  )
}

export default FoodItem

