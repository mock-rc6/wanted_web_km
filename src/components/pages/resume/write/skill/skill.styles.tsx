import styled from 'styled-components'

export const SkillWrapper = styled.div`
  width: 1060px;
  margin: 20px 0;
  padding-bottom: 70px;

  .search {
    position: relative;

    input {
      width: 100%;
      margin-top: 30px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #e1e2e3;
      padding: 11px 20px 11px 15px;
      font-size: 15px;
    }

    svg {
      position: absolute;
      top: 40px;
      right: 20px;
    }
  }

  .selected {
    margin-top: 6px;
    li {
      display: inline-flex;
      background-color: #f3f5f8;
      border-radius: 19px;
      margin-right: 10px;
      height: 38px;
      padding: 0 17px;
      margin-top: 10px;
      font-weight: 500;
      color: #333;
      font-size: 14px;
      line-height: 38px;
      cursor: pointer;
    }
  }
`

export const SkillBox = styled.div`
  display: flex;
  position: relative;
  background-color: #f5fcf8;
  flex-direction: column;
  padding: 18px 21px 18px 17px;
  color: #333;
  font-size: 13px;
  line-height: 27px;
  letter-spacing: 0;
  margin-bottom: 2px;

  button {
    background-color: #e4f4ec;
    border-radius: 19px;
    margin-right: 10px;
    height: 38px;
    padding: 0 17px;
    margin-top: 10px;
  }
`
