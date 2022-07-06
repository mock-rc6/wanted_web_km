import styled from 'styled-components'

export const EducationWrapper = styled.div`
  margin-top: 20px;
`

export const EducationBox = styled.div`
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

  .educationRight {
    display: flex;
    flex-direction: column;
    width: 750px;

    .schoolName {
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

    .performanceDetail {
      font-size: 14px;
      margin-top: 5px;
      color: rgb(59, 61, 64);
      border: none;
      background-color: transparent;
    }
  }
`
