import React from 'react'
import person_icon from "../assets/person_icon.png"
import email_icon from "../assets/email_icon.png"
import secure_icon from "../assets/secure_icon.png"
import './LoginSignup.css'


const LoginSignup = () => {

  
  return (
    <div>
      <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
            <div className="inputs">
            <div className="input">
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={secure_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
