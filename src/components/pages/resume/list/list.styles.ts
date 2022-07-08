import styled from 'styled-components'

export const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;
  background-color: #f8f8fa;
  padding-top: 50px;

  a {
    width: 100%;
  }

  .listBody {
    width: 1060px;
    margin: 0 auto;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;
      margin-bottom: 5px;

      h4 {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
        margin: 0;
        padding: 15px 0;
        color: #333;
        word-wrap: break-word;
      }

      .intro {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        color: #36f;

        svg {
          margin-left: 5px;
          width: 18px;
          height: 18px;
          color: #36f;
        }
      }
    }
    .listContents {
      display: flex;
      flex-wrap: wrap;

      .default {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 190px;
        width: calc(25% - 20px);
        margin-bottom: 20px;
        margin-right: 20px;
        position: relative;
        border: 1px solid #dbdbdb;
        background-color: #fff;
        cursor: pointer;
      }

      p {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: center;
        color: #333;
        margin: 20px 0 0;
      }
    }
  }
`
