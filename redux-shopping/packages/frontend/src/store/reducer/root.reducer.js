import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";

const rootReducers = combineReducers({
  cartReducer,
  productReducer,
});

export default rootReducers;
