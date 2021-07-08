import { takeEvery, put, delay } from "redux-saga/effects";
import { ASYNC_SHOW } from "../const/modal.const";
import { show } from "../actions/modal.action";

function* showModal() {
  yield delay(2000);
  yield put(show());
}

const modalSaga = function* () {
  yield takeEvery(ASYNC_SHOW, showModal);
};

export default modalSaga;
