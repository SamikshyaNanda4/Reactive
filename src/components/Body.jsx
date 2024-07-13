import RestaurantCard from "./RestaurantCard";
import {CDN_URL}  from "../utils/constants";
import { resList } from "../utils/constants";
import { useState } from "react";

const Body=()=>{
    // resList.info.map
       


    // const ListOfRestaurants={
    //    "info": [
    //     {
    //                   "id": "69876",
    //                   "name": "Subway",
    //                   "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    //                   "locality": "UB City",
    //                   "areaName": "Central Bangalore",
    //                   "costForTwo": "₹350 for two",
    //                   "cuisines": [
    //                     "Salads",
    //                     "Snacks",
    //                     "Desserts",
    //                     "Beverages"
    //                   ],
    //                   "avgRating": 4.3,
    //                   "parentId": "2",
    //                   "avgRatingString": "4.3",
    //                   "totalRatingsString": "1K+",
    //                   "sla": {
    //                     "deliveryTime": 40,
    //                     "lastMileTravel": 2.3,
    //                     "serviceability": "SERVICEABLE",
    //                     "slaString": "40-45 mins",
    //                     "lastMileTravelString": "2.2 km",
    //                     "iconType": "ICON_TYPE_EMPTY"
    //                   }
    //                 },
    //      { 
    //                     "id": "69876",
    //                     "name": "Subway",
    //                     "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    //                     "locality": "UB City",
    //                     "areaName": "Central Bangalore",
    //                     "costForTwo": "₹350 for two",
    //                     "cuisines": [
    //                       "Salads",
    //                       "Snacks",
    //                       "Desserts",
    //                       "Beverages"
    //                     ],
    //                     "avgRating": 4.6,
    //                     "parentId": "2",
    //                     "avgRatingString": "4.3",
    //                     "totalRatingsString": "1K+",
    //                     "sla": {
    //                       "deliveryTime": 40,
    //                       "lastMileTravel": 2.3,
    //                       "serviceability": "SERVICEABLE",
    //                       "slaString": "40-45 mins",
    //                       "lastMileTravelString": "2.2 km",
    //                       "iconType": "ICON_TYPE_EMPTY"
    //                     }
    //                   }
    //             ]
    // }

    const [resLi, setResLi] = useState(
        // "info": [
        //  {
        //                "id": "69871",
        //                "name": "Subway",
        //                "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        //                "locality": "UB City",
        //                "areaName": "Central Bangalore",
        //                "costForTwo": "₹350 for two",
        //                "cuisines": [
        //                  "Salads",
        //                  "Snacks",
        //                  "Desserts",
        //                  "Beverages"
        //                ],
        //                "avgRating": 4.3,
        //                "parentId": "2",
        //                "avgRatingString": "4.3",
        //                "totalRatingsString": "1K+",
        //                "sla": {
        //                  "deliveryTime": 40,
        //                  "lastMileTravel": 2.3,
        //                  "serviceability": "SERVICEABLE",
        //                  "slaString": "40-45 mins",
        //                  "lastMileTravelString": "2.2 km",
        //                  "iconType": "ICON_TYPE_EMPTY"
        //                }
        //              },
        //   { 
        //                  "id": "69876",
        //                  "name": "Another One",
        //                  "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        //                  "locality": "UB City",
        //                  "areaName": "Central Bangalore",
        //                  "costForTwo": "₹350 for two",
        //                  "cuisines": [
        //                    "Salads",
        //                    "Snacks",
        //                    "Desserts",
        //                    "Beverages"
        //                  ],
        //                  "avgRating": 4.6,
        //                  "parentId": "2",
        //                  "avgRatingString": "4.3",
        //                  "totalRatingsString": "1K+",
        //                  "sla": {
        //                    "deliveryTime": 40,
        //                    "lastMileTravel": 2.3,
        //                    "serviceability": "SERVICEABLE",
        //                    "slaString": "40-45 mins",
        //                    "lastMileTravelString": "2.2 km",
        //                    "iconType": "ICON_TYPE_EMPTY"
        //                  }
        //                }
        //          ]
        resList
     );
     


    return(
        <div className="body">    
        <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList=resLi.info.filter((res)=>
                res.avgRating>4.3);
                setResLi({info:filteredList})
            }} 
            
            onMouseOver={()=>{ console.log(resList.info)}}>
                TOP RATED RESTAURANTS
            </button>

            {/* <button className="all-btn" onClick={()=>{
                const setAll=
                ListOfRestaurants.info.map((res)=>{
                    setAll.push(res);
                })
                setListOfRestaurants({info:setAll})
            }}>
                ALL RESTAURANTS
            </button> */}

            </div>        
            
            <div className="restaurant-list">
                <div className="res-container" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                  {resLi.info.map((restaurant)=>{
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