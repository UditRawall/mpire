import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Input from "../Input/Inputs";
import { useNavigate } from "react-router-dom";

const Login = ({ setisLogedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginWithGmailHandler = () => {
    console.log("Login with Google");
  };

  const handleEmailChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setFormData({
      ...formData,
      password: newPassword,
    });
    setShowPassword("")
  };

  const directToSignup = () => {
    setisLogedIn(false);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
  }
  async function loginsubmitHandler() {
    try {
      debugger;
      const response = await axios.post('http://mpirebackend.eba-cnyr2zti.ap-south-1.elasticbeanstalk.com/login', {
        email: formData.email,
        password: formData.password
      });

      const isLoggedIn = response.data.user.is_emailverified;
      if(!isLoggedIn){
        navigate('/Login');
        
      }
      // Handle the response data as needed
      console.log('Response:', response.data);
      // return response.data;
    } catch (error) {
      debugger;
      if(error.response.data.error==="User Not Found"){
        alert("user not found");
        directToSignup();
      }
      // Handle errors
      console.error('Error:', error.message);
    }
  }

  return (
    <div className="Login">
      <h2 style={{ color: "white", display: "flex" }}>Log in</h2>
      <button className="Login-Gmail" onClick={loginWithGmailHandler}>
        {/* <FontAwesomeIcon icon="fa-brands fa-google" style={{color: "#ffffff",}} /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path
            d="M20.8963 9.62294H20.1243V9.58317H11.4993V13.4165H16.9154C16.1252 15.648 14.002 17.2498 11.4993 17.2498C8.32391 17.2498 5.74935 14.6753 5.74935 11.4998C5.74935 8.3244 8.32391 5.74984 11.4993 5.74984C12.9651 5.74984 14.2986 6.3028 15.314 7.20602L18.0246 4.49538C16.3131 2.90023 14.0236 1.9165 11.4993 1.9165C6.20695 1.9165 1.91602 6.20744 1.91602 11.4998C1.91602 16.7922 6.20695 21.0832 11.4993 21.0832C16.7917 21.0832 21.0827 16.7922 21.0827 11.4998C21.0827 10.8573 21.0166 10.23 20.8963 9.62294Z"
            fill="#fff"
          />
          <path
            d="M3.02148 7.03928L6.17009 9.34838C7.02205 7.23909 9.08534 5.74984 11.4999 5.74984C12.9656 5.74984 14.2992 6.3028 15.3145 7.20602L18.0252 4.49538C16.3136 2.90023 14.0241 1.9165 11.4999 1.9165C7.8189 1.9165 4.62669 3.99465 3.02148 7.03928Z"
            fill="#fff"
          />
          <path
            d="M11.5003 21.0832C13.9757 21.0832 16.2249 20.1359 17.9255 18.5953L14.9594 16.0855C13.9649 16.8418 12.7497 17.2508 11.5003 17.2498C9.00769 17.2498 6.89121 15.6604 6.09388 13.4424L2.96875 15.8502C4.55479 18.9538 7.77575 21.0832 11.5003 21.0832Z"
            fill="#fff"
          />
          <path
            d="M20.8969 9.62327H20.125V9.5835H11.5V13.4168H16.916C16.5381 14.4789 15.8572 15.4069 14.9577 16.0863L14.9591 16.0853L17.9251 18.5952C17.7153 18.7859 21.0833 16.2918 21.0833 11.5002C21.0833 10.8576 21.0172 10.2304 20.8969 9.62327Z"
            fill="#fff"
          />
        </svg>
        Log in with Google
      </button>
      <div className="Line"></div>
      <form className="Login-form" onSubmit={submitHandler}>
        <Input
          alt="Email"
          type="text"
          title="Email Here"
          placeholder="Enter your Email"
          onInputChange={handleEmailChange}
          fieldName="email"
          value={formData.email}
        />

        <div className="inputs">
          <div className="inputs-left">
            <span>Password</span>
          </div>
          <div className="input-fields" style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              required
            />
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="checkbox" />
          <span style={{ color: "white", marginTop: "-3px" }}>Remember Me</span>
        </div>
        <button
          className="Login-Gmail"
          style={{
            background: "white",
            color: "rgba(15, 31, 55, 0.90)",
            fontWeight: "600",
            fontSize: "20px",
          }}
          onClick={loginsubmitHandler}
        >
          Log in
        </button>
        <div className="Line"></div>
        <div className="footer" style={{ color: "white", marginTop: "5px" }}>
          Don’t have an account?{" "}
          <span > Forgot Password</span>{" "}
        </div>
        <span
          style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          onClick={directToSignup}
        >
          Signup
        </span>
      </form>
    </div>
  );
};

export default Login;
