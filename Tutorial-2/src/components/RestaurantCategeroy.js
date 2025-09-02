import React, { useState } from "react";
import ItemList from "./ItemsList.js";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";

const RestaurantCategory = ({ category }) => {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div className={restaurantMenuStyles.category}>
      <div
        className={restaurantMenuStyles.categoryHeader}
        onClick={toggleItems}
      >
        <h6 className={restaurantMenuStyles.categoryTitle}>
          {category?.card?.card?.title} (
          {category?.card?.card?.itemCards?.length || 0})
        </h6>
        <span className={restaurantMenuStyles.categoryToggle}>
          {showItems ? "▼" : "▶"}
        </span>
      </div>

      {showItems && (
        <div className="mt-6">
          <ItemList items={category?.card?.card?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
