import React, { memo,useRef } from 'react';

import { AlbumPageWrapper } from "./style";
export default memo(function AlbumPage() {
    const vdref = useRef();
    const dref = useRef();
    const playv = ()=>{
        vdref.current.play();
        dref.current.style.cssText="display:block";
    }

    return (
        <AlbumPageWrapper>
            <img src="http://p1.music.126.net/lvycoYOxYNxjIflL2DonLA==/109951164430807457.jpg" alt="" />
            <div className="vdo" ref={dref}>
                <video ref={vdref} width="320" height="240" controls>
                    <source
                        
                        type="video/mp4" />
                </video>
            </div>
            <button  onClick={e=>playv()} className="btn">play</button>
            
        </AlbumPageWrapper>
    )
})
