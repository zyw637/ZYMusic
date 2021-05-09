import styled from "styled-components";

export const SongsWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    height: 50px;
    border-top:1px solid #4F4E4E;

    .num{
        
        padding-left:15px;
        width:100px;
        .btn{
            display:none;
            margin-left:-10px;
            background-color:transparent;
        }
        
    }

    &:hover{
        .btn{
            display:block;
        }
        .span{
            display:none
        }
    }

    .name{
        width:800px;
    }

    .time{
        width:200px;
    }
    

    
    
`