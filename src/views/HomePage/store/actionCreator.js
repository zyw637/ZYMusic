import * as actionTypes from "./constants";
import { 
    getTopBanner,
    getHotSongList,
    getTopList
 } from "@/servers/homePage";

import { getHotArtists } from "../../../servers/artist";


const changeTopBannerAction = topBanner =>({
    type:actionTypes.GET_TOP_BANNER,
    topBanner
});

const changeHotSongListAction = hotSongList =>({
    type:actionTypes.GET_HOT_SONG_LIST,
    hotSongList
});

const changeHotSongAction = hotSong =>({
    type:actionTypes.GET_HOT_SONG,
    hotSong
});

const changeNewSongAction = newSong =>({
    type:actionTypes.GET_NEW_SONG,
    newSong
});

const changeHotArtistAction = hotArtists =>({
    type:actionTypes.GET_HOT_ARTISTS,
    hotArtists
});

export const getTopBannerAction = () =>{
    return dispatch => {
        getTopBanner().then(res=>{
            dispatch(changeTopBannerAction(res.banners))
        })
    }
}

export const getHotSongListAction = (limit = 8) =>{
    return dispatch => {
        getHotSongList(limit).then(res=>{
            dispatch(changeHotSongListAction(res.result))
        })
    }
}

export const getTopListAction = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx) {
                //新歌榜
                case 0:
                    dispatch(changeNewSongAction(res.playlist.tracks))
                    break;
                //热歌榜
                case 1:
                    dispatch(changeHotSongAction(res.playlist.tracks))
                    break;
                //原创   
                case 2:
                    
                    break;
                //飙升
                case 3:
                    
                    break;
                default:
            }
        })
    }
} 

export const getHotArtistsAction = limit =>{
    return dispatch => {
        getHotArtists(limit).then(res =>{
            dispatch(changeHotArtistAction(res.artists))
        })
    }
}
