import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import * as _api from "../../services/product-api"
import { clearErrors, returnErros } from "../actions/errorAction";
import { productListFailure, productListSuccess } from "../actions/productListAction";

function* asyncfetchProductListSaga(action){
    try{
        yield put(clearErrors());
        let res = yield call(_api.fetchProductList);
        yield put(productListSuccess({res}));
    }catch(e){
        yield put(productListFailure({error:e}));
        yield put(returnErros({msg: e.message, status: true}));
    }
} 

export default function* fetchProductListSaga(){
    yield takeLatest(types.FETCH_PRODUCTLIST_REQUEST, asyncfetchProductListSaga)
}