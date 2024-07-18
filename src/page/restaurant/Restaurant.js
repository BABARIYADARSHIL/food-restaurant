import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantData } from "../../store/restaurantData/Action";
import Item from "../../component/Item";

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { RestaurantData, loading, error } = useSelector(
    (state) => state.restaurantReducerData
  );

  useEffect(() => {
    if (RestaurantData.length === 0) {
      dispatch(fetchRestaurantData());
    }
  }, [dispatch, RestaurantData.length]);

  const restaurantData = RestaurantData.find(
    (restaurant) => restaurant.id === parseInt(id)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restaurantData) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      <h1>{restaurantData.restaurantName}</h1>
      <p>Location: {restaurantData.location}</p>
      <p>Rating: {restaurantData.rating}</p>
      <p>Categories: {restaurantData.categories.join(", ")}</p>
      <h2>Items</h2>
      <ul>
        {restaurantData.items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </>
  );
};

export default Restaurant;
