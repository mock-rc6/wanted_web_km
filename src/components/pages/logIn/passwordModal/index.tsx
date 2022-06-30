import { XButton } from 'assets'
import axios from 'axios'
import DefaultBtn from 'components/common/buttons/default'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ModalBackground, ModalWrapper } from './passwordModal.styles'

interface IProps {
  handleModal: () => void
  email: string
}

const PasswordModal = ({ handleModal, email }: IProps) => {
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.id)
  }

  const handleClickLogin = (e: FormEvent) => {
    e.preventDefault()
    axios.post('https://dev.odoong.shop/users/login', { email, password }).then((res) => console.log(res.data.message))
  }

  return (
    <ModalBackground>
      <ModalWrapper>
        <div className='modalHeader'>
          <div className='title'>비밀번호 입력</div>
          <button className='xButton' type='button' onClick={handleModal}>
            <XButton />
          </button>
        </div>
        <div className='content'>
          <form className='signUpInput' onSubmit={handleClickLogin}>
            <span>비밀번호</span>
            <input type='password' placeholder='비밀번호' autoComplete='off' onChange={handleChangePassword} />
            <DefaultBtn type='submit' buttonName='로그인' />
          </form>
          <button type='button' className='resetButton'>
            비밀번호 초기화/변경
          </button>
        </div>
      </ModalWrapper>
    </ModalBackground>
  )
}
export default PasswordModal
