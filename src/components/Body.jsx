import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body=()=>{


    const [resLi, setResLi] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);
    //whnever state variables update react trigger the reconciliation cycle or rerenders the components
        console.log("body rendered")

     useEffect(()=>{
        console.log("Use Effect Called");
        fetchData();
        
     },[]);

     const fetchData = async()=>{
        const data=await fetch(
            "https://www.swiggy.com/mapi/homepage/getCards?lat=12.96340&lng=77.58550");
        const json=await data.json();

        console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setResLi(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
     }

     if(resLi.length===0){
        return(
            <div className="body">
                <h1>Loading...</h1>
            </div>
        )
     }
 
   

     console.log("body rendered");
     


    return(
        <div className="body">    
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box"  value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    //filter the restaurant cards and update the UI
                    //search text
                    console.log(searchText);
                   const list= resLi.filter((res)=>res.info.name.toUpperCase().includes(searchText.toUpperCase()));
                   setFilteredRestaurant(list);


                }}>Search</button>
            </div>
            <button className="filter-btn" 
            onClick={()=>{
                const filteredList=resLi.filter((res)=>
                res.info.avgRating>4.5);

                
                setFilteredRestaurant(filteredList);
            }} 
            >
                TOP RATED RESTAURANTS
            </button>
              </div>        
            
            <div className="restaurant-list">
                <div className="res-container" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                  {filteredRestaurant.map((restaurant)=>{
                      return(
                          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                      )
                  })}
                </div>
            </div>
        </div>
    )
}

export default Body;