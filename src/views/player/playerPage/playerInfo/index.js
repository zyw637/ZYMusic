import React, { memo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils';


import {
  InfoWrapper,
  InfoLeft,
  InfoRight
} from './style';

export default memo(function PlayerInfo() {
  // props and hooks
  const [isSpread, setIsSpread] = useState(false);

  // redux hooks
  const { currentSong, songLyrics } = useSelector(state => ({
    currentSong: state.playerReducer.currentSong,
    songLyrics: state.playerReducer.songLyrics
  }), shallowEqual);

  // handle code
  
  const totalLyricCount = isSpread ? songLyrics.length : 13;

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const artist = (currentSong.ar && currentSong.ar[0].name) || "";
  const album = (currentSong.al && currentSong.al.name) || "";

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(picUrl, 198)} alt="" />
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{artist}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{album}</a>
        </div>


        <div className="lyric">
          <div className="lyric-info">
            {
              songLyrics.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
          </button>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
