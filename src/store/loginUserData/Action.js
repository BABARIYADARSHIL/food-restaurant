
import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_FAILED,
  FETCH_USER_DATA_SUCCESS,
} from "../type/Type";

export const loginRequest = (credentials) => ({
  type: FETCH_USER_DATA,
  payload: credentials,
});
export const loginSuccess = (users) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: users,
});

export const loginFailure = (error) => ({
  type: FETCH_USER_DATA_FAILED,
  payload: error,
});
