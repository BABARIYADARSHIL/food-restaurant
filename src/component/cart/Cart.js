import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/cart/Action";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ({item.price} X {item.quantity}) =
            {item.price * item.quantity} Rs
          </li>
        ))}
      </ul>
      <h3>total price:{totalPrice}</h3>
      <button onClick={handelClearCart}>Clear Cart</button>
      <button onClick={handelConfirmOrder}>Confirm Oder</button>
    </div>
  );
};

export default Cart;
