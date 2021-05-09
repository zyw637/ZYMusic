import React, { memo } from 'react';
import { NavLink } from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeadLift, HeadMiddle, HeadRight } from "./style";
export default memo(function Header() {
    return (
        <HeaderWrapper>
            <div className="wrap-v1 content">
                <HeadLift >
                    <a className="logo sprite_01" href="#/">网易云音乐</a>
                </HeadLift>
                <HeadMiddle>
                    <div className="select-item"><NavLink exact to="/" activeStyle={{ color: "#fff" }}>首页</NavLink></div>
                    <div className="select-item"><NavLink to="/discover" activeStyle={{ color: "#fff" }}>发现</NavLink></div>
                    <div className="select-item"><NavLink to="/library" activeStyle={{ color: "#fff" }}>音乐库</NavLink></div>
                </HeadMiddle>
                <HeadRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                </HeadRight>
            </div>
        </HeaderWrapper>
    )
})
