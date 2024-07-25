import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart/action/index";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";



const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cartData.cartItems);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + calculatePriceWithGST(item.price) * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  const calculatePriceWithGST = (price) => {
    return price + price * 0.05;
  };

  const handelClearCart = () => {
    dispatch(clearCart());
  };
  const handelConfirmOrder = () => {
    navigate("/confirm");
  };

  return (
    <div className={styles.cartContainer} id="receiptContent">
      <h2 className={styles.cartTitle}>Cart</h2>
      <ul className={styles.cartList}>
        {cartItems.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            <span>{item.restaurantName}</span>
            <span>{item.name}</span>
            <span>
              ({item.price} X {item.quantity}) + 5% GST =
              {calculatePriceWithGST(item.price) * item.quantity} Rs
            </span>
          </li>
        ))}
      </ul>
      <h3 className={styles.totalPrice}>
        Total Price: {totalPrice.toFixed(2)} Rs
      </h3>
      <button className={styles.cartButton} onClick={handelClearCart}>
        Clear Cart
      </button>
      {totalPrice > 0 && (
        <button className={styles.confirmButton} onClick={handelConfirmOrder}>
          Confirm Order
        </button>
      )}
    </div>
  );
};

export default Cart;
