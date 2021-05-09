import styled from "styled-components";

export const ListInfoWrapper = styled.div` 
    .content{
        display:flex;
        height: 300px;
        min-width:1100px;
        align-items:center;

        .img{
            height: 250px;
            width: 250px;
            margin-left:50px;
            
        }

        .info{
            color:#BCBCBC;
            margin-left:50px;
            .album{
                margin-top:10px;
            }
            .description{
                margin-top:10px;
                white-space: pre-wrap;
            }
        }
        
    }

`