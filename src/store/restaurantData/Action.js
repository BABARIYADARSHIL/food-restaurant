import {
  FETCH_RESTAURANT_DATA,
  FETCH_RESTAURANT_DATA_FAILED,
  FETCH_RESTAURANT_DATA_SUCCESS,
} from "../type/Type";

export const fetchRestaurantData = () => ({
  type: FETCH_RESTAURANT_DATA,
});

export const fetchRestaurantSuccess = (data) => ({
  type: FETCH_RESTAURANT_DATA_SUCCESS,
  payload: data,
});

export const fetchRestaurantFailure = (error) => ({
  type: FETCH_RESTAURANT_DATA_FAILED,
  payload: error,
});
