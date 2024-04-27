// /login and /register (This could alternatively be displayed in the profile instead of living in its own route.)

import React from 'react'
import person-icon from "../assets/person-icon"
import email-icon from "../assets/email-icon"
import password-icon from "../assets/password-icon"



const Login = () => {
  return (
    <div>
      <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
            <div className="inputs">
            <div className="input">
                    <img src={person-icon} alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src={email-icon} alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password-icon} alt="" />
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Clock Here!</span></div>
        <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
        </div>
      </div>
    </div>
  )
}

export default Login
