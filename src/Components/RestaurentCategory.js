import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory=({data,showItems,handleClick})=>{

 
    
    return(
        <div className="  p-2 w-2/3 mx-auto my-4 bg-gray-50">       
        {/*Accordian Header*/}
        <div className="p-2 shadow-md flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span className=" ">+</span>
        </div>
        {/*Accordian Body*/}
        <div >
            {showItems && <ItemList items={data.itemCards}/>}
        
        </div>
        </div>
    );

}
export default RestaurentCategory; 