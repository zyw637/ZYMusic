import React, { memo, useEffect} from 'react';
import { shallowEqual, useDispatch,useSelector } from "react-redux";

import { getSizeImage } from '../../utils';
import { getArtistHotSongAction,getArtistMvAction } from './store/actionCreator';
import Songs from "./songs";
import Albums from "./albums";
import Mvs from "./mvs";

import { ArtistInfoWrapper } from "./style";
export default memo(function ArtistInfo(props) {
    const artistId = props.location.state;

    //redux hooks
    const dispatch = useDispatch();
    const {artistInfo,hotSongs,mvs} = useSelector(state => ({
        artistInfo: state.artistInfoReducer.artistInfo,
        hotSongs:state.artistInfoReducer.hotSongs,
        mvs:state.artistInfoReducer.mvs,
    }),shallowEqual)
    //react hooks
    useEffect(() => {
        dispatch(getArtistHotSongAction(artistId))
        dispatch(getArtistMvAction(artistId))
    }, [dispatch,artistId])

    
    return (
        <ArtistInfoWrapper className="wrap-v1">
            <div className="info">
                <img src={getSizeImage(artistInfo.img1v1Url,200)} alt=""/>
                <div className="text">
                    <div>
                        <span className="name">{artistInfo.name}</span>
                        <span className="alias">{(artistInfo.alias && artistInfo.alias[0]) || ""}</span>
                    </div>
                    <div className="description">
                        {"介绍 \n"}
                        {artistInfo.briefDesc}、
                    </div>
                </div>
            </div>
            <h2>Songs</h2>
            <div className="songs">   
                {
                    hotSongs.map((item,index)=>{
                        return(
                            <Songs info={item} num={index} key={item.id}/>
                        )
                    })
                }
            </div>

            <h2>Album</h2>
            
            <Albums artistId={artistInfo.id}/>
            <h2>MVs</h2>
            <Mvs mvs={mvs}/>
            
        </ArtistInfoWrapper>
    )
})
