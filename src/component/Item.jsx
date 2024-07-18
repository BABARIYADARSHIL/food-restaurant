import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/Action";
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
    <>
      <li>
        {item.name} - ${item.price * quantity}
        <button onClick={decrementQuantity}>-</button>
        {quantity}
        <button onClick={incrementQuantity}>+</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </li>
    </>
  );
};

export default Item;
