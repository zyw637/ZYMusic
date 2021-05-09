import styled from "styled-components";
import banner_sprite from "@/assets/img/banner_sprite.png";

export const TopBannerWrapper = styled.div`
    background: url(${props => props.bgImage}) center center/6000px;

    .banner{
        position: relative;
        display:flex;
        justify-content:center;
        height:270px;
    }

`
export const Banner = styled.div`
    width: 780px;
    .banner-item {
        overflow: hidden;
        height: 270px;
        .image {
            width: 100%;
        }
    }

`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
