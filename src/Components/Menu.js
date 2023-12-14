import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurentMenu from "../utilities/useRestaurentMenu";

const Menu=()=>{
    
    const {resId}=useParams();//destructuring
    const menuData=useRestaurentMenu(resId);
    
    if(menuData===null)return <Shimmer/>
    const{name}=menuData?.data?.cards[0]?.card?.card?.info;
    //console.log(menuData?.data?.cards[0]?.card?.card?.info);
    const {itemCards}=menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    //itemCards.map((menu)=>console.log(menu.card.info.id))
   
    return <div className="">
        <h1 className="font-bold m-2 text-3xl py-2 shadow"> {name}</h1>
        <h2 className="text-xl font-bold m-2" >Menu</h2>
        <ul className="flex flex-wrap flex-col ">
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