import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { clearCart } from "../../../store/cart/action";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const cartItems = useSelector((state) => state.cartData.cartItems);
  const receiptRef = useRef(null);

  const calculatePriceWithGST = (price) => {
    return price + price * 0.05;
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + calculatePriceWithGST(item.price) * item.quantity,
    0
  );

  const handelDoneOrder = () => {
    setTimeout(() => {
      dispatch(clearCart());
      navigation("/home");
    }, 2000);
  };

  return (
    <div className={styles.confirmOrderContainer}>
      <h2 className={styles.confirmOrderTitle}>Order Confirmation</h2>
      <div ref={receiptRef} id="receiptContent">
        <ul className={styles.orderList}>
          {cartItems.map((item, index) => (
            <li key={index} className={styles.orderItem}>
              <span>{item.restaurantName}</span>
              <span>{item.name}</span>
              <span>
                ({item.price} X {item.quantity}) + 5% GST ={" "}
                {calculatePriceWithGST(item.price) * item.quantity} Rs
              </span>
            </li>
          ))}
        </ul>
        <h3 className={styles.totalItems}>Total Items: {cartItems.length}</h3>
        <h3 className={styles.totalPrice}>
          Total Price: {totalPrice.toFixed(2)} Rs
        </h3>
      </div>
      <button className={styles.DoneOrdermButton} onClick={handelDoneOrder}>
        Done
      </button>
    </div>
  );
}

export default ConfirmOrder;
