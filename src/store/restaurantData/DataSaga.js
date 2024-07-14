import { RestaurantData } from "../../api/RestaurantData";
import {
  FETCH_RESTAURANT_DATA,
  FETCH_RESTAURANT_DATA_FAILED,
  FETCH_RESTAURANT_DATA_SUCCESS,
} from "../type/Type";
import { call, put, takeEvery } from "redux-saga/effects";

export function* restaurantData() {
  try {
    const restaurantData = yield call(RestaurantData);
    yield put({
      type: FETCH_RESTAURANT_DATA_SUCCESS,
      payload: restaurantData.data.restaurant,
    });
    console.log(
      "restaurantData.data.restaurant",
      restaurantData.data.restaurant
    );
  } catch (e) {
    yield put({ type: FETCH_RESTAURANT_DATA_FAILED, payload: e.message });
  }
}

export function* watchRestaurantData() {
  yield takeEvery(FETCH_RESTAURANT_DATA, restaurantData);
}
