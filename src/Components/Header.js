import * as A from "../utilities/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";


const Header=()=>{

    const [btnName,setBtnName]=useState("Login");
    const OnlineStatus=useOnlineStatus();
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
                <li>OnlineStatus: {OnlineStatus===true?"online":"offline"}</li>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/about"> About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
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