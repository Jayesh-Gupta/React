import { useEffect, useState } from "react";
import { MENU_URL } from "../utilities/constants";

const useRestaurentMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    console.log("custom hook called");

    useEffect(()=>{
        console.log("custom hook effect");
        fetchMenu(resId);
    },[]);


    const fetchMenu=async(resId)=>{
        const data=await fetch(MENU_URL+resId);
        const jsonData=await data.json();

        setResInfo(jsonData);
    }

    return resInfo;
}

export default useRestaurentMenu;