import { combineReducers } from "redux";
import userReducer from "../loginUserData/reducer/index";
import restaurantReducer from "../restaurantData/reducer/index";
import cartReducer from "../cart/reducer/index";

const rootReducer = combineReducers({
  userReducerData: userReducer,
  restaurantReducerData: restaurantReducer,
  cartData: cartReducer,
});

export default rootReducer;
