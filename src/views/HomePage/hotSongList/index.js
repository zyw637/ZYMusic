import React, { memo, useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";


import { getHotSongListAction } from '../store/actionCreator';

import SongListCover from '../../../components/songListCover';
import { HotSongListWrapper } from './style';

export default memo(function HotSongList() {

    //REDUX HOOKS
    const dispatch = useDispatch();
    const {hotSongList} = useSelector(state=>({
        hotSongList:state.homePageReducer.hotSongList,
    }),shallowEqual)

    //react hooks
    useEffect(() => {
        dispatch(getHotSongListAction(10));
    }, [dispatch])

    return (
        <HotSongListWrapper className="wrap-v1">
            <div className="box">
                {
                hotSongList.map((item,index)=>{
                    return(
                        <SongListCover key={item.id} info={item} />
                    )})
                }
            </div>
        </HotSongListWrapper>
    )
})
