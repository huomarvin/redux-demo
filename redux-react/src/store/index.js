import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import countReducer from "./reducers/count.reducer";
import modalReducer from "./reducers/modal.reducer";
// import logger from "./middleware/logger";
// import thunk from "./middleware/thunk";
// import thunk from "redux-thunk";
// import countSaga from "./saga/count.saga";
import rootSaga from "./saga/root.saga";
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  countReducer,
  modalReducer,
});
// const middles = applyMiddleware(logger, thunk);
const middles = applyMiddleware(sagaMiddleware);

const store = createStore(reducers, middles);

sagaMiddleware.run(rootSaga);

export default store;
