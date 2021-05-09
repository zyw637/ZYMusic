import React, { memo} from 'react';
import {useDispatch,useSelector, shallowEqual } from 'react-redux';

import { getCurrentSongAction } from "../../store/actionCreator";
import HeaderTheme from '../components/headerTheme';
import { SimiSongWrapper } from './style';

export default memo(function SimiSong() {
  const { simiSong } = useSelector(state => ({
    simiSong: state.playerReducer.simiSong
  }), shallowEqual);

  const dispatch = useDispatch();
  const playMusic = item => {
    dispatch(getCurrentSongAction(item.id));
  }

  return (
    <SimiSongWrapper>
      <HeaderTheme title="相似歌曲" />
      <div className="songs">
        {
          simiSong.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="#/">{item.name}</a>
                  </div>
                  <div className="artist">
                    <a href="#/">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"
                    onClick={e => playMusic(item)}></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiSongWrapper>
  )
})
