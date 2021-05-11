import * as actionTypes from "./constants";

const defaultState = {
    songs:[],
}

function reducer(state = defaultState,action){
    switch(action.type){
        case actionTypes.GET_SEARCH_RES:
            return {...state, songs:action.songs}
        default:
            return state
    }
}

export default reducer;