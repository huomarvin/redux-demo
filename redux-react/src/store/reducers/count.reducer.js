// import { DECREMENT, INCREMENT } from "../const/count.const";
import { handleActions as createReducer } from "redux-actions";
import { increment, decrement } from "../actions/count.action";

const initialState = { count: 0 };

// const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + action.payload };
//     case DECREMENT:
//       return { ...state, count: state.count - action.payload };
//     default:
//       return state;
//   }
// };

// export default countReducer;

export default createReducer(
  {
    [increment]: (state, action) => ({ count: state.count + action.payload }),
    [decrement]: (state, action) => ({ count: state.count - action.payload }),
  },
  initialState
);
