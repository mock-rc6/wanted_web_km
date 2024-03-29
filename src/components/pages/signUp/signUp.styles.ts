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

export const ModalWrapper = styled.div<{ phone?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 635px;
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 5px;
  padding: 0 20px;
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
    margin-top: 50px;
    padding: 20px 0 0;
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
        ~ span {
          margin-top: 22px;
        }
      }
      .signUpInput {
      }
      form {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        svg {
          margin-right: 10px;
        }
        input {
          width: 100%;
          height: 50px;
          padding-right: 15px;
          padding-left: 15px;
          margin-bottom: 10px;
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

        .row {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .rowRight {
          width: 218px;
        }
        .getPhoneTokenBtn {
          width: 117px;
          height: 50px;
          margin-left: 10px;
          border-radius: 5px;
          background-color: ${({ phone }) => (phone ? '#fff' : '#f2f4f7')};
          font-weight: 700;
          color: ${({ phone }) => (phone ? '#36F' : '#ccc')};
          border: 1px solid ${({ phone }) => (phone ? '#36F' : 'none')};
          font-size: 14px;
        }

        .phoneToken {
          background-color: ${({ phone }) => (phone ? '#fff' : '#f2f4f7')};
          cursor: ${({ phone }) => (phone ? 'text' : 'unset')};
          :focus {
            border: 1px solid ${({ phone }) => (phone ? '#36F' : '#e1e2e3')};
          }
        }
      }

      .phoneTokenWrapper {
        position: relative;
        width: 100%;
        button {
          position: absolute;
          top: 20%;
          right: 15px;
          padding: 6px 20px 4px;
          border-radius: 5px;
          border: 1px solid #e1e2e3;
          font-weight: 700;
          color: #aaa;
        }
      }
      .guidance {
        bottom: 0;
        margin-top: 6px;
        font-size: 12px;
        color: #767676;
        text-align: left;
      }

      .all {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #333;
        font-size: 15px;
        margin-top: 30px;
        padding-bottom: 14px;
        border-bottom: 1px solid #ececec;
        margin-bottom: 15px;
      }
      .checkbox {
        width: 13px;
        height: 13px;
        margin-bottom: 5px;
        margin-right: 10px;
      }

      .signUpButton {
        width: 100%;
        height: 70px;
        position: sticky;
        bottom: 0px;
        background-color: #fff;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 54px;
          border-radius: 24px;
          background-color: #f2f4f7;
          font-size: 16px;
          font-weight: 600;
          color: #ccc;
          cursor: pointer;
        }
      }
    }
  }
`
