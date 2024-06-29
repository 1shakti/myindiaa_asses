import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { persistStore } from "redux-persist";
import rootSaga from "./sagas";
import { composeWithDevTools } from "@redux-devtools/extension";

const sagaMiddleware =  createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;
export { store, persistor}