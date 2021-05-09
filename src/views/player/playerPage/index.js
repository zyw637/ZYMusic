import React, { memo } from 'react'

import SimiPlayList from "./simiPlayList";
import PlayerInfo from "./playerInfo";
import SimiSong from "./simiSong";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
export default memo(function PlayerPage() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v3">
                <PlayerLeft>
                    <PlayerInfo />                    
                </PlayerLeft>
                <PlayerRight>
                    <SimiPlayList/>
                    <SimiSong />
                    <h2>downLoad</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
