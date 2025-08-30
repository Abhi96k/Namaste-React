import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenuPage = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);

    const restaurantData = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;

    setRestaurantInfo(restaurantData);

    const menuData = json?.data?.cards?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const categories = menuData?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    setMenuItems(categories || []);
  };

  if (!restaurantInfo) {
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
