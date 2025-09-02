import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuPage from "../utils/useRestaurantMenuPage";
import { restaurantMenuStyles } from "../CustomStyle/CustomStyle.js";

const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const { restaurantInfo, menuItems, loading } = useRestaurantMenuPage(resId);

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

      {/* Menu Items */}
      <div className={restaurantMenuStyles.menuCategories}>
        {menuItems.map((category, index) => (
          <div key={index} className={restaurantMenuStyles.category}>
            <h2 className={restaurantMenuStyles.categoryTitle}>
              {category?.card?.card?.title}
            </h2>

            {/* Handle NestedItemCategory */}
            {category?.card?.card?.categories ? (
              category.card.card.categories.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  className={restaurantMenuStyles.subCategory}
                >
                  <h3 className={restaurantMenuStyles.subCategoryTitle}>
                    {subCategory.title}
                  </h3>
                  <div className={restaurantMenuStyles.menuItems}>
                    {subCategory.itemCards?.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={restaurantMenuStyles.menuItem}
                      >
                        <div className={restaurantMenuStyles.itemInfo}>
                          <h4 className={restaurantMenuStyles.itemTitle}>
                            {item.card.info.name}
                          </h4>
                          <p className={restaurantMenuStyles.itemPrice}>
                            ₹{item.card.info.price / 100}
                          </p>
                          <p className={restaurantMenuStyles.itemDescription}>
                            {item.card.info.description}
                          </p>
                          {item.card.info.ratings?.aggregatedRating?.rating && (
                            <span className={restaurantMenuStyles.itemRating}>
                              ⭐{" "}
                              {item.card.info.ratings.aggregatedRating.rating}
                            </span>
                          )}
                        </div>
                        {item.card.info.imageId && (
                          <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/w_208,h_208,c_fit/${item.card.info.imageId}`}
                            alt={item.card.info.name}
                            className={restaurantMenuStyles.itemImage}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Handle ItemCategory */
              <div className={restaurantMenuStyles.menuItems}>
                {category?.card?.card?.itemCards?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={restaurantMenuStyles.menuItem}
                  >
                    <div className={restaurantMenuStyles.itemInfo}>
                      <h4 className={restaurantMenuStyles.itemTitle}>
                        {item.card.info.name}
                      </h4>
                      <p className={restaurantMenuStyles.itemPrice}>
                        ₹{item.card.info.price / 100}
                      </p>
                      <p className={restaurantMenuStyles.itemDescription}>
                        {item.card.info.description}
                      </p>
                      {item.card.info.ratings?.aggregatedRating?.rating && (
                        <span className={restaurantMenuStyles.itemRating}>
                          ⭐ {item.card.info.ratings.aggregatedRating.rating}
                        </span>
                      )}
                    </div>
                    {item.card.info.imageId && (
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/w_208,h_208,c_fit/${item.card.info.imageId}`}
                        alt={item.card.info.name}
                        className={restaurantMenuStyles.itemImage}
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
