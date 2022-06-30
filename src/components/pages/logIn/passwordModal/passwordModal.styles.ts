import styled from 'styled-components'

export const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: brightness(50%);
  z-index: 9999;
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 325px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0 auto;

  .modalHeader {
    height: 54px;
    position: relative;
    top: 0;
    color: #333;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    word-wrap: break-word;
    .title {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .xButton {
      position: absolute;
      top: 16px;
      right: 0px;
      svg {
        cursor: pointer;
      }
    }
  }
  .content {
    padding: 20px 0 0;
    text-align: center;
    form {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        font-size: 14px;
        font-weight: 400;
        color: #767676;
        margin-bottom: 15px;
      }
      input {
        width: 100%;
        height: 50px;
        padding-right: 15px;
        padding-left: 15px;
        margin-bottom: 32px;
        border-radius: 5px;
        border: 1px solid #e1e2e3;
        background-color: #fff;
        font-size: 15px;
        color: #333;
        :focus {
          border: 1px solid #36f;
        }
        ::placeholder {
          color: #aaaaaa;
        }
      }
    }
    .resetButton {
      background-color: #fff;
      font-size: 14px;
      color: #36f;
      margin-top: 8px;
      height: 54px;
      font-weight: 600;
    }
  }
`
