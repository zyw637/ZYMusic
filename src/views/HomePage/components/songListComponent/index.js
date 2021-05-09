import React, { memo,useRef} from 'react';

import { Carousel } from 'antd';
import {
    LeftOutlined,
    RightOutlined
  } from '@ant-design/icons';

import SongCover from '../../../../components/songCover';
import { SongListComponentWrapper } from './style';

export default memo(function SongListComponent(props) {
    const {songs} = props;
    const carouselRef = useRef();

    return (
        <SongListComponentWrapper className="wrap-v1">
            <div className="content">
            <Carousel dots={false} ref={carouselRef}>
                {
                    [0, 1].map(itemx => {
                        return (
                            <div className="page" key={itemx}>
                                {
                                    songs.slice(itemx * 5, (itemx + 1) * 5).map(itemy => {
                                        return (
                                            <SongCover key={itemy.id} info={itemy} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
            </div>
            <button className="btnLeft" onClick={e => carouselRef.current.prev()}><LeftOutlined style={{fontSize:"25px"}}/></button>
            <button className="btnRight" onClick={e => carouselRef.current.next()}><RightOutlined style={{fontSize:"25px"}}/></button>
            
        </SongListComponentWrapper>
    )
})
