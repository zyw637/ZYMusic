import React, { memo, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { Link } from "react-router-dom";

import { SearchOutlined } from "@ant-design/icons";
import { InputWrapper } from "./style";
import { getSearchResAction } from '../../../store/otherStore/actionCreator';


export default memo(function Inputx() {

    const searchRef = useRef();
    const inputRef = useRef();
    

    const dispatch = useDispatch();

    const { songs } = useSelector(state => ({
        songs: state.searchReducer.songs
    }), shallowEqual)


    const click = () => {
        searchRef.current.style.cssText = "display:block;";
        inputRef.current.focus();
        
    }
    const aClick = () => {
        searchRef.current.style.cssText = "display:none;";
        inputRef.current.state.value="";
        
    }
    
    
  

    const inputChange = (e) => {
        
        if (e.target.value === "") {
            searchRef.current.style.cssText = "display:none;";
        }
        dispatch(getSearchResAction(e.target.value))

        
        
    }


    return (
        <InputWrapper>
            <button className="select-item" onClick={e => click()}><SearchOutlined />搜索</button>
            <div className="searchX" ref={searchRef}>
                <Input className="search" prefix={<SearchOutlined />} bordered={false} ref={inputRef} onChange={e => inputChange(e)} />
                <div className="resBox">
                    {
                        songs.map(item => {
                            
                            return (
                                <div className="res" key={item.id}>
                                    <Link to={{
                                        pathname: "/player",
                                        search: "?id=" + item.id,
                                        }}  onClick={e=>aClick()}>
                                        <span className="name">{item.name}</span>
                                        <span className="artist">{(item.artists && item.artists[0].name) || ""}</span>
                                    </Link>
                                </div>

                            )
                        })
                    }
                </div>
            </div>


        </InputWrapper>
    )
})
