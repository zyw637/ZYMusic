import * as actionTypes from "./constants";

const defaultState = {
    topBanner: [],
    hotSongList: [],
    hotSong: [],
    newSong:[],
    hotArtists:[],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.GET_TOP_BANNER:
            return { ...state, topBanner: action.topBanner }
        case actionTypes.GET_HOT_SONG_LIST:
            return { ...state, hotSongList: action.hotSongList }
        case actionTypes.GET_HOT_SONG:
            return { ...state, hotSong: action.hotSong }
        case actionTypes.GET_NEW_SONG:
            return { ...state, newSong: action.newSong }
        case actionTypes.GET_HOT_ARTISTS:
            return { ...state, hotArtists: action.hotArtists }

        default:
            return state;
    }
}

export default reducer;