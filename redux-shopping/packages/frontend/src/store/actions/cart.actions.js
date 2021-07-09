import { createAction } from "redux-actions";

export const getCartData = createAction("get cart data");
export const getCartDataToLocal = createAction("get cart data to local");

// 添加购物车时，先调用接口同步后再同步本地
export const addCartDataToLocal = createAction("add cart data to local");
export const addCartData = createAction("add cart data");

export const updateCartData = createAction("update cart data");
export const updateCartDataLocal = createAction("update cart data to local");

export const deleteCartData = createAction("delete cart data");
export const deleteCartDataToLocal = createAction("delete cart data to local");
