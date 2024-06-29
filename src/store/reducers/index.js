import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import errorReducer from "./errorReducer";
import productListReducer from "./productListReducer";

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist:[]
}

const rootReducer = combineReducers({
    errorReducer,
    productListReducer
});

export default persistReducer(persistConfig, rootReducer);