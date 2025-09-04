import React from "react";
import ItemList from "./ItemsList.js";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";

const RestaurantCategory = ({ category, showIndex, setShowIndex, index }) => {
  const isExpanded = showIndex === index;

  const toggleItems = () => {
    setShowIndex(isExpanded ? -1 : index);
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
          {isExpanded ? "▼" : "▶"}
        </span>
      </div>

      {isExpanded && (
        <div className="mt-6">
          <ItemList items={category?.card?.card?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
