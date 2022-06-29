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
      margin: 20px 0;
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
    img {
      width: 700px;
      height: 254px;
    }
  }
`
