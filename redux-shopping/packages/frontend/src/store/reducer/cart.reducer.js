import { handleActions as createReducer } from "redux-actions";
import {
  addCartDataToLocal,
  getCartDataToLocal,
  deleteCartDataToLocal,
  updateCartDataLocal,
} from "../actions/cart.actions";
const initialState = [];

function handleAddCartData(state, action) {
  const carts = JSON.parse(JSON.stringify(state));
  const product = carts.find((product) => product.gid === action.payload.gid);
  // 处理存在的情况
  if (product) {
    product.count = parseInt(product.count) + 1;
  } else {
    carts.push(action.payload);
  }
  // 处理不不存在的情况
  return carts;
}

function handleGetCartDataToLocal(_state, action) {
  return action.payload;
}

function handleDeleteCartData(state, action) {
  const newState = JSON.parse(JSON.stringify(state));
  newState.splice(action.payload, 1);
  return newState;
}

function handleUpdateCartData(state, action) {
  const newState = JSON.parse(JSON.stringify(state));
  const product = newState.find(
    (product) => product.gid === action.payload.gid
  );
  product.count = action.payload.count;
  return newState;
}

const productReducer = createReducer(
  {
    [addCartDataToLocal]: handleAddCartData,
    [getCartDataToLocal]: handleGetCartDataToLocal,
    [deleteCartDataToLocal]: handleDeleteCartData,
    [updateCartDataLocal]: handleUpdateCartData,
  },
  initialState
);

export default productReducer;
