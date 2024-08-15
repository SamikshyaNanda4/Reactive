import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// nester structures

/*
*Header
       -Logo
       -Navbar
*Body  
       -Search
       -Retaurant Container
              -Restaurant Card
                     -image
                     -nameOfRestaurant
                     -rating Stars
                     -cuisine
                     -costForTwo
*Footer 
       -Copyright
       -Links
       -Social Media Links
       -Contact Us

*/






const  AppLayout=()=>{
  return(
      <div className="app">
      <Header/>
      <Outlet/>
      </div>
  )
}


//outlet is like a tunnel and all the children according to the routes come over here

const appRouter=createBrowserRouter([
  {
      path:"/",
      element: <AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },{
    path:"/about",
    element:<About/>,
   },
   {
    path:"/contact",
    element:<Contact/>,
   },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>,
  }],
      errorElement: <Error/>,           
      //   you can also add an error Element like this whenever the path is random
   },
   
])

    
// const head=React.createElement("h1", 
//     {id:"heading"}, 
//     "Hello World from Reactive!" ) 
//  {} is the place above where you give attibutes to you Tags
       const container= document.getElementById("root")
       const root=ReactDOM.createRoot(container);
//        root.render(head) 
       root.render(<RouterProvider router={appRouter}></RouterProvider>)

        