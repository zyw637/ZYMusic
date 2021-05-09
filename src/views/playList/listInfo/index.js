import React, { memo } from 'react';

import { getSizeImage } from '@/utils';
import { ListInfoWrapper } from "./style";
export default memo(function ListInfo(props) {
    const {playlist} = props;
    return (
        <ListInfoWrapper className="wrap-v1">
            <div className="content">
                <div className="img">
                <img src={getSizeImage(playlist.coverImgUrl, 250)} alt="" />
                </div>
                <div className="info">
                    <h2 className="name">{playlist.name}</h2>
                    <div className="album">
                        歌单 • <span>{playlist.trackCount}首歌</span> • <span>{(playlist.creator && playlist.creator.nickname) || ""}</span>
                    </div>
                    <div className="description">
                        {"介绍 \n"}
                        {playlist.description}、
                        
                    </div>
                </div>
            </div>
        </ListInfoWrapper>
    )
})
