import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantData } from "../../store/restaurantData/action/index";
import Item from "../../component/item/index";
import styles from "./index.module.css";

const Restaurant = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state) => state.restaurantReducerData
  );
  const data = useSelector(
    (state) => state.restaurantReducerData.RestaurantData
  );
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchRestaurantData());
    }
  }, [dispatch, data.length]);

  const restaurantData = data.find(
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

  const handelCart = () => {
    navigation("/Cart");
  };

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
          <Item
            key={index}
            item={item}
            restaurantName={restaurantData.restaurantName}
            className={styles.item}
          />
        ))}
      </ul>
      <button className={styles.goToCartButton} onClick={handelCart}>
        Go to Cart
      </button>
    </div>
  );
};
export default Restaurant;
