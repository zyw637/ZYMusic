import {combineReducers} from "redux";

import {reducer as homePageReducer} from "../views/HomePage/store";
import {reducer as playerReducer} from "../views/player/store";
import {reducer as playlistReducer} from "../views/playList/store";
import {reducer as artistInfoReducer} from "../views/artistInfo/store";

const cReducer = combineReducers({
    homePageReducer,
    playerReducer,
    playlistReducer,
    artistInfoReducer,
});
export default cReducer