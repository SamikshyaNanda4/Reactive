import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {useEffect} from "react";

import {Link} from "react-router-dom"

const Header=()=>{

    const [btnNameReact, setBtnNameReact]=useState("Login");
    console.log("Whole Header rendering");

    //if no dependancy array i.e=>use Effect is called on every component renders

    //when the dependancy array is empty i.e=>use Effect is called only once(its called on nly initial render)

    // if dependancy array is present i.e [btnNameReact],then useEffect is called everyTime when btnReact is updated
    useEffect(()=>{
        console.log("useEffect called");
        },[]);
        //dependancy array is not mandatory


     return(
        <div className="header">
            <div className="logo-container">
            <a href="#"><img  className="logo" src={LOGO_URL} alt="FOOD-1" border="0" width={120} height={105}/></a>
            </div>
            <div className="nav-items">
              <ul>
                     <li> <Link to="/">Home</Link></li> 
                     <li><Link to="/about">About Us</Link></li>
                     <li> <Link to="/contact">Contact Us</Link></li>
                     <li>Cart</li>
                     <button className="login" onClick={()=>{ 
                         btnNameReact==="Login" ? setBtnNameReact("Logout") :
                        setBtnNameReact("Login") ; console.log(btnNameReact)}}>{btnNameReact}</button>
              </ul>
            </div>
        </div>
    )
}

export default Header;