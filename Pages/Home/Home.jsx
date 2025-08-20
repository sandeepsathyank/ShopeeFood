import React, { useContext, useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/Explore/Explore'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Footer from '../../Components/Footer/Footer'
import { food_list } from '../../src/assets/assets'


const Home = ({showLogin}) => {
  const [category, setCategory] = useState("all")

   useEffect(() => {
      if (showLogin) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto"; 
      }
   }, [showLogin]);
  return (
    <div>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Footer/>
    </div>
  )
} 

export default Home