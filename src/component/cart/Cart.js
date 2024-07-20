import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart/Action";
import { useNavigate } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cartData.cartItems);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const handelClearCart = () => {
    dispatch(clearCart());
  };
  const handelConfirmOrder = () => {
    navigate("/confirm");
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Cart</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            <span>{item.name}</span>
            <span>
              ({item.price} X {item.quantity}) = {item.price * item.quantity} Rs
            </span>
          </li>
        ))}
      </ul>
      <h3 className={styles.totalPrice}>Total Price: {totalPrice} Rs</h3>
      <button className={styles.cartButton} onClick={handelClearCart}>
        Clear Cart
      </button>
      <button className={styles.confirmButton} onClick={handelConfirmOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
