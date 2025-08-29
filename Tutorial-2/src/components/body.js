import RestaurantCard from "./RestaurantCard.js";
import { SkeletonContainer } from "./Skeleton.js";
import { useState, useEffect, useCallback } from "react";
import { SWIGGY_API_URL } from "../utils/contant.js";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const handleTopRatedFilter =  (() => {
    const filteredList = restaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filteredList);
  }, [restaurants]);

  const handleSearch = () => {
    const filteredList = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await fetch(SWIGGY_API_URL, {
        headers: { 
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
        },
      });

      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();

      const restaurantData =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch restaurants. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-button" disabled>
            Top Rated Restaurants
          </button>
        </div>
        <SkeletonContainer count={12} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="body">
        <div className="loading">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="body">
        <div className="filter">
          <div>
            <input
              type="text"
              className="search-input"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <button className="filter-button" onClick={handleTopRatedFilter}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurants.length === 0 ? (
            <div className="no-results">No restaurants found</div>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
