const RestaurantCard=(props)=>{

    const {resData}=props;
       
    return(
        <div className="res-card" >
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.cloudinaryImageId} alt="FOOD-1" border="0" width={200} height={185}/>
            <h2 className="res-name">{resData.name}</h2>
            <p className="res-cuisine">Cuisines-  {resData.cuisines.join(", ")}</p>
            <h4 className="res-rating">{resData.avgRating}⭐</h4>
            <h4 className="res-cost">{resData.costForTwo}</h4>
            <h4 className="res-timing">{resData.sla.deliveryTime + ` mins`}</h4>
            <h4 className="res-location">{props.location}</h4>
            <button className="res-btn">Order Now</button>
        </div>
    )
}

export default RestaurantCard;