import { all } from "redux-saga/effects";
import productSaga from "./product.saga";
import cartSaga from "./cart.saga";

const rootSaga = function* () {
  yield all([productSaga(), cartSaga()]);
};

export default rootSaga;
