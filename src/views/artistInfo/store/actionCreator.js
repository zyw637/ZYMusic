import { getArtistAlbum, getArtistHotSong,getArtistMv, getMvPlayUrl } from "../../../servers/artist";
import * as actionTypes from "./constants";

const changeArtistHotSongAction = (artistInfo,hotSongs) => ({
    type:actionTypes.GET_ARTIST_HOT_SONG,
    artistInfo,
    hotSongs
})

const changeArtistAlbumAction = (albums) =>({
    type:actionTypes.GET_ARTIST_ALBUM,
    albums
})

const changeArtistMvAction = (mvs) =>({
    type:actionTypes.GET_ARTIST_MV,
    mvs
})

export const getArtistHotSongAction = id => {
    return dispatch =>{
        getArtistHotSong(id).then(res=>{
            dispatch(changeArtistHotSongAction(res.artist, res.hotSongs))
        })
    }
}

export const getArtistAlbumAction = id => {
    return dispatch =>{
        getArtistAlbum(id).then(res=>{
            dispatch(changeArtistAlbumAction(res.hotAlbums || []))
        })
    }
}

export const getArtistMvAction = id => {
    return (dispatch,getState) =>{
        getArtistMv(id).then(res=>{
            const mv = res.mvs || [];
            if(mv.length>0){
                dispatch(changeArtistMvAction([]));
                mv.map(resX=>{
                    return getMvPlayUrl(resX.id).then(resY=>{ 
                        const mvlist = [...(getState().artistInfoReducer.mvs)];
                        mvlist.push({...resX, playUrl:resY.data.url})
                        dispatch(changeArtistMvAction(mvlist));
                    })
                })
                
            }
            
        })
    }
}