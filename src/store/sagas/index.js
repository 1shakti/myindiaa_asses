import { all } from "redux-saga/effects";
import fetchProductListSaga from "./fetchProductListSaga";

export default function* rootSaga(){
    yield all([
        fetchProductListSaga()
    ])
}