import styled from "styled-components";

export const ArtistInfoWrapper = styled.div`
    padding-bottom: 70px;
    h2{
        margin-top:48px;
        margin-bottom:10px;
    }
    .info{
        display:flex;

        .text{
            padding-left:48px;
            .name{
                font: 24px Arial,Helvetica,sans-serif;
            }
            .alias{
                font: 14px Arial,Helvetica,sans-serif;
                font-size:14px;
                margin-left:20px;
                color:#666;
            }
            .description{
                color:#666;
            }
        }
    }
    .songs{
       
        max-height:500px;
        overflow-y:scroll;
        margin-bottom:50px;
    }
`