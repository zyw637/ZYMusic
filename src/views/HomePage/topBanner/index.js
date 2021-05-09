import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "../store/actionCreator";

import { Carousel } from 'antd';
import { TopBannerWrapper, Banner, BannerControl } from "./style";
export default memo(function TopBanner() {

    //redux hooks
    const dispatch = useDispatch();

    const { topBanner } = useSelector(state => ({
        topBanner: state.homePageReducer.topBanner,
    }), shallowEqual)

    // react hooks
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])

    const bannerRef = useRef()
    const [currentIndex, setcurrentIndex] = useState(0)
    const bannerChange = useCallback((from, to) => {
        setcurrentIndex(to)
    }, [])

    const bgImage = topBanner[currentIndex] && (topBanner[currentIndex].imageUrl
        + "?imageView&blur=40x20")

    return (
        <TopBannerWrapper bgImage={bgImage} className="wrap-v1">
            <div className="banner wrap-v2">
                <Banner>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanner.map((item, index) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </Banner>

                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </TopBannerWrapper>
    )
})
