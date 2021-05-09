import React, { memo } from 'react';
import {useDispatch } from "react-redux";


import { formatDate } from "@/utils";
import { getCurrentSongAction } from "@/views/player/store/actionCreator";

import { SongsWrapper } from "./style";
import { PlayCircleOutlined } from "@ant-design/icons";
export default memo(function Songs(props) {

    const{info,num} = props;
    
    const dispatch = useDispatch();


    const playMusic = id => {
        dispatch(getCurrentSongAction(id));
    }

    const time = formatDate(info.dt,"mm:ss");

    return (
        <SongsWrapper>
            <div className="num">
                <button className="btn" onClick={e=>playMusic(info.id)}>
                    <PlayCircleOutlined style={{fontSize:"18px"}}/></button>
                <span className="span">{num+1}</span>
                
            </div>
            
            <div className="name">{info.name}</div>
            <div className="time">{time}</div>
        </SongsWrapper>
    )
})
