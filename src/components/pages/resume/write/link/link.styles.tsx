import styled from 'styled-components'

export const LinkWrapper = styled.div`
  margin-top: 20px;
`

export const LinkBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-bottom: 100px;
  :hover {
    background-color: #f8f8fa;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 500;
    :focus {
      outline: none;
    }
  }
`
