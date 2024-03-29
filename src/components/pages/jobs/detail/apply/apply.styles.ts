import styled from 'styled-components'

export const ApplyBox = styled.section<{ isScrolled: boolean }>`
  width: 340px;
  height: 325px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  padding: 24px 20px;
  border-radius: 3px;
  position: sticky;
  top: 70px;
  margin-bottom: 30px;

  h3 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }

  .rewards {
    display: flex;
    overflow: hidden;
    margin: 24px 0;
    li {
      width: 150px;
      h4 {
        font-size: 14px;
        font-weight: 600;
        color: #999;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      p {
        font-size: 15px;
        color: #333;
        font-weight: 600;
      }
    }
  }
  .bookmarkBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #36f;
    text-align: center;
    margin-bottom: 10px;
    svg {
      margin-right: 8px;
    }
  }

  .applyBottom {
    margin-top: 24px;
    height: 30px;
    display: flex;
    .likeBtn {
      height: 30px;
      border-radius: 15px;
      border: 1px solid #e1e2e3;
      margin-right: 12px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      svg {
        width: 20px;
        height: 30px;
        font-size: 16px;
        fill: #dbdbdb;
        margin-right: 10px;
      }
      span {
        line-height: 30px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: left;
        color: #333;
        position: relative;
      }
    }
    .likeUser {
      height: 30px;
      padding-top: 2px;
      li {
        background-image: url('https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png');
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #fff;
        z-index: 1;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      li {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #fff;
        float: left;
        position: relative;
        margin-left: -10px;
        z-index: 2;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
`
