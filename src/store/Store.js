import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import UserReducer from "../store/loginUserData/Reducer";
import rootSaga from './loginUserData/Saga';
import restaurantReducer from "./restaurantData/Reducer";
import rootSagaRestaurantData from "./restaurantData/Saga"

const rootReducers = combineReducers({
  userReducerData: UserReducer,
  restaurantReducerData: restaurantReducer, // specific key name instead of the variable name
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSagaRestaurantData);

export default store;