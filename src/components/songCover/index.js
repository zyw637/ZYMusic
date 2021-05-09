import React, { memo } from 'react'
import { useDispatch } from "react-redux";
import { getCurrentSongAction } from "../../views/player/store/actionCreator";

import {
    getSizeImage,
  } from "../../utils";

import { PlayCircleOutlined } from "@ant-design/icons";
import { SongCoverXWrapper } from "./style";

export default memo(function SongCover(props) {
    const {info} = props;
    const dispatch = useDispatch();
    const playMusic = item => {
        dispatch(getCurrentSongAction(info.id));
      }
    return (
        <SongCoverXWrapper>
            <div className='cover-top'>
                <img src={getSizeImage(info.al.picUrl, 200)} alt="" />
            </div>
            <button className="player" 
                onClick={e=>playMusic(info)}> <PlayCircleOutlined style={{fontSize:"40px"}}/></button>
            
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                by {info.ar[0].name} 
            </div>
        </SongCoverXWrapper>
    )
})
