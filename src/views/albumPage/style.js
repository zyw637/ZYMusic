import styled from "styled-components";

export const AlbumPageWrapper = styled.div`
    img{
        width: 300px;
        height: 250px;
    }

    .vdo {
            display: none;
            position: fixed;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: bisque;
        }
    &:link{
        .vdo{
            display:block;
        }
    }

`