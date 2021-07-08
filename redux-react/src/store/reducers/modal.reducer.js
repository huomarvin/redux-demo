import { HIDDEN, SHOW } from "../const/modal.const";

const initialState = { showState: false }

function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW: return { ...state, showState: action.payload }
        case HIDDEN: return { ...state, showState: action.payload }
        default: return state;
    }
}

export default reducer;