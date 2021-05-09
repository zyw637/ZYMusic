import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getHotArtistsAction } from '../store/actionCreator';
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import {
    getSizeImage,
} from "@/utils";


import { ArtistWrapper } from './style';
export default memo(function HotArtists() {
    //redux hooks
    const dispatch = useDispatch();

    const { hotArtists } = useSelector(state => ({
        hotArtists: state.homePageReducer.hotArtists,
    }), shallowEqual)

    //react hooks
    useEffect(() => {
        dispatch(getHotArtistsAction(10))

    }, [dispatch])

    return (
        <ArtistWrapper className="wrap-v1">
            <div className="page">
                {
                    hotArtists.map((item, index) => {
                        return (
                            <div className="content" key={item.id}>
                                <div className='image'>
                                    <NavLink to={{
                                        pathname: "/discover/artistInfo",
                                        state: item.id,
                                    }}>
                                        <img src={getSizeImage(item.img1v1Url, 200)} alt="" />
                                    </NavLink>
                                    
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="alias">{item.alias[0]}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="left"><LeftOutlined style={{ fontSize: "25px" }} /></div>
            <div className="right"><RightOutlined style={{ fontSize: "25px" }} /></div>
        </ArtistWrapper>

    )
})
