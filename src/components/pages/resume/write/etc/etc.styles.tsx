import styled from 'styled-components'

export const ETCWrapper = styled.div`
  margin-top: 20px;
`

export const ETCBox = styled.div`
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

  .etcRight {
    display: flex;
    flex-direction: column;
    width: 750px;

    .etcName {
      border: none;
      font-size: 20px;
      font-weight: 600;
      background-color: transparent;
      margin-bottom: 3px;
      ::placeholder {
        color: #ccc;
      }
    }

    .etcDetail {
      font-size: 14px;
      margin-top: 5px;
      color: rgb(59, 61, 64);
      border: none;
      background-color: transparent;
    }
  }
`
