import React, { memo,useEffect,useState,useRef,useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Slider} from 'antd';

import { shallowEqual, useDispatch,useSelector } from "react-redux";

import { getSizeImage,getPlayUrl,formatDate } from "@/utils";

import { getCurrentSongAction, 
        } from '../store/actionCreator';

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
export default memo(function PlayBar() {



    //redux hooks
    const dispatch = useDispatch();
    const {currentSong} = useSelector(state=>({
        currentSong: state.playerReducer.currentSong
    }),shallowEqual)


    //react hooks

    //useState
    const [currentTime, setCurrentTime] = useState(0);
    const [sliderProgress, setSliderProgress] = useState(0);
    const [isPlay, setisPlay] = useState(false);

    //useRef
    const audioRef =useRef();

    //useEffect
    useEffect(() => {
        dispatch(getCurrentSongAction(167876));
    }, [dispatch])

    useEffect(() => {
        audioRef.current.src = getPlayUrl(currentSong.id);
        audioRef.current.play().then(()=>{
            setisPlay(true);
        }).catch(err=>{

        })
    }, [currentSong])

    //useCallback
    const playMusic = useCallback(() => {
        isPlay ? audioRef.current.pause() : audioRef.current.play();
        setisPlay(!isPlay);
    },[isPlay])

    //others
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const arName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;
    const showDurationTime = formatDate(duration,"mm:ss");
    const showCurrentTime = formatDate(currentTime,"mm:ss");


    const timeUpdate = e =>{
        setCurrentTime(e.target.currentTime * 1000);
        setSliderProgress(e.target.currentTime * 1000 / duration * 100);
    }

    

    return (
        <PlaybarWrapper className="sprite_playbar">
            <div className="content wrap-v3">
                <Control isPlaying={isPlay}>
                    <button className="sprite_playbar btn prev" ></button>
                    <button className="sprite_playbar btn play" 
                        onClick={e=> playMusic()}></button>
                    <button className="sprite_playbar btn next" ></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/player">
                            <img src={getSizeImage(picUrl,35)} alt="" />    
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <span className="song-name">{currentSong.name}</span>
                            <a href="/#" className="singer-name">{arName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={0} value={sliderProgress}
                                tooltipVisible={false} />
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDurationTime}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator >
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop"
                            ></button>
                        <button className="sprite_playbar btn playlist"
                            >
                            
                        </button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)}></audio>
        </PlaybarWrapper>
    )
})
