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
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const loginEndpoint =
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com//api/users/login";

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

      localStorage.setItem("token", data.token);

      if (onLoginSuccess) {
        onLoginSuccess(data);
      }

      navigate("/account");
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleLogin} onChange={handleChange}>
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
