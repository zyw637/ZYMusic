import styled from "styled-components";

export const ArtistWrapper = styled.div`
    position: relative;

    .page{
        display:flex;
        width:1100px;
        
        overflow-x:scroll;

        &::-webkit-scrollbar {
            height: 0 !important;
        }

        
        .content{
        min-width:200px;
        height: 250px;
        margin-right:25px;
        text-align:center;
        }

        .image{
            position: relative;
            &>a>img {
            width: 200px;
            height: 200px;
            border-radius:50%;
            }
            
        }

        .name{
            padding-top:10px;
            font-weight:bold;
            font-size:14px;
        }

        .alias{
            color:#666;
        }
    }


    .left{
        position: absolute;
        top:87.5px;
        left:-25px;
        display:none;
    }

    .right{
        position: absolute;
        top:87.5px;
        right:-25px;
        display:none;
    }

    &:hover{
        .left,
        .right{
            display:block;
        }
    }
    


`