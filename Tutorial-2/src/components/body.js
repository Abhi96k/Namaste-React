import RestaurantCard from "./RestaurantCard.js";
import { SkeletonContainer } from "./Skeleton.js";
import { useState, useEffect, useCallback } from "react";
import { SWIGGY_API_URL } from "../utils/contant.js";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus.js";
import { bodyStyles, skeletonStyles } from "../CustomStyle/CustomStyle.js";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onlineStatus = UseOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const handleTopRatedFilter = useCallback(() => {
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

  if (onlineStatus === false) {
    return (
      <div className={bodyStyles.body}>
        <div className={bodyStyles.loading}>
          You are offline. Please check your internet connection.
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={bodyStyles.body}>
        <div className={bodyStyles.filter}>
          <button
            className={`${bodyStyles.filterButton} opacity-50 cursor-not-allowed`}
            disabled
          >
            Top Rated Restaurants
          </button>
        </div>
        <SkeletonContainer count={12} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={bodyStyles.body}>
        <div className={bodyStyles.loading}>{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className={bodyStyles.body}>
        <div className={bodyStyles.filter}>
          <div className={bodyStyles.searchContainer}>
            <input
              type="text"
              className={bodyStyles.searchInput}
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className={bodyStyles.searchButton} onClick={handleSearch}>
              Search
            </button>
          </div>
          <button
            className={bodyStyles.filterButton}
            onClick={handleTopRatedFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className={bodyStyles.resContainer}>
          {filteredRestaurants.length === 0 ? (
            <div className={bodyStyles.noResults}>No restaurants found</div>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
