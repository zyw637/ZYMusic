import styled from "styled-components";

export const SongCoverWrapper = styled.div`
    height: 250px;
    width:200px;
    margin-bottom:20px;
    .cover-top {
    position: relative;
        &>img {
        width: 200px;
        height: 200px;
        border-radius:35px;
        }
    }

    .cover-bottom {
        font-size: 14px;
        color: #fff;
        margin-top: 5px;
    }

    .cover-source {
        color: #666;
    }
`