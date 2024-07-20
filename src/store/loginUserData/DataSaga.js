import { call, put, takeEvery } from "redux-saga/effects";
import { UsersData } from "../../api/UserData";
import { loginFailure, loginSuccess } from "./Action";
import { FETCH_USER_DATA } from "../type/Type";

export function* fetchUserData(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(UsersData);
    const users = response.data.users;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      const token = {
        value: btoa(`${user.email}:${user.password}`),
        createdAt: new Date().getTime(),
      };
      localStorage.setItem("jwtToken", JSON.stringify(token));
      yield put(loginSuccess({ user, token }));
    } else {
      yield put(loginFailure("Invalid email or password"));
    }
  } catch (error) {
    yield put(loginFailure("Network Error"));
  }
}

export function* watchFetchUserData() {
  yield takeEvery(FETCH_USER_DATA, fetchUserData);
}
