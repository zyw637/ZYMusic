import React, { memo, useEffect} from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopListAction } from '../store/actionCreator';
import SongListComponent from '../components/songListComponent';

export default memo(function NewSong() {

    //REDUX HOOKS
    const dispatch = useDispatch();
    const { newSong } = useSelector(state=>({
        newSong:state.homePageReducer.newSong,
    }),shallowEqual)

    //react hooks
    useEffect(() => {
        
        dispatch(getTopListAction(0));
    }, [dispatch])


    return (
        <SongListComponent songs={newSong}/>
    )
})
