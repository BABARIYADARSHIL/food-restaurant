import React from 'react'
import { useSelector } from 'react-redux';
import styles from "./ConfirmOrder.module.css";

function ConfirmOrder() {
      const cartItems = useSelector((state) => state.cartData.cartItems);
      const totalPrice = cartItems.reduce((sum, item)=> sum+ item.price * item.quantity, 0)
  return (
    <div className={styles.confirmOrderContainer}>
      <h2 className={styles.confirmOrderTitle}>Order Confirmation</h2>
      <ul className={styles.orderList}>
        {cartItems.map((item, index) => (
          <li key={index} className={styles.orderItem}>
            <span>{item.name}</span>
            <span>
              ({item.price} X {item.quantity}) = {item.price * item.quantity} Rs
            </span>
          </li>
        ))}
      </ul>
      <h3 className={styles.totalItems}>Total Items: {cartItems.length}</h3>
      <h3 className={styles.totalPrice}>Total Price: {totalPrice} Rs</h3>
    </div>
  );
}

export default ConfirmOrder
