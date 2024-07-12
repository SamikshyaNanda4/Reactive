import { LOGO_URL } from "../utils/constants";

const Header=()=>{
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
              </ul>
            </div>
        </div>
    )
}

export default Header;