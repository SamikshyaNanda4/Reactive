import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{

    const [btnNameReact, setBtnNameReact]=useState("Login");
    console.log("Whole Header rendering");
     return(
        <div className="header">
            <div className="logo-container">
            <a href="#"><img  className="logo" src={LOGO_URL} alt="FOOD-1" border="0" width={120} height={105}/></a>
            </div>
            <div className="nav-items">
              <ul>
                     <li>Home</li>
                     <li>About Us</li>
                     <li>Contact Us</li>
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