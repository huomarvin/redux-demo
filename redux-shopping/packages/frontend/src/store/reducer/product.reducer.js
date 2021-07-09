import { handleActions as createReducer } from "redux-actions";
import { saveProducts } from "../actions/product.actions";

const initialState = {};

const productReducer = createReducer(
  {
    [saveProducts]: (_state, action) => ({ products: action.payload }),
  },
  initialState
);

export default productReducer;
