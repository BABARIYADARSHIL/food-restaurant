import {
  FETCH_RESTAURANT_DATA,
  FETCH_RESTAURANT_DATA_FAILED,
  FETCH_RESTAURANT_DATA_SUCCESS,
  FILTER_ALL,
  FILTER_RATING,
  FILTER_VEG,
} from "../../type/index";

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

export const filterAll = () => ({
  type: FILTER_ALL,
});

export const filterRating = () => ({
  type: FILTER_RATING,
});

export const filterVeg = () => ({
  type: FILTER_VEG,
});
