import { all } from "redux-saga/effects";
import { watchFetchUserData } from "../dataSaga/index";

export default function* rootSaga() {
  yield all([watchFetchUserData()]);
}
