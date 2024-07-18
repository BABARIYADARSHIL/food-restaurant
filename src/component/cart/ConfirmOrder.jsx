import React from 'react'
import { useSelector } from 'react-redux';

function ConfirmOrder() {
      const cartItems = useSelector((state) => state.cartData.cartItems);
      const totalPrice = cartItems.reduce((sum, item)=> sum+ item.price * item.quantity, 0)
  return (
    <div>
      <h2>Oder Confirmation</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ({item.price} X {item.quantity}) ={" "}
            {item.price * item.quantity} Rs
          </li>
        ))}
      </ul>
      <h3>Total item:{cartItems.length}</h3>
      <h3>Total Price: {totalPrice} Rs</h3>
    </div>
  );
}

export default ConfirmOrder
