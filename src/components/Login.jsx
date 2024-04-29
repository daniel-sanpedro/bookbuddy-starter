// /login and /register (This could alternatively be displayed in the profile instead of living in its own route.)

import React, { useState } from "react";
import person_icon from "../assets/login/person_icon.png";
import email_icon from "../assets/login/email_icon.png";
import secure_icon from "../assets/login/secure_icon.png";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const Login = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const loginEndpoint =
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login";

    try {
      const response = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }

      localStorage.setItem("token", data.token); // Store the token

      if (onLoginSuccess) {
        onLoginSuccess(data);
      }

      navigate("/account"); // Use navigate to redirect to the account page
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={person_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={secure_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          ></div>
          <div
            className={action === "Sign up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
