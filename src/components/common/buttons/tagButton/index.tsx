import styled from 'styled-components'

interface IProps {
  text: string
  color: string
}

const TagButton = ({ text, color }: IProps) => {
  return <ButtonWrapper color={color}>{text}</ButtonWrapper>
}

export default TagButton

const ButtonWrapper = styled.button<{ color: string }>`
  height: 32px;
  padding: 8px 14px;
  border-radius: 20px;
  display: inline-flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
  border: 1px solid transparent;
  background-color: ${({ color }) => `${color}`};

  :hover {
    border: 1px solid #4d7aff;
  }
`
