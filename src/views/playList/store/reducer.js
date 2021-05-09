import * as actionTypes from "./constants";

const defaultState = {
    playlist:{},
    songs:[],
};

function reducer(state = defaultState, action) {
    switch(action.type){
        case actionTypes.GET_PLAYLIST:
            return {...state, playlist:action.playlist}
        case actionTypes.GET_SONGS:
            return {...state, songs:action.songs}

        default:
            return state
    }
}

export default reducer;