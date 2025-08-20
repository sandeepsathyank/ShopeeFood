import React from 'react'
import './Footer.css'
import { assets } from '../../src/assets/assets'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
      const navigate=useNavigate()
  return (
    <div className='Footer'>
        <div className='left'>
            <img src={assets.logo} alt="logo" />
        </div>

        <div className='center'>
                <ul className='line'>
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li onClick={()=>navigate('/menu')}>Menu</li>
                    <li onClick={()=>navigate('/')}>About Us</li>
                    <li onClick={()=>navigate('/')}>Contact Us</li>
                    <li onClick={()=>navigate('/')}>Privacy Policy</li>
                    <li onClick={()=>navigate('/')}>Terms & Conditions</li>
                </ul>
          
            <h2>Shopee Food</h2>
            <p>Copyright © 2023 Shopee Food</p>
        </div>

        <div className="right">
        <div className="icon-row">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        <div className="store-row">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
        </div>

    </div>
  )
}

export default Footer