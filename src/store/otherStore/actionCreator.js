import { getSearchRes } from "../../servers/search";
import * as actionTypes from "./constants";

const changeSearchResAction = songs => ({
    type: actionTypes.GET_SEARCH_RES,
    songs
})

export const getSearchResAction = keywords => {
    return dispatch => {
        try{
        getSearchRes(keywords).then(res => {
            dispatch(changeSearchResAction((res.result && res.result.songs) || []))
        })} catch{}
    }
}