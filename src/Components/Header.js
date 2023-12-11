import * as A from "../utilities/constants";
import { useState } from "react";
import {Link} from "react-router-dom";


const Header=()=>{

    const [btnName,setBtnName]=useState("Login");
    console.log(useState("hello"));

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
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about"> About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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