import styled from 'styled-components'

export const JobContents = styled.section`
  margin: 40px 0 30px;
  h2 {
    color: #333;
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 10px;
    word-break: keep-all;
    word-wrap: break-word;
  }
  .company {
    .companyName {
      color: #333;
      position: relative;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: auto;
      line-height: 1.4;
      font-size: 14px;
      font-weight: 600;
      margin-right: 10px;
    }
    .resLabel {
      border: 1px solid #855af0;
      color: #855af0;
      border-radius: 2px;
      background-color: #fff;
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      height: 19px;
      line-height: 19px;
      margin-top: 4px;
      padding: 0 5px;
    }
    .location {
      font-size: 14px;
      padding: 0 10px;
      position: relative;
      white-space: nowrap;
      color: #999;
      .divider {
        margin-right: 10px;
      }
    }
  }
  .hashTags {
    margin-top: 20px;
    margin-bottom: 40px;
    .tag {
      display: inline-block;
      margin-right: 6px;
      margin-bottom: 10px;
      padding: 9px 14px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      color: #333;
      background-color: #f3f5f8;
      border-radius: 25px;
    }
  }
  article {
    color: #333;
    font-weight: 400;
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 60px;
    padding-right: 20px;
  }
  .workPlace {
    width: 700px;
    border-top: 1px solid #eee;
    margin: 20px 0;
    dl {
      display: flex;
      margin-top: 20px;
      dt {
        color: #999;
        width: 80px;
      }
      dd {
        color: #333;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
  .companyCard {
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin: 80px 0 0;
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    padding: 20px;

    .cardLeft {
      display: flex;
    }
    .logo {
      background-image: url(https://static.wanted.co.kr/images/wdes/0_5.0e34a18c.png);
      background-position: 50%;
      background-size: contain;
      width: 50px;
      height: 50px;
      -webkit-box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%);
      box-shadow: 0 0 1px 0rgba (0, 0, 0, 0.1);
      margin-right: 15px;
      background-repeat: no-repeat;
    }

    .companyInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h5 {
        color: #333;
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 5px;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding-right: 10px;
      }
      h6 {
        color: #999;
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        padding-right: 10px;
      }
    }
    .cardRight {
      display: flex;
      align-items: center;
      .followBtn {
        border-radius: 25px;
        border: 1px solid #e1e2e3;
        height: 40px;
        font-size: 15px;
        color: #36f;
        background-color: #fff;
        min-width: 64px;
        padding: 0 27px;
        font-weight: 600;
      }
    }
  }
`
