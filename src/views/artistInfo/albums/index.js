import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistAlbumAction } from '../store/actionCreator';
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import {
    getSizeImage,
} from "@/utils";


import { AlbumsWrapper } from './style';
export default memo(function Albums(props) {
    const {artistId}=props;
    //redux hooks
    const dispatch = useDispatch();

    const { albums } = useSelector(state => ({
        albums: state.artistInfoReducer.albums,
    }), shallowEqual)

    //react hooks
    useEffect(() => {
        dispatch(getArtistAlbumAction(artistId))

    }, [dispatch,artistId])

    return (
        <AlbumsWrapper className="wrap-v1">
            <div className="page">
                {
                    albums.map((item, index) => {
                        return (
                            <div className="content" key={item.id}>
                                <div className='image'>
                                    <NavLink to={{
                                        pathname: "/discover/album",
                                        state: item.id,
                                    }}>
                                        <img src={getSizeImage(item.picUrl, 200)} alt="" />
                                    </NavLink>
                                    
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="alias">{item.size+"~首歌"}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="left"><LeftOutlined style={{ fontSize: "25px" }} /></div>
            <div className="right"><RightOutlined style={{ fontSize: "25px" }} /></div>
        </AlbumsWrapper>
    )
})