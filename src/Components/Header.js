import * as A from "../utilities/constants";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{

    const [btnName,setBtnName]=useState("Login");
    const OnlineStatus=useOnlineStatus();
    //console.log(useState("hello"));
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    //console.log(cartItems);

    return (
    <div className="m-2 flex justify-between items-center bg-green-50 shadow-lg">
        <div className="logo-container">
            <img 
            className="w-28"
            alt="logo"
            src={A.LOGO_URL}/>
        </div>
        <div className="">
            <ul className="flex ">
                <li className="px-2 py-1 mx-1">OnlineStatus: {OnlineStatus===true?"online":"offline"}</li>
                <li className="px-2 py-1 mx-1"><Link to="/"> Home</Link></li>
                <li className="px-2 py-1 mx-1"><Link to="/about"> About</Link></li>
                <li className="px-2 py-1 mx-1"><Link to="/contact">Contact</Link></li>
                <li className="px-2 py-1 mx-1"><Link to="/grocery">Grocery</Link></li>
                <li className="px-2 py-1 mx-1 font-bold "><Link to="/cart">Cart-{cartItems.length}</Link></li>
                <button className="px-4 py-1 mx-1 border-solid border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white" id="login-btn" onClick={()=>{
                    btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                }}>{btnName}</button>
                <li className="px-2 py-1 mx-1 font-bold">{loggedInUser}</li>
            </ul>

        </div>
    </div>
);
}

export default Header;