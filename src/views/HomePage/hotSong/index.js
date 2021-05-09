import React, { memo, useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopListAction } from '../store/actionCreator';
import SongListComponent from '../components/songListComponent';

export default memo(function HotSong() {

    //REDUX HOOKS
    const dispatch = useDispatch();
    
    const { hotSong } = useSelector(state=>({
        hotSong:state.homePageReducer.hotSong,
    }),shallowEqual)

    //react hooks
    useEffect(() => {
        
        dispatch(getTopListAction(1));
    }, [dispatch])

    return (
        <SongListComponent songs={hotSong}/>
    )
})
