import { AppleIcon, FacebookIcon, GoogleIcon, KakaoIcon } from 'assets'
import styled from 'styled-components'

interface IProps {
  service: string
  color: string
  border?: boolean
}

const SocialButton = ({ service, color, border }: IProps) => {
  return (
    <Button type='button'>
      <SocialIcon color={color}>
        {service === 'Kakao' && <KakaoIcon />}
        {service === 'Facebook' && <FacebookIcon />}
        {service === 'Google' && <GoogleIcon />}
        {service === 'Apple' && <AppleIcon />}
      </SocialIcon>
      {service}
    </Button>
  )
}

export default SocialButton

const Button = styled.button`
  width: 25%;
  color: #737373;
  text-align: center;
`

const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => `${color}`};
  width: 56px;
  height: 56px;
  margin: 0 auto 8px;
  border-radius: 28px;
  border: 1px solid ${({ color }) => (color === '#fff' ? '#ebedef' : 'none')};
`
