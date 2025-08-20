import React from 'react'
import './Navbar.css'
import logo from '../../src/assets/logo.png'
import cart from '../../src/assets/basket_icon.png'
import search from '../../src/assets/search_icon.png'
import profile from '../../src/assets/profile_icon.png'
import { Link } from 'react-router-dom'
import {StoreContext} from '../../src/Context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Explore from '../Explore/Explore'

const Navbar = ({setShowLogin}) => {
  const navigate=useNavigate()
  const {GetCount}=useContext(StoreContext)
 
  return (

      <nav className="navbar">
      <div className="navbar-logo-section"><Link to={"/"}>
        <img onClick={()=>setShowLogin(false)} src={logo} alt="logo" className="navbar-logo" /> 
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-item"onClick={()=>navigate('/')}>
          Home
        </li>
        <li className="navbar-menu-item"onClick={()=>navigate('/menu')}>Menu</li>
        <li className="navbar-menu-item"onClick={()=>navigate('/footer')}>Contact Us</li>
        <li className="navbar-menu-item"onClick={()=>navigate('/orderDetails')}>Orders</li>
      </ul>
      <div className="navbar-icons">
        <span className="navbar-icon"><Link to={"/cart"}><img src={cart} alt="cart" />
        {GetCount() > 0 && <span className="cart-count">{GetCount()}</span>}
        </Link></span>
        <span className="navbar-icon"><img src={search} alt="search" /></span>
        <span className="navbar-icon"><img onClick={()=>setShowLogin(true)} src={profile} alt="profile" /></span>
      </div>
    </nav>
  )
} 


export default Navbar 