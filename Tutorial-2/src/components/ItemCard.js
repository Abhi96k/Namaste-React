import React from "react";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Slice/CartSlice.js";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  if (!item?.card?.info) {
    return null;
  }

  const { info } = item.card;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: info.id,
        name: info.name,
        price: info.price,
        imageId: info.imageId,
        description: info.description,
        isVeg: info.isVeg,
      })
    );
  };

  return (
    <div className={restaurantMenuStyles.menuItem}>
      <div className={restaurantMenuStyles.itemInfo}>
        <h4 className={restaurantMenuStyles.itemTitle}>{info.name}</h4>
        <p className={restaurantMenuStyles.itemPrice}>₹{info.price / 100}</p>
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
              <span key={index} className={restaurantMenuStyles.itemRibbon}>
                {ribbon.text}
              </span>
            ))}
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Add   Cart
        </button>
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
              <span className={info.isVeg ? "text-green-600" : "text-red-600"}>
                {info.isVeg ? "🟢" : "🔴"}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
