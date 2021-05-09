import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    
    font-size: 14px;
    height: 75px;
    

    .content {
        display: flex;
        justify-content: space-between;
        
    }
    
    
`

export const HeadLift = styled.div`

display:flex;
width:300px;
.logo {
    margin-top:-1   px;
    margin-left:15px;
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

`
export const HeadMiddle = styled.div`
flex:1;
display:flex;
height: 75px;

color:#B0B0B0;

justify-content:space-around;
.select-item {
    
    position: relative;
    height: 36px;
    margin-top:20px;
    padding:0 10px;
    font-size:20px;
    a:hover {
        color: #fff;
        text-decoration: none;
    }
    
    
}
`
export const HeadRight = styled.div`

width:300px;
display:flex;
align-items:center;


.search {
    background-color:black;
    margin-left:80px;
    width: 200px;
    height: 32px;
    border:1px solid #939393;
    border-radius: 5px;

    color:#939393;

    input {
        background-color:black;
        color:#fff;
      &::placeholder {
        font-size: 12px;
      }
    }

    &:hover{
        color:#fff;
        border:1px solid #fff;
    }
  }

`