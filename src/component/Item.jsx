import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/Action";
import styles from './Item.module.css'
const Item = ({ item }) => {
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
       quantity,
     };
     dispatch(addToCart([itemToAdd]));
   };

  return (
    <li className={styles.itemContainer}>
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.itemPrice}>${item.price * quantity}</span>
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
  );
};

export default Item;
