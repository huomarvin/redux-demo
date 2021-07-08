import { all } from "redux-saga/effects";
import countSaga from "./count.saga";
import modalSaga from "./modal.saga";

const root = function* () {
  yield all([countSaga(), modalSaga()]);
};
export default root;
