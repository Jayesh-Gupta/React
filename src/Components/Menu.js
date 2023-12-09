import { useEffect } from "react";

const Menu=()=>{

    useEffect(()=>{fetchMenu();},[]);

    const fetchMenu=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=84070&catalog_qa=undefined&submitAction=ENTER");
        const jsonData= await data.json();
        console.log(jsonData);
    }

    return <div>
        <h1> Restaurent Name</h1>
        <h2>Menu</h2>
        <ul>
            <li>Chapati</li>
            <li>Dal</li>
            <li>Burgers</li>
        </ul>
    </div>

}

export default Menu;