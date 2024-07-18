import {ADD_TO_CART, CLEAR_CART} from '../type/Type'

export const addToCart = (items) => ({
  type: ADD_TO_CART,
  payload: items,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});
