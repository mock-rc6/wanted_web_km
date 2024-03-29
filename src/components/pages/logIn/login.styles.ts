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

export const ModalWrapper = styled.div<{ isErr?: string | null }>`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 635px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0 auto;
  -ms-overflow-style: none;

  .modalHeader {
    height: 54px;
    position: relative;
    top: 0;
    color: #333;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    word-wrap: break-word;
    .logo {
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
    padding: 20px 0;
    text-align: center;

    .contentHeader {
      word-break: break-word;
      margin-top: 24px;
      margin-bottom: 40px;
      h1 {
        line-height: 1.54;
        font-size: 26px;
        font-weight: 600;
        color: #333;
      }
      h2 {
        margin-top: 16px;
        line-height: 1.5;
        font-size: 16px;
        font-weight: 400;
        color: #666;
      }
    }

    .contentBody {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span {
        font-size: 14px;
        font-weight: 400;
        color: #767676;
        margin-bottom: 15px;
      }
      .signUpInput {
      }
      form {
        width: 100%;
        position: relative;
        .err {
          position: absolute;
          top: 57px;
          left: 0;
          font-size: 12px;
          color: #fe415c;
        }
        svg {
          margin-right: 10px;
        }
        input {
          width: 100%;
          height: 50px;
          padding-right: 15px;
          padding-left: 15px;
          margin-bottom: ${({ isErr }) => (isErr ? '30px' : '15px')};
          border-radius: 5px;
          border: 1px solid ${({ isErr }) => (isErr ? '#fe415c' : '#e1e2e3')};
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

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 54px;
          border: 0;
          border-radius: 27px;
          background-color: #36f;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
        }
        ::after {
          display: block;
          content: 'or';
          color: #969696;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          text-align: center;
          margin: 13px auto;
          white-space: pre;
        }
      }
      .socialLogin {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #767676;
        margin-bottom: 17px;
        font-size: 14px;
      }
      .socialServices {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`
