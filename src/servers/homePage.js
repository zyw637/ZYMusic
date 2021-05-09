import request from "./axios";

export function getTopBanner(){
    return request({
        url: "/banner"
    })
}

export function getHotSongList(limit){
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}

export function getTopList(idx){
    //idx: 0=新歌榜 1=热歌榜 2=原创榜  3=飙升榜
    return request({
        url: "/top/list",
        params: {
            idx
        }
    })
}
