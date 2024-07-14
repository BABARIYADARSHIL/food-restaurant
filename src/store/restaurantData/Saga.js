import { all } from "redux-saga/effects"
import { watchRestaurantData } from "./DataSaga"



export default function* rootSagaRestaurantData() {
    yield all([
        watchRestaurantData(),
    ])
}