import {call, put, takeEvery } from "redux-saga/effects";
import {UsersData} from '../../api/UserData'
import {FETCH_USER_DATA, FETCH_USER_DATA_FAILED, FETCH_USER_DATA_SUCCESS } from "../type/Type";


export function*fetchUserData(){
    try{
        const response = yield call(UsersData);
        yield put({type: FETCH_USER_DATA_SUCCESS, payload: response.data.users})
    }catch(e){
        yield put({type: FETCH_USER_DATA_FAILED, payload:e.message})
    }
}


export function* watchFetchUserData(){
    yield takeEvery(FETCH_USER_DATA, fetchUserData);

}