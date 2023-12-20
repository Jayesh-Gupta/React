import { useEffect, useState } from "react";


const User=({name,location})=>{

    const[count]=useState(0);
    const[count2]=useState(2);

    useEffect(()=>{
          //  console.log("useEffect");
           const timer= setInterval(()=>{console.log("react")},1000);
            return()=>{
                //console.log("useEffect return");
                clearInterval(timer);
            };
    },[]);

    return(
    <div className="user-card">
    <h1>Count: {count}</h1>
    <h1>Count2: {count2}</h1>
    <h3>{name}</h3>
    <h4>{location}  </h4>
    <h4>handle: @jayesh</h4>
    </div>
    );

}

export default User;