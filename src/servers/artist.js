import request from "./axios";

export function getHotArtists(limit) {
    return request({
        url: "/top/artists",
        params: {
            offset:0,
            limit
        }
    })
}

export function getArtistHotSong(id) {
    return request({
        url: "/artists",
        params: {
            id
        }
    })
}

export function getArtistAlbum(id) {
    return request({
        url: "/artist/album",
        params: {
            id
        }
    })
}

export function getArtistMv(id) {
    return request({
        url: "/artist/mv",
        params: {
            id
        }
    })
}

export function getMvPicture(mvid) {
    return request({
        url: "/mv/detail",
        params: {
            mvid
        }
    })
}

export function getMvPlayUrl(id) {
    return request({
        url: "/mv/url",
        params: {
            id,
            r:1080
        }
    })
}
