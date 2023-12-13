import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import useRestaurentMenu from "../utilities/useRestaurentMenu";

const Menu=()=>{
    
    const {resId}=useParams();//destructuring
    const menuData=useRestaurentMenu(resId);
    console.log("Menu Called "+menuData);
    
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