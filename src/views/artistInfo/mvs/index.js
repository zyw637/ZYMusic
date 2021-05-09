import React, { memo, useRef } from 'react';

import { LeftOutlined, RightOutlined, PlayCircleOutlined,CloseOutlined } from "@ant-design/icons";

import { MvsWrapper } from "./style";
export default memo(function Mvs(props) {
    const { mvs } = props;

    const videoRef = useRef();
    const mvpageRef = useRef();

    const player = url=>{
        videoRef.current.src= url;
        videoRef.current.play();
        
        mvpageRef.current.style.cssText = "display:flex;"
    }
    const close = ()=>{
        videoRef.current.pause(); 
        mvpageRef.current.style.cssText = "display:none;"
    }
    return (
        <MvsWrapper >
            <div className="page">
                {
                    mvs.map((item, index) => {

                        return (
                            <div className="box" key={index}>
                                <div className="image">
                                    <img src={item.imgurl16v9} alt=""></img>
                                </div>
                                <button className="player" onClick={e => player(item.playUrl)}
                                > <PlayCircleOutlined style={{ fontSize: "40px" }} /></button>
                                <div className="name">{item.name}</div>
                                <div className="time">{item.publishTime}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="left"><LeftOutlined style={{ fontSize: "25px" }} /></div>
            <div className="right"><RightOutlined style={{ fontSize: "25px" }} /></div>
            <div className="mvpage" ref={mvpageRef}>
                <div className="c">
                <video ref={videoRef} width="647.2" height="400" className="vdo" controls>
                    <source src="" type="video/mp4" />
                    
                </video>
                <button className="close" onClick={e=>close()}
                    ><CloseOutlined style={{fontSize:"20px"}}/></button>
                </div>
                
            </div>
        </MvsWrapper>
    )
})
