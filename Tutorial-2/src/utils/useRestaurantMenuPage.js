import { useState, useEffect } from "react";

const useRestaurantMenuPage = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const json = await data.json();

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
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (resId) {
      fetchMenuData();
    }
  }, [resId]);

  return { restaurantInfo, menuItems, loading };
};

export default useRestaurantMenuPage;
