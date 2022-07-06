import styled from 'styled-components'

export const LanguageWrapper = styled.div`
  margin-top: 20px;
`

export const LanguageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  :hover {
    background-color: #f8f8fa;
  }

  .range {
    display: flex;

    input {
      background-color: transparent;
      border: none;
      font-size: 14px;
      font-weight: 500;
      :focus {
        outline: none;
      }
    }
    .year {
      width: 41px;
    }
    .month {
      width: 27px;
      margin-left: 4px;
    }
    span {
      color: #fe415c;
    }
  }

  .languageRight {
    display: flex;
    flex-direction: column;
    width: 750px;

    .language {
      border: none;
      font-size: 20px;
      font-weight: 600;
      background-color: transparent;
      margin-bottom: 10px;

      svg {
        width: 15px;
        fill: #36f;
        transform: rotate(90deg);
        margin-left: 5px;
      }
    }

    .level {
      font-size: 16px;
      border: none;
      background-color: transparent;
      margin-bottom: 3px;
      svg {
        width: 10px;
        fill: #36f;
        transform: rotate(90deg);
        margin-left: 5px;
      }
    }

    .addButton {
      padding: 20px 0;
      button {
        font-size: 16px;
        color: #36f;
        background-color: transparent;
        font-weight: 600;
        text-align: left;
      }
    }

    .performance {
      display: flex;
      flex-direction: column;
      margin-left: -40px;
      padding: 15px 20px 15px 60px;
      border-bottom: none;
      border-radius: 0;
      font-size: 10px !important;

      .exam {
        position: relative;
        height: 34px;
        color: rgb(59, 61, 64);
        margin: 0px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        background-color: transparent;
      }
      ::before {
        content: '●';
        position: absolute;
        top: 165px;
        left: 282px;
      }

      .grade {
        font-size: 14px;
        margin-top: 5px;
        color: rgb(59, 61, 64);
        border: none;
        background-color: transparent;
      }
    }
  }
`
