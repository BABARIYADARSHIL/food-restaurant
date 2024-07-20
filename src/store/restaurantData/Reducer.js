import {
  FETCH_RESTAURANT_DATA,
  FETCH_RESTAURANT_DATA_SUCCESS,
  FETCH_RESTAURANT_DATA_FAILED,
  FILTER_ALL,
  FILTER_RATING,
  FILTER_VEG,
} from "../type/Type";

const initialState = {
  RestaurantData: [],
  FilteredData: [],
  loading: false,
  error: null,
};

const restaurantReducer = (state = initialState, action) => {
  // console.log("restaurantReducer-state", state);
  // console.log("restaurantReducer-actions", action);
  switch (action.type) {
    case FETCH_RESTAURANT_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RESTAURANT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        RestaurantData: action.payload,
        FilteredData: action.payload,
        error: null,
      };
    case FETCH_RESTAURANT_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        RestaurantData: [],
        FilteredData: [],
      };
    case FILTER_ALL:
      return {
        ...state,
        FilteredData: state.RestaurantData,
      };
    case FILTER_RATING:
      return {
        ...state,
        FilteredData: [...state.RestaurantData].sort(
          (a, b) => b.rating - a.rating
        ),
      };
    case FILTER_VEG:
      return {
        ...state,
        FilteredData: state.RestaurantData.filter(
          (item) => item.foodType === "Veg"
        ),
      };

    default:
      return state;
  }
};
export default restaurantReducer;
