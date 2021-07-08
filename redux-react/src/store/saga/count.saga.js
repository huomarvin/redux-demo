import { ASYNC_INCREMENT } from "../const/count.const";
import { increment } from "../actions/count.action";
import { takeEvery, put, delay } from "redux-saga/effects";

function* increment_async_fn(action) {
  yield delay(2000);
  yield put(increment(action.payload));
}

const countSaga = function* () {
  yield takeEvery(ASYNC_INCREMENT, increment_async_fn);
};

export default countSaga;
