import RestaurantCard from "./RestaurantCard";
import {CDN_URL}  from "../utils/constants";
import { resList } from "../utils/constants";

const Body=()=>{
    return(
        <div className="body">
            <div className="search-container">
                SEARCH YOUR FOOD <input type="text" className="search-input" placeholder="Search for Food"/>
                <button className="search-btn"> Search</button>
            </div>
            <div className="restaurant-list">
                <div className="res-container" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                  {resList.info.map((restaurant)=>{
                      return(
                          <RestaurantCard key={restaurant.id} resData={restaurant} />
                      )
                  })}
                </div>
            </div>
        </div>
    )
}

export default Body;