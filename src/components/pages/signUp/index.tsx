import { XButton } from 'assets'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { ModalBackground, ModalWrapper } from './signUp.styles'

interface IProps {
  handleModal: () => void
}

const SignUp = ({ handleModal }: IProps) => {
  const [phone, setPhone] = useState<null | string>(null)
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (phoneRegex.test(e.target.value)) {
      setPhone(e.target.value)
    } else {
      setPhone(null)
    }
  }

  const handleClickToken = () => {
    axios.post('https://dev.odoong.shop/sms', { phone_number: phone }).then((res) => console.log(res))
  }

  return (
    <ModalBackground>
      <ModalWrapper phone={phone}>
        <div className='modalHeader'>
          <div className='title'>회원가입</div>
          <button className='xButton' type='button' onClick={handleModal}>
            <XButton />
          </button>
        </div>
        <div className='content'>
          <div className='contentBody'>
            <form className='signUpInput'>
              <span>이름</span>
              <input type='text' placeholder='이름을 입력해 주세요.' />
              <span>휴대폰번호</span>
              <input type='text' value='대한민국 +82' readOnly />
              <div className='row'>
                <input type='tel' placeholder='(예시)010-3456-7890' onChange={handlePhoneChange} />
                <button type='button' className='getPhoneTokenBtn' disabled={!phone} onClick={handleClickToken}>
                  인증번호 받기
                </button>
              </div>
              <input type='text' placeholder='인증번호를 입력해주세요.' />
              <span>비밀번호</span>
              <input type='password' placeholder='비밀번호를 입력해 주세요.' />
              <span>비밀번호 확인</span>
              <input type='password' placeholder='비밀번호를 다시 한번 입력해 주세요.' />
              <label className='all'>
                <input type='checkbox' className='checkbox' /> 전체 동의
              </label>
              <button type='submit'>회원가입하기</button>
            </form>
          </div>
        </div>
      </ModalWrapper>
    </ModalBackground>
  )
}

export default SignUp
