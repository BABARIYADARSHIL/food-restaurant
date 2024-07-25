import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurantData } from "../../store/restaurantData/action/index";
import "./index.css";
const RestaurantList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(
    (state) => state.restaurantReducerData
  );
  const data = useSelector(
    (state) => state.restaurantReducerData.RestaurantData
  );

  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading restaurants: {error.message}</p>;
  }

  return (
    <div className="restaurant-list">
      {data && data.length > 0 ? (
        data.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <h2 className="restaurant-name">{restaurant.restaurantName}</h2>
            <ul className="menu-list">
              {restaurant.items.map((item) => (
                <li key={item.name} className="menu-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="no-restaurants">No restaurants found.</p>
      )}
    </div>
  );
};

export default RestaurantList;
