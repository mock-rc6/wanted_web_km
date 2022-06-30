import styled from 'styled-components'

interface IProps {
  buttonName: string
  handleClick?: () => void
  type?: undefined | 'button' | 'reset' | 'submit'
}

const DefaultBtn = ({ buttonName, type, handleClick }: IProps) => {
  return (
    <DefaultBtnWrapper type={type} onClick={handleClick}>
      {buttonName}
    </DefaultBtnWrapper>
  )
}

export default DefaultBtn

const DefaultBtnWrapper = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  color: #fff;
  text-align: center;
`
