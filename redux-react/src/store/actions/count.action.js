// import { DECREMENT, INCREMENT, ASYNC_INCREMENT } from "../const/count.const";

import { createAction } from "redux-actions";

export const increment = createAction("increment");
export const decrement = createAction("decrement");

// export const increment = (payload) => ({ type: INCREMENT, payload });
// export const decrement = (payload) => ({ type: DECREMENT, payload });
// export const asyncIncrement = (payload) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({ type: INCREMENT, payload });
//   }, 2000);
// };

// export const sagaIncrement = (payload) => ({ type: ASYNC_INCREMENT, payload });
