import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const navigate = useNavigate();
    // Inside your new page component
        const userName = localStorage.getItem('username');
        const first_Name = localStorage.getItem('first_name');
        const last_Name = localStorage.getItem('last_name');

        const logoutHandler = () => {
            localStorage.clear();
            navigate('/')

        }

    return(
        <div>
            <h2 style={{alignContent:"center",fontSize:"40px"}}>Welcome !</h2>
            <h3 style={{alignContent:"center",fontSize:"30px"}}>you're LoggedIn</h3>
            <div className="user-details">
                <p>username <span>:{userName}</span></p>
                <p>first name <span>:{first_Name}</span></p>
                <p>last name <span>:{last_Name}</span></p>
            </div>
            <button className="logout" onClick={logoutHandler}>Logout</button>

        </div>
    )
};