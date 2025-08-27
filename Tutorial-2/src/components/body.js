import { restobj } from "../utils/data.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";


const Body = () => {

    
  const restaurants =
    restobj?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleFilter = () => {
    const filteredList = restaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-button" onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
