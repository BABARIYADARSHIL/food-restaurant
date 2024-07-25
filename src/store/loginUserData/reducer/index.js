import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_FAILED,
  FETCH_USER_DATA_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
} from "../../type";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  token: localStorage.getItem("jwtToken"),
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthenticated: false,
      };
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        token: action.payload,
      };
    case FETCH_USER_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        token: null,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
