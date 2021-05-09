import styled from "styled-components";

export const DivideLineWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:30px;

    height:100px;
    .test{
        display: flex;
        height:100px;
        }

    .title{     
        
        padding:40px 0px 20px 0px;
        font-family: "Microsoft Yahei", "Times New Roman", Times, serif;
        color:white;
        font-size:40px;
        }

    .more{
        padding:69px 20px 0px;
        color:#A1A1A1;
        font-size:15px;
        font-family: "Microsoft Yahei", "Times New Roman", Times, serif;
        &:hover{
            text-decoration:none
        }
    }
`