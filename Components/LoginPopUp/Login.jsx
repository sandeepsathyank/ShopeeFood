import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../src/assets/assets';

export const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div>
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "SignUp" && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

     
        <button type="submit">
          {currState === "Login" ? "Login" : "Sign Up"}
        </button>
        <p className="toggle-text">
          {currState === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span onClick={() => setCurrState(currState === "Login" ? "SignUp" : "Login")} className='s'>
            {currState === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
