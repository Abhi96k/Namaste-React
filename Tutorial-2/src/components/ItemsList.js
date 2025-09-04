import React from "react";
import ItemCard from "./ItemCard.js";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className={restaurantMenuStyles.emptyState}>
        <p className={restaurantMenuStyles.emptyStateText}>
          No items available in this category
        </p>
      </div>
    );
  }

  return (
    <div className={restaurantMenuStyles.menuItems}>
      {items.map((item, index) => (
        <ItemCard key={item.card?.info?.id || index} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
