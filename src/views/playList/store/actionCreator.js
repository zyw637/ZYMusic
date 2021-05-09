import * as actionTypes from "./constants";
import { getPlaylist } from "@/servers/playlist";
import { getSongDetails } from "@/servers/player";

const playlistAction = playlist =>({
    type:actionTypes.GET_PLAYLIST,
    playlist
})

const songsAction = songs =>({
    type:actionTypes.GET_SONGS,
    songs
})

export const getPlaylistAction = id =>{
    return (dispatch) => {
        getPlaylist(id).then(res=>{
            dispatch(playlistAction(res.playlist));            
        })
    }
}

export const getSongsAction = ids =>{
    return (dispatch,getState) =>{
        getSongDetails(ids).then(res=>{   
            
            const songsList = getState().playlistReducer.songs;
            const newSongsList = [...songsList, (res.songs && res.songs[0]) || ""];
            
            dispatch(songsAction(newSongsList));
            
        })
    }
}