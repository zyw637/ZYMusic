import styled from 'styled-components';

export const SimiPlayListWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      width: 200px;

      .image {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;
        .name {
          font-size: 14px;
          color: white;
        }

        .auchor {
          color: #999;

          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`