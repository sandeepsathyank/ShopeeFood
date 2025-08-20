import { useState } from 'react'
import {Routes, Route } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'
import './App.css'
import Header from '../Components/Header/Header'
import Home from '../Pages/Home/Home';
import Cart from '../Pages/Cart/Cart';
import PlaceOrder from '../Pages/PlaceOrder/PlaceOrder';
import Login from '../Components/LoginPopUp/Login';
import OrderDetails from '../Components/OrderDetails/OrderDetails';
import Footer from '../Components/Footer/Footer';
import Menu from '../Pages/Menu/Menu';

function App() {

const [ShowLogin, setShowLogin] = useState(false)
  return (
    <div className='app'>
     {ShowLogin? <Login setShowLogin={setShowLogin}/>:<>
        
     </>}
     <Navbar setShowLogin={setShowLogin}/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/placeOrder' element={<PlaceOrder/>}/>
    <Route path='/orderDetails' element={<OrderDetails/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/footer' element={<Footer/>}/>

    
    </Routes>
    </div>
  )
}


export default App
