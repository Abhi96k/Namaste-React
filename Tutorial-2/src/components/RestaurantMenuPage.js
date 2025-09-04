import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuPage from "../utils/useRestaurantMenuPage";
import RestaurantCategory from "./RestaurantCategeroy.js";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";
import { useState } from "react";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const { restaurantInfo, menuItems, loading } = useRestaurantMenuPage(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (loading || !restaurantInfo) {
    return <div className={restaurantMenuStyles.loading}>Loading...</div>;
  }

  return (
    <div className={restaurantMenuStyles.restaurantMenu}>
      {/* Restaurant Info */}
      <div className={restaurantMenuStyles.restaurantHeader}>
        <h1 className={restaurantMenuStyles.restaurantTitle}>
          {restaurantInfo.name}
        </h1>
        <p className={restaurantMenuStyles.restaurantInfo}>
          {restaurantInfo.cuisines?.join(", ")}
        </p>
        <p className={restaurantMenuStyles.restaurantInfo}>
          {restaurantInfo.areaName}, {restaurantInfo.city}
        </p>
        <p className={restaurantMenuStyles.restaurantInfo}>
          Rating: {restaurantInfo.avgRating} ⭐ (
          {restaurantInfo.totalRatingsString})
        </p>
        <p className={restaurantMenuStyles.restaurantInfo}>
          {restaurantInfo.costForTwoMessage}
        </p>
      </div>

      {/* Menu Categories */}
      <div className={restaurantMenuStyles.menuCategories}>
        {menuItems.map((category, index) => (
          <RestaurantCategory
            key={index}
            category={category}
            index={index}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
