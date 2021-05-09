import request from "./axios";
export function getPlaylist(id) {
    return request({
        url: "/playlist/detail",
        params: {
            id
        }
    })
}