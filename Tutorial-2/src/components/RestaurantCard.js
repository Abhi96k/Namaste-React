import { CDN_URL } from "../utils/contant";
import { restaurantCardStyles } from "../CustomStyle/CustomStyle.js";

const RestaurantCard = ({ resData }) => {
  // Defensive destructuring with better fallbacks
  const {
    cloudinaryImageId = "",
    name = "Restaurant Name",
    cuisines = [],
    avgRating,
    costForTwo = "Price not available",
    sla = {},
  } = resData?.info || {};

  const formatRating = (rating) => {
    if (!rating) return "New";
    return `${rating} ⭐`;
  };

  const formatDeliveryTime = (sla) => {
    if (!sla?.deliveryTime) return "Delivery time not available";
    return `${sla.deliveryTime} mins`;
  };

  const formatCuisines = (cuisines) => {
    if (!cuisines || cuisines.length === 0) return "Various Cuisines";
    return cuisines.slice(0, 3).join(", ") + (cuisines.length > 3 ? "..." : "");
  };

  return (
    <div className={restaurantCardStyles.resCard}>
      <img
        className={restaurantCardStyles.resLogo}
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <div className={restaurantCardStyles.cardContent}>
        <h3 className={restaurantCardStyles.cardTitle}>{name}</h3>
        <h4 className={restaurantCardStyles.cardCuisines}>
          {formatCuisines(cuisines)}
        </h4>
        <h4 className={restaurantCardStyles.cardRating}>
          {formatRating(avgRating)}
        </h4>
        <h4 className={restaurantCardStyles.cardCost}>{costForTwo}</h4>
        <h4 className={restaurantCardStyles.cardTime}>
          {formatDeliveryTime(sla)}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
