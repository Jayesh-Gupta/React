import { useState,useEffect } from "react";
import { MENU_URL } from "../utilities/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";

const Menu=()=>{
    const[menuData,setMenuData]=useState(null);
    const {resId}=useParams();//destructuring
    useEffect(()=>{fetchMenu();},[]);

    const fetchMenu=async ()=>{
        const data= await fetch(MENU_URL+resId);
        const jsonData= await data.json();
        setMenuData(jsonData);
        
      //  console.log(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    }
    
    if(menuData===null)return <Shimmer/>
    const{name}=menuData?.data?.cards[0]?.card?.card?.info;
    //console.log(menuData?.data?.cards[0]?.card?.card?.info);
    const {itemCards}=menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    //itemCards.map((menu)=>console.log(menu.card.info.id))
   
    return <div className="menu-container">
        <h1> {name}</h1>
        <h2>Menu</h2>
        <ul>
            {
           itemCards.map((menu)=>{
            const{id}=menu.card.info;
            return (
            <li key={id}>

                {/*name +"------ Rs"+ price/100*/ }
                <MenuCard menuData={menu.card.info} />
                
                </li>
                );
            })
            }
            
        </ul>
    </div>

}

export default Menu;