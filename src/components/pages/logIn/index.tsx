import logo from 'assets/img/logo.png'
import { MailIcon, XButton } from 'assets'
import SocialButton from 'components/common/buttons/socialButton'
import { ModalBackground, ModalWrapper } from './login.styles'
import { useRef } from 'react'
import useOnClickOutside from 'hooks/useOnClickOutside'

interface IProps {
  handleModal: () => void
}

const Login = ({ handleModal }: IProps) => {
  const ref = useRef<any>(null)

  useOnClickOutside(ref, handleModal)

  return (
    <ModalBackground>
      <div ref={ref}>
        <ModalWrapper>
          <div className='modalHeader'>
            <div className='logo'>
              <img src={logo} width={75} alt='wanted_Logo' />
            </div>
            <button className='xButton' type='button' onClick={handleModal}>
              <XButton />
            </button>
          </div>
          <div className='content'>
            <div className='contentHeader'>
              <h1>
                직장인을 위한 <br />
                커리어플랫폼, 원티드!
              </h1>
              <h2>
                커리어 성장과 행복을 위한 여정 <br />
                지금 원티드에서 시작하세요.
              </h2>
            </div>
            <div className='contentBody'>
              <span>이메일</span>
              <form className='signUpInput'>
                <input type='text' placeholder='이메일을 입력해 주세요.' />
                <button type='submit'>
                  <MailIcon /> 이메일로 계속하기
                </button>
              </form>
              <div className='socialLogin'>다음 계정으로 계속하기</div>
              <div className='socialServices'>
                <SocialButton service='Kakao' color='#fee500' />
                <SocialButton service='Facebook' color='#1877f2' />
                <SocialButton service='Google' color='#fff' />
                <SocialButton service='Apple' color='#000' />
              </div>
            </div>
          </div>
        </ModalWrapper>
      </div>
    </ModalBackground>
  )
}

export default Login
