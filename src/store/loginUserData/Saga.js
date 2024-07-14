import { all } from "redux-saga/effects"
import { watchFetchUserData } from "./DataSaga"


export default function* rootSaga() {
    yield all([
        watchFetchUserData(),
    ])
}