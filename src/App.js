import React, { useState,useEffect,lazy,Suspense } from "react"
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About"
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu"; 
import UserContext from "./utilities/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utilities/AppStore";
import Cart from "./Components/Cart";

//lazy loading
const Grocery=lazy(()=>import("./Components/Grocery"))




const App=()=>{
    const[userName,setUserName]=useState("dummy");

useEffect(()=>{
    const data={name:"jayesh"}
    console.log(data.name);
    setUserName(data.name);
},[])
     
return(
    <Provider store={AppStore}>
    <div className="app">
    <UserContext.Provider  value={{loggedInUser:"hello"}}>
    <Header/>
    </UserContext.Provider>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}} >
    <Outlet/>
    </UserContext.Provider>
</div>
</Provider>

);
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        //errorElement:<Error />,
        children:[  
        {
            path:"/",
            element:<Body />,
        },   
        {
            path:"/about",
            element:<About />,
        },  
        {
            path:"/contact",
            element:<Contact />,
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
        },
        {
            path:"/restaurents/:resId",
            element:<Menu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
    ]
    },
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);