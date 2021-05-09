import React, { memo } from 'react'

import DivideLine from '../../components/divideLine';

import TopBanner from "./topBanner";
import HotSongList from "./hotSongList";
import HotSong from "./hotSong";
import NewSong from "./newSong";
import HotArtists from "./hotArtists";
export default memo(function HomePage() {
    return (
        <div>
            <TopBanner />
            <DivideLine title={"Recommended playlists"} more={""}/>
            <HotSongList />
            <DivideLine title={"Today's biggest hits"} more={""}/>
            <HotSong />
            <DivideLine title={"Quick pick new song"} more={""}/>
            <NewSong />
            <DivideLine title={"ARTISTS"} more={""}/>

            <HotArtists />
            <DivideLine title={""} more={""}/>
        </div>
    )
})

