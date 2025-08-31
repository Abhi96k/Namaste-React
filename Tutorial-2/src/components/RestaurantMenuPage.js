import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuPage from "../utils/useRestaurantMenuPage";
import "./RestaurantMenuPage.css";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const { restaurantInfo, menuItems, loading } = useRestaurantMenuPage(resId);

  if (loading || !restaurantInfo) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="restaurant-menu">
      {/* Restaurant Info */}
      <div className="restaurant-header">
        <h1>{restaurantInfo.name}</h1>
        <p>{restaurantInfo.cuisines?.join(", ")}</p>
        <p>
          {restaurantInfo.areaName}, {restaurantInfo.city}
        </p>
        <p>
          Rating: {restaurantInfo.avgRating} ⭐ (
          {restaurantInfo.totalRatingsString})
        </p>
        <p>{restaurantInfo.costForTwoMessage}</p>
      </div>

      {/* Menu Items */}
      <div className="menu-categories">
        {menuItems.map((category, index) => (
          <div key={index} className="category">
            <h2>{category?.card?.card?.title}</h2>

            {/* Handle NestedItemCategory */}
            {category?.card?.card?.categories ? (
              category.card.card.categories.map((subCategory, subIndex) => (
                <div key={subIndex} className="sub-category">
                  <h3>{subCategory.title}</h3>
                  <div className="menu-items">
                    {subCategory.itemCards?.map((item, itemIndex) => (
                      <div key={itemIndex} className="menu-item">
                        <div className="item-info">
                          <h4>{item.card.info.name}</h4>
                          <p>₹{item.card.info.price / 100}</p>
                          <p>{item.card.info.description}</p>
                          {item.card.info.ratings?.aggregatedRating?.rating && (
                            <span>
                              ⭐{" "}
                              {item.card.info.ratings.aggregatedRating.rating}
                            </span>
                          )}
                        </div>
                        {item.card.info.imageId && (
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/w_208,h_208,c_fit/${item.card.info.imageId}`}
                            alt={item.card.info.name}
                            className="item-image"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Handle ItemCategory */
              <div className="menu-items">
                {category?.card?.card?.itemCards?.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-info">
                      <h4>{item.card.info.name}</h4>
                      <p>₹{item.card.info.price / 100}</p>
                      <p>{item.card.info.description}</p>
                      {item.card.info.ratings?.aggregatedRating?.rating && (
                        <span>
                          ⭐ {item.card.info.ratings.aggregatedRating.rating}
                        </span>
                      )}
                    </div>
                    {item.card.info.imageId && (
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/w_208,h_208,c_fit/${item.card.info.imageId}`}
                        alt={item.card.info.name}
                        className="item-image"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
