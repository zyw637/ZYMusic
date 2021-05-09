import styled from "styled-components";

export const MvsWrapper = styled.div`
    position: relative;

    .page{
        display:flex;
        width:1100px;
        
        overflow-x:scroll;
        &::-webkit-scrollbar {
            height: 0 !important;
        }

        .box{
        position: relative;
        margin-right:61px;
        min-width: 323.6px;
        height: 250px;
        
            .image{
                position: relative;
                &>img {
                width: 323.6px;
                height: 200px;
                border-radius:10px;
                
                }
                
            }

            &:hover{
                .image{
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

            .name{
            padding-top:10px;
            font-weight:bold;
            font-size:14px;
            }

            .time{
            color:#666;
            }
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

    &hover{
        .left,
        .right{
            display:block;
        }
    }


    .mvpage{
        
        position: fixed;
        top:0;
        left:0;
        right:0;
        height: 100%;
        width:100%;
        background-color:rgba(28, 28, 28,0.9);
        z-index:999;
        
        display:none;
        justify-content:center;
        align-items:center;

        
        .c{
            position: relative;
            
            .vdo{

            }

            .close{
                height: 35px;
                width:35px;
                bottom:0;
                border-radius:50%;
                background-color:transparent;
                &:hover{
                    background-color:#151515;
                }
            }
            
        } 
    }
    


`