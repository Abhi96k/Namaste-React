import { CDN_URL } from "../utils/contant";

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
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
        }}
      />
      <h3>{name}</h3>
      <h4>{formatCuisines(cuisines)}</h4>
      <h4>{formatRating(avgRating)}</h4>
      <h4>{costForTwo}</h4>
      <h4>{formatDeliveryTime(sla)}</h4>
    </div>
  );
};

export default RestaurantCard;
