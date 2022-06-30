import { XButton } from 'assets'
import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ModalBackground, ModalWrapper } from './signUp.styles'
import { passwordRegex, phoneRegex } from 'utils/regex'

import Timer from './timer'

interface IProps {
  email: string
  handleModal: () => void
}

const SignUp = ({ email, handleModal }: IProps) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [nameErrMsg, setNameErrMsg] = useState('')
  const [pwErrMsg, setPwErrMsg] = useState('')
  const [phoneErrMsg, setPhoneErrMsg] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const [isTokenSend, setIsTokenSend] = useState(false)
  const [isCodeValid, setIsCodeValid] = useState(false)

  const [accessToken, setAccessToken] = useState('')

  const isPwValid = passwordRegex.test(password)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(
      e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(\-{1,2})$/g, '')
    )
    if (phoneRegex.test(e.target.value)) {
      setIsPhoneValid(true)
    } else setIsPhoneValid(false)
  }

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value)
  }

  const handleClickToken = () => {
    setIsTokenSend(true)
    axios.post('https://dev.odoong.shop/sms', { phone_number: phone })
  }

  const handleClickTokenValid = () => {
    axios.post('https://dev.odoong.shop/sms/authentication', { phone_number: phone, code }).then((res) => {
      setIsCodeValid(res.data.isSuccess)
      setAccessToken(res.data.result.jwt)
    })
  }

  const handleClickSubmit = (e: FormEvent) => {
    e.preventDefault()
    // if (!name) {
    //   setNameErrMsg('이름은 필수정보입니다.')
    //   return
    // }
    // if (!isPwValid) return
    // if (password !== passwordCheck) {
    //   setPwErrMsg('영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.')
    //   return
    // }
    // if (!isCodeValid) return
    axios.post(
      'https://dev.odoong.shop/users',
      {
        user_name: name,
        email,
        password,
        phone_number: phone,
      },
      {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      }
    )
  }

  return (
    <ModalBackground>
      <ModalWrapper phone={isPhoneValid}>
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
              <input type='text' placeholder='이름을 입력해 주세요.' onChange={handleNameChange} />
              <span>휴대폰번호</span>
              <input type='text' value='대한민국 +82' readOnly />
              <div className='row'>
                <div className='rowRight'>
                  <input type='tel' placeholder='(예시) 01034567890' onChange={handlePhoneChange} />
                </div>
                <button type='button' className='getPhoneTokenBtn' disabled={!isPhoneValid} onClick={handleClickToken}>
                  인증번호 받기
                </button>
              </div>
              <div className='phoneTokenWrapper'>
                <input
                  type='text'
                  placeholder='인증번호를 입력해주세요.'
                  onChange={handleCodeChange}
                  className='phoneToken'
                  readOnly={!isPhoneValid}
                />
                {isTokenSend && (
                  <button type='button' onClick={handleClickTokenValid}>
                    확인
                  </button>
                )}
              </div>
              {isTokenSend && (
                <Timer number={300} isStarted={isTokenSend} handler={setIsTokenSend} isCodeValid={isCodeValid} />
              )}
              <span>비밀번호</span>
              <input
                type='password'
                placeholder='비밀번호를 입력해 주세요.'
                onChange={handlePasswordChange}
                autoComplete='off'
              />
              <span className='guidance'>
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.
              </span>
              <span>비밀번호 확인</span>
              <input
                type='password'
                placeholder='비밀번호를 다시 한번 입력해 주세요.'
                onChange={handlePasswordCheckChange}
                autoComplete='off'
              />
              <label className='all'>
                <input type='checkbox' className='checkbox' /> 전체 동의
              </label>
              <div className='signUpButton'>
                <button type='button' onClick={handleClickSubmit}>
                  회원가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalWrapper>
    </ModalBackground>
  )
}

export default SignUp
