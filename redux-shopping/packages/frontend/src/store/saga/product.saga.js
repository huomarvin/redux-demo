import { takeEvery, put } from "redux-saga/effects";
import { loadProducts, saveProducts } from "../actions/product.actions";
import axios from "axios";

function* handleLoadProducts() {
  const { data } = yield axios.get("http://localhost:3005/goods");
  yield put(saveProducts(data));
}

const productSaga = function* () {
  yield takeEvery(loadProducts, handleLoadProducts);
};

export default productSaga;
