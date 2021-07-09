import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  addCartData,
  addCartDataToLocal,
  deleteCartData,
  deleteCartDataToLocal,
  getCartData,
  getCartDataToLocal,
  updateCartData,
  updateCartDataLocal,
} from "../actions/cart.actions";

function* handleLoadProducts(action) {
  const { data } = yield axios.post("http://localhost:3005/cart/add", {
    gid: action.payload,
  });
  yield put(addCartDataToLocal(data));
}

function* handleGetCartData() {
  const { data } = yield axios.get("http://localhost:3005/cart");
  yield put(getCartDataToLocal(data));
}

function* handleDeleteCartData(action) {
  const { data } = yield axios.delete("http://localhost:3005/cart/delete", {
    params: {
      cid: action.payload,
    },
  });
  yield put(deleteCartDataToLocal(data.index));
}

function* handleUpdateCartData(action) {
  const { data } = yield axios.put(
    "http://localhost:3005/cart",
    action.payload
  );
  yield put(updateCartDataLocal(data));
}

const cartSaga = function* () {
  yield takeEvery(addCartData, handleLoadProducts);
  yield takeEvery(getCartData, handleGetCartData);
  yield takeEvery(deleteCartData, handleDeleteCartData);
  yield takeEvery(updateCartData, handleUpdateCartData);
};

export default cartSaga;
