import { SHOW, HIDDEN, ASYNC_SHOW } from "../const/modal.const";

export const show = () => ({ type: SHOW, payload: true });
export const hidden = () => ({ type: HIDDEN, payload: false });
export const sagaShow = () => ({ type: ASYNC_SHOW, payload: true });
