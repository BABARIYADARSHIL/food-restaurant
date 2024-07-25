import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./loginUserData/saga/index";
import rootSagaRestaurantData from "./restaurantData/saga/index";
import rootReducer from "./combineReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSagaRestaurantData);

export default store;
