import styled from 'styled-components'

export const ModalWrapper = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  background-color: #fff;

  .locationTitle {
    padding: 16px 20px;
    position: relative;
    height: 54px;
    color: #333;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    word-wrap: break-word;

    .resetButton {
      left: 0;
      right: auto;
      font-size: 14px;
      font-weight: 400;
      color: #999;
      text-align: left;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 15px;
      line-height: 0;
    }
    .loctaionNameTitle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .filterCount {
        background-color: #36f;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        font-weight: 600;
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-left: 7px;
        position: relative;
        top: -2px;
        z-index: 1;
      }
    }
    .xButton {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      padding: 15px;
    }
  }

  .locationBody {
    padding: 20px;
    max-height: 408px;
    height: calc(100vh - 389px);
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    overflow-y: auto;

    .selectorContainer {
      margin: 10px 0 30px;

      .selectorHeader {
        font-size: 16px;
        font-weight: 400;
        color: #999;
        margin: 0 0 10px;
      }
      select {
        appearance: none;
        padding: 0 15px;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        background-color: #fff;
        color: #333;
        font-size: 15px;
        font-weight: 400;
        width: 100%;
        height: 40px;
      }
    }
  }

  .locationContainer {
    display: flex;
    width: 100%;

    h6 {
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 23px;
      letter-spacing: normal;
      color: #767676;
      margin-bottom: 8px;
    }
    ul {
      max-height: 230px;
      min-height: 98px;
      height: calc(100vh - 567px);
      overflow-y: auto;
      border: 1px solid #e1e2e3;

      .defaultSelect {
        width: 100%;
        text-align: left;
        padding: 0 14px;
        height: 27px;
        line-height: 27px;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .selected {
        width: 100%;
        text-align: left;
        padding: 0 14px;
        height: 27px;
        line-height: 27px;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        background-color: #f6f8ff;
        color: #36f;
        font-weight: 600;
      }
    }

    .locationLeft {
      width: 50%;
    }

    .locationRight {
      width: 50%;

      .empty {
        max-height: 230px;
        min-height: 98px;
        height: calc(100vh - 567px);
        border: 1px solid #e1e2e3;
        border-left: none;
        font-size: 11px;
        font-weight: 400;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        white-space: pre-line;
      }
    }
  }

  .locationFooter {
    height: 225px;
    padding: 0 20px 20px 20px;

    .selectedList {
      height: 135px;
      background: #f6f6f6;
      margin: 0 -20px 20px;
      padding: 5px 20px;
      position: relative;
    }

    .locatioinItems {
      height: 88px;
      overflow-y: auto;
    }

    .locationItem {
      display: inline-block;

      margin: 10px 6px 0 0;
      padding: 0 16px 0 15px;
      background: #fff;
      border: 1px solid #36f;
      border-radius: 17px;
      line-height: 32px;
      font-size: 13px;
      font-weight: 600;
      font-style: normal;
      letter-spacing: normal;
      color: #36f;
    }

    p {
      position: absolute;
      bottom: 5px;
      left: 21px;
      line-height: 27px;
      font-size: 11px;
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #999;
    }
  }
`
