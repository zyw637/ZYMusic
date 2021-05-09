import React, { memo,useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from "react-redux";

import ListInfo from "./listInfo";

import { getPlaylistAction } from "./store/actionCreator";

import Song from "./components/song";
import { PlayListWrapper } from "./style";
export default memo(function PlayList(props) {
    const info = props.location.state;
    
    //redux hooks
    const dispatch = useDispatch();
    const { playlist} = useSelector(state=>({
        playlist: state.playlistReducer.playlist,
    }),shallowEqual);

    //react hooks
    useEffect(() => {
        dispatch(getPlaylistAction(info.id))
    }, [ dispatch, info.id ])

    
    //others
    const songs = (playlist && playlist.trackIds) || [];
    
    
    return (
        <PlayListWrapper>
            <ListInfo playlist={playlist}/>
            
            <div className="songs wrap-v1">
                
                {
                    songs.map((item,index)=>{
                        return <Song id={item.id} num={index} key={item.id}/>
                    })
                }
            </div>
            <div>asd</div>
        </PlayListWrapper>
    )
})
