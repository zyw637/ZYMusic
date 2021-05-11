import request from "./axios";


export function getSearchRes(keywords) {
    
    if(keywords!=="" && typeof(keywords)!=="undefined"){
        return request({
            url: "/search",
            params: {
                limit:7,
                keywords
            }
        })
    }
}