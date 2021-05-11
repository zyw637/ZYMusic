import styled from 'styled-components';

export const InputWrapper = styled.div`
    .select-item {
        position: relative;
        height: 36px;
        font-size:20px;
        background-color:black;
        padding-left:50px;
        color:#B0B0B0;
    }

    .searchX{
        display:none;
        position: absolute;
        top:14px;
        left:300px;
        
        z-index:1;
        background-color:#252525 ;

        font-size:16px;
        color:#B0B0B0;
    }
    .search{
        
        height: 50px;
        width: 700px;
        
        color:white;
        border: 1px solid #4F4F4F;  
        &:hover{
            border-color:#4F4F4F;
        }
        input{
        background-color:#252525 ;
        font-size:16px;
        color:#B0B0B0;
        }
    }

    .resBox{
        
        
        border: 1px solid #4F4F4F;  
        .res{
            position: relative;
            width:700px;;
            height: 35px;

            display:flex;
            flex-direction:column;
            justify-content:center;
            a{
                text-decoration:none;
            }
            &:hover{
                background-color:#424242;
            }
            
        }
        .name{
            padding-left:30px;
        }
        .artist{
            padding-left:15px;
        }
    }
    

`