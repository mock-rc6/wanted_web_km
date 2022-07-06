import styled from 'styled-components'

export const CareerWrapper = styled.div`
  margin-top: 20px;
`

export const CareerBox = styled.div`
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

  label {
    display: flex;
    margin: 16px 0 30px;
    display: flex;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    font-weight: 600;
    height: 18px;
    line-height: 18px;
  }

  .carrerRight {
    display: flex;
    flex-direction: column;
    width: 750px;

    .companyName {
      border: none;
      font-size: 20px;
      font-weight: 600;
      background-color: transparent;
      margin-bottom: 3px;
      ::placeholder {
        color: #ccc;
      }
    }

    .department {
      font-size: 16px;
      border: none;
      background-color: transparent;
      margin-bottom: 3px;
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

      .performanceTitle {
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
        top: 167px;
        left: 282px;
      }

      .performanceDetail {
        font-size: 14px;
        margin-top: 5px;
        color: rgb(59, 61, 64);
        border: none;
        background-color: transparent;
      }
    }
  }
`
