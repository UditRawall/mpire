import { useState } from "react";
import "./Modal.css";
import Login from "../login/Login";
import Signup from "../Signup/Signup";
export default function Modal () {
    const [modal,setModal] = useState(false);
    const [temp,setTemp] = useState(true);
    const toggleClick = () => {
        setModal(!modal);
    }
    return <>
    
    <button className="btn-modal" onClick={toggleClick}>open</button>
        
    {modal && (
        <div className="modal">
          <div onClick={toggleClick} className="overlay"></div>
          <div className="modal-content">
           {temp ?  <Login setisLogedIn={setTemp} /> : <Signup setisLogedIn={setTemp}/> }
             <button className="close-modal" onClick={toggleClick}>
              X
            </button>
          </div>
        </div>
      )}
    </>
} 