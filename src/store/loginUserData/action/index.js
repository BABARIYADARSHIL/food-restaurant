import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_FAILED,
  FETCH_USER_DATA_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
} from "../../type/index";

export const loginRequest = (credentials) => ({
  type: FETCH_USER_DATA,
  payload: credentials,
});
export const loginSuccess = (token) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: FETCH_USER_DATA_FAILED,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
