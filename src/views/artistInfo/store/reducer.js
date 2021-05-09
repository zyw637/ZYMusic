import * as actionTypes from "./constants";

const defaultState = {
    artistInfo:{},
    hotSongs:[],
    albums:[],
    mvs:[],
    
}

function reducer(state = defaultState, action){
    switch(action.type){
        case actionTypes.GET_ARTIST_HOT_SONG:
            return {...state, artistInfo:action.artistInfo, hotSongs:action.hotSongs }
        case actionTypes.GET_ARTIST_ALBUM:
            return {...state, albums:action.albums}
        case actionTypes.GET_ARTIST_MV:
            return {...state, mvs:action.mvs}
        default:
            return state;
    }
}

export default reducer;