import { useParams} from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurentMenu from "../utilities/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const Menu=()=>{
    
    const {resId}=useParams();//destructuring
    const menuData=useRestaurentMenu(resId);
    const[showIndex,setShowIndex]=useState(null);
    
    if(menuData===null)return <Shimmer/>
    const{name,cuisines}=menuData?.data?.cards[0]?.card?.card?.info;
    //console.log(menuData?.data?.cards);
    const menuList=menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.
    filter((menu)=> menu?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    //console.log(menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
    //console.log(menuList);
   
    return <div className="text-center">
        <h1 className="font-bold m-2 text-3xl py-2 "> {name}</h1>
        <p className="text-lg font-bold " >{cuisines.join(",")}</p>
        {menuList.map((category,index)=>{
            return   <RestaurentCategory key={category.card.card.title} 
                    data={category.card.card} showItems={showIndex===index} handleClick={()=>showIndex===index?setShowIndex(null):setShowIndex(index)} />
        })}
        
    </div>

}

export default Menu;