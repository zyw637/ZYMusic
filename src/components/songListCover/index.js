import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import {
    getSizeImage,
  } from "../../utils";

import { SongCoverWrapper } from "./style";

export default memo(function SongListCover(props) {
    const {info} = props;

    return (
        <SongCoverWrapper>
            <div className='cover-top'>
                <NavLink to={{
                    pathname:"/discover/playlist",
                    state:info,
                }}>
                    <img src={getSizeImage(info.picUrl || info.coverImgUrl, 200)} alt="" />
                </NavLink>
            </div>
            <div className="cover-bottom text-nowrap">
                {info.name}
            </div>
            <div className="cover-source text-nowrap">
                by {info.copywriter || info.creator.nickname} 
            </div>
        </SongCoverWrapper>
    )
})
