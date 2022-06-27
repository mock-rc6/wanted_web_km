import { HeaderWrapper } from './gnb.styles'
import hamburger from 'assets/img/hamburger.webp'
import logo from 'assets/img/logo.png'
import { BetaIcon, NewIcon, SearchIcon } from 'assets'
import { useState } from 'react'
import Modal from 'components/common/modal'
import Login from 'components/pages/logIn'

const GNB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <HeaderWrapper>
      {isModalOpen && (
        <Modal>
          <Login handleModal={handleModal} />
        </Modal>
      )}
      <nav>
        <div className='logo'>
          <img className='hamburger' src={hamburger} alt='hamburgerMenu' />
          <img className='logoimg' src={logo} alt='wanted' />
        </div>
        <ul className='menu'>
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>
            커뮤니티 <NewIcon />
          </li>
          <li>프리랜서</li>
          <li>
            AI 합격예측
            <BetaIcon />
          </li>
        </ul>
        <aside>
          <ul>
            <SearchIcon />
            <li>
              <button type='button' onClick={handleModal}>
                회원가입/로그인
              </button>
            </li>
            <li>
              <div className='divider'>|</div>
              <button type='button' className='dashboardButton'>
                기업서비스
              </button>
            </li>
          </ul>
        </aside>
      </nav>
    </HeaderWrapper>
  )
}

export default GNB
