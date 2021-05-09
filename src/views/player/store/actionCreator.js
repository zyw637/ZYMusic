import * as actionTypes from "./constants";
import { getSongDetails,getLyric, getSimiPlaylist,getSimiSong } from "@/servers/player";

import { parseLyric } from "@/utils";
const currentSongAction = currentSong => ({
    type: actionTypes.GET_SONG_DETAILS,
    currentSong
})

const songLyricsAction = songLyrics => ({
    type: actionTypes.GET_SONG_LYRICS,
    songLyrics
})

const simiPlayListAction = simiPlayList => ({
    type: actionTypes.GET_SIMI_PLAYLIST,
    simiPlayList
})

const simiSongAction = simiSong => ({
    type: actionTypes.GET_SIMI_SONG,
    simiSong
})

export const getCurrentSongAction = ids => {
    return dispatch => {
        getSongDetails(ids).then(res=>{
            dispatch(currentSongAction(res.songs[0]));
            
            getLyric(res.songs[0].id).then(resX =>{
                dispatch(songLyricsAction(parseLyric(resX.lrc.lyric)))
            })

            const id = res.songs[0].id;
            if (!id) return;
            getSimiPlaylist(id).then(res=>{
                dispatch(simiPlayListAction(res.playlists))
            })
            getSimiSong(id).then(res =>{
                dispatch(simiSongAction(res.songs))
            })
        })
    }
}

