import React, { lazy,Suspense } from "react"
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About"
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu"; 

//lazy loading
const Grocery=lazy(()=>import("./Components/Grocery"))

const App=()=>{
     
return(<div className="app">
    <Header/>
    <Outlet/>
</div>
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
    ]
    },
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);