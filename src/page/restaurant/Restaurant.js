import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantData } from "../../store/restaurantData/Action";
import Item from "../../component/Item";
import styles from './Restaurant.module.css'

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
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!restaurantData) {
    return <div className={styles.notFound}>Restaurant not found</div>;
  }

  return (
    <div className={styles.restaurantContainer}>
      <h1 className={styles.restaurantName}>{restaurantData.restaurantName}</h1>
      <p className={styles.restaurantInfo}>
        Location: {restaurantData.location}
      </p>
      <p className={styles.restaurantInfo}>Rating: {restaurantData.rating}</p>
      <p className={styles.categories}>
        Categories: {restaurantData.categories.join(", ")}
      </p>
      <h2>Items</h2>
      <ul className={styles.itemsList}>
        {restaurantData.items.map((item, index) => (
          <Item key={index} item={item} className={styles.item} />
        ))}
      </ul>
    </div>
  );
};
export default Restaurant;
