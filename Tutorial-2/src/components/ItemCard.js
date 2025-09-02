import React from "react";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";

const ItemCard = ({ item }) => {
  if (!item?.card?.info) {
    return null;
  }

  const { info } = item.card;

  return (
    <div className={restaurantMenuStyles.menuItem}>
      <div className={restaurantMenuStyles.itemInfo}>
        <h4 className={restaurantMenuStyles.itemTitle}>
          {info.name}
        </h4>
        <p className={restaurantMenuStyles.itemPrice}>
          ₹{info.price / 100}
        </p>
        <p className={restaurantMenuStyles.itemDescription}>
          {info.description}
        </p>
        {info.ratings?.aggregatedRating?.rating && (
          <span className={restaurantMenuStyles.itemRating}>
            ⭐ {info.ratings.aggregatedRating.rating}
          </span>
        )}
        {info.ribbons && info.ribbons.length > 0 && (
          <div className="flex gap-2 mt-3">
            {info.ribbons.map((ribbon, index) => (
              <span 
                key={index}
                className={restaurantMenuStyles.itemRibbon}
              >
                {ribbon.text}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {info.imageId && (
        <div className="relative">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/w_208,h_208,c_fit/${info.imageId}`}
            alt={info.name}
            className={restaurantMenuStyles.itemImage}
            loading="lazy"
          />
          {info.isVeg !== undefined && (
            <div className={restaurantMenuStyles.itemVegIcon}>
              <span className={info.isVeg ? 'text-green-600' : 'text-red-600'}>
                {info.isVeg ? '🟢' : '🔴'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
