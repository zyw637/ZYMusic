import styled from "styled-components";

export const SongCoverXWrapper = styled.div`
    position: relative;
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
    &:hover{
        .cover-top{
            filter:blur(2px);
        }
        .player{
            display:block;
        }
    }

    

    .player{
        display:none;
        position: absolute;
        transform: translate(-50%,-100%);
        top:50%;
        left:50%;
        background-color:transparent;
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