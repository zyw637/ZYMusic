import HomePage from "../views/HomePage";
import Discover from "../views/Discover";
import Library from "../views/Library";
import PlayerPage from "../views/player/playerPage";
import PlayList from "../views/playList";
import ArtistInfo from "../views/artistInfo";
import AlbumPage from "../views/albumPage";

const routes = [
    {
        path:"/",
        exact:true,
        component:HomePage,
    },
    {
        path:"/discover",
        exact:true,
        component:Discover,
    },
    {
        path:"/library",
        component:Library,
    },
    {
        path:"/player",
        component: PlayerPage
    },
    {
        path:"/discover/playlist",
        component: PlayList
    },
    {
        path:"/discover/artistInfo",
        component: ArtistInfo
    },
    {
        path:"/discover/album",
        component: AlbumPage
    },

]

export default routes;