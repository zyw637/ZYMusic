import React, { memo} from 'react';
import {useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils';



import { SimiPlayListWrapper } from './style';

import HeaderTheme from '../components/headerTheme';

export default memo(function SimiPlayList() {

  // redux hooks
  const { simiPlayList } = useSelector(state => ({
    simiPlayList: state.playerReducer.simiPlayList,
  }), shallowEqual);
 
  return (
    <SimiPlayListWrapper>
      <HeaderTheme title={"包含这首歌的歌单"}/>
      <div className="songs">
        {
          simiPlayList.map((item, index) => {
            return (
              
              <div className="song-item" key={item.id}>
                <a className="image" href="/#">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="#/" className="name">{item.name}</a>
                  <div className="auchor">
                    by 
                    <a href="#/" className="nickname">{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiPlayListWrapper>
  )
})
