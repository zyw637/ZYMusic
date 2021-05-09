import React, { memo,useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { formatDate } from "@/utils";
import { PlayCircleOutlined } from "@ant-design/icons";

import { getCurrentSongAction } from "@/views/player/store/actionCreator";
import { getSongsAction } from "../../store/actionCreator";
import { SongWrapper } from "./style";
export default memo(function Song(props) {
    const{id,num} = props;
    
    const dispatch = useDispatch();
    const {songs} = useSelector(state=>({
        songs: state.playlistReducer.songs,
    }),shallowEqual)
    
    useEffect(() => {
        dispatch(getSongsAction(id));
    }, [dispatch,id])

    const playMusic = item => {
        dispatch(getCurrentSongAction(item.id));
    }

    const time = formatDate((songs[num] && songs[num].dt) || 0,"mm:ss");

    return (
        <SongWrapper>
            <div className="num">
                <button className="btn" onClick={e=>playMusic(songs[num])}>
                    <PlayCircleOutlined style={{fontSize:"18px"}}/></button>
                <span className="span">{num+1}</span>
                
            </div>
            
            <div className="name">{(songs[num] && songs[num].name) || ""}</div>
            <div className="time">{time}</div>
        </SongWrapper>
    )
})
