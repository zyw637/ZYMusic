import styled from "styled-components";

export const SongListComponentWrapper = styled.div`
    position:relative;

.btnLeft{
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-575px;

    display:flex;
    justify-content:center;
    align-items:center;
    
    background-color:transparent;
    display:none;
}
.btnRight{
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:537px;

    display:flex;
    justify-content:center;
    align-items:center;
    
    background-color:transparent;
    display:none;
}

&:hover{
    .btnRight, .btnLeft{
        display:inline-block;
    }
}



.box{
    display:flex;
    height:250px;
    width:200px;
    background-color:pink;
}
.page {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }


`