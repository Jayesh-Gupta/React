import * as A from "../utilities/constants";
import { useState } from "react";


const Header=()=>{

    const [btnName,setBtnName]=useState("Login");


    return (
    <div className="header">
        <div className="logo-container">
            <img 
            className="logo"
            alt="logo"
            src={A.LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button id="login-btn" onClick={()=>{
                    btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                }}>{btnName}</button>
            </ul>

        </div>
    </div>
);
}

export default Header;