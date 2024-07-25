import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/action/index";
import styles from "./index.module.css";

const Item = ({ item, restaurantName }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    const itemToAdd = {
      ...item,
      restaurantName,
      quantity,
    };
    dispatch(addToCart([itemToAdd]));
  };
  return (
    <>
      <li className={styles.itemContainer}>
        <span className={styles.itemName}>{restaurantName}</span>
        <span className={styles.itemName}>{item.name}</span>
        <span className={styles.itemPrice}>Rs {item.price * quantity}</span>
        <div className={styles.quantityControls}>
          <button className={styles.quantityButton} onClick={decrementQuantity}>
            -
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button className={styles.quantityButton} onClick={incrementQuantity}>
            +
          </button>
        </div>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default Item;
