import * as actionTypes from "./constants";

const defaultState = {
    currentSong:{},
    songLyrics:[],
    simiPlayList:[],
    simiSong:[],
};

function reducer(state=defaultState, action){
    switch(action.type){
        case actionTypes.GET_SONG_DETAILS:
            return {...state, currentSong: action.currentSong}
        case actionTypes.GET_SONG_LYRICS:
            return {...state, songLyrics: action.songLyrics}
        case actionTypes.GET_SIMI_PLAYLIST:
            return {...state, simiPlayList: action.simiPlayList}
        case actionTypes.GET_SIMI_SONG:
            return {...state, simiSong: action.simiSong}
        default:
            return state;
    }
}

export default reducer;