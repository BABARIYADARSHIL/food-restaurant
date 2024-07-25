import { call, put, takeEvery } from "redux-saga/effects";
import { UsersData } from "../../../api/UserData";
import { loginFailure, loginSuccess } from "../action/index";
import { FETCH_USER_DATA, LOGOUT, LOGOUT_SUCCESS } from "../../type";
import { toast } from "react-toastify";

export function* fetchUserData(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(UsersData, email, password);
    const { token } = response.data;

    if (token) {
      localStorage.setItem("jwtToken", token);
      yield put(loginSuccess(token));
      toast.success("Login successful!");
    } else {
      yield put(loginFailure("Invalid email or password"));
      toast.error("Invalid email or password");
    }
  } catch (error) {
    let errorMessage = "Network Error";

    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = "Invalid email or password";
      } else if (error.response.status === 404) {
        errorMessage = "User not found";
      } else {
        errorMessage = error.response.data?.message || "Unknown Error";
      }
    }

    yield put(loginFailure(errorMessage));
    toast.error(errorMessage);
  }
}

function* logoutSaga() {
  try {
    localStorage.removeItem("jwtToken");
    yield put({ type: LOGOUT_SUCCESS });
    toast.info("Logged out successfully");
  } catch (error) {
    yield put({ type: loginFailure, error: "Failed to log out" });
    toast.error("Failed to log out");
  }
}

export function* watchFetchUserData() {
  yield takeEvery(FETCH_USER_DATA, fetchUserData);
  yield takeEvery(LOGOUT, logoutSaga);
}
