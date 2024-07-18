import { ADD_TO_CART, CLEAR_CART } from "../type/Type";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  console.log("------sta",state);
  console.log("------action", action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.payload],
      };
      case CLEAR_CART:
        return {
          cartItems: [],
          };
    default:
      return state;
  }
};

export default cartReducer;
