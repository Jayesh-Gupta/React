import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body=()=>{

    
    const arr=useState([]); //it returns array
    const [listOfRestaurents, setListOfRestaurents] =arr; //array destructuring

    const[filterListRes,setFilterListRes]=useState("");

    const[searchText,setSearchText]=useState("");

    useEffect(()=>{fetchData()},[]);
    const fetchData=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        const loadData=json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;//optional Chaining
        setListOfRestaurents(loadData);
        setFilterListRes(loadData);

    };

   // Coditional Rendering
return listOfRestaurents.length===0 ? <Shimmer/> : (
    <div className="body">
        
        <div className="filter">
            <div className="search">
                <input type="text" id="search-bar" placeholder="Search....." value={searchText} 
                onChange={(e)=>{
                    //console.log(e);
                    setSearchText(e.target.value);
                }}/>
                <button id="search-bar-btn" onClick={()=>{
                    const filteredList=listOfRestaurents.filter((restaurent)=>{
                       return restaurent.info.name.toLowerCase().includes(searchText.toLowerCase());
                    });
                    setFilterListRes(filteredList);
                }}>Search</button>
            </div>



            <button id="top-res-btn"
            onClick={()=>{
               let filteredList=listOfRestaurents.filter((obj)=>obj.info.avgRating>4);
               setFilterListRes(filteredList);
            }}>Top Rated Restaurents</button>
        </div>
        <div className="card-container">
            {filterListRes.map((restaurent)=>(
                <Card key={restaurent.info.id} resData={restaurent}/>)
            )}
            
            

        </div>
    </div>
);}

export default Body;