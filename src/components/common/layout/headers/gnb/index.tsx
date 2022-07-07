import { useState } from 'react'
import { Link } from 'react-router-dom'
import store from 'storejs'
import { HeaderWrapper } from './gnb.styles'
import { BetaIcon, NewIcon, SearchIcon } from 'assets'
import logo from 'assets/img/logo.png'
import hamburger from 'assets/img/hamburger.webp'
import Modal from 'components/common/modal'
import Login from 'components/pages/logIn'
import Profile from './profile'

const GNB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  const accessToken = store.get('accessToken')

  return (
    <HeaderWrapper>
      {isModalOpen && (
        <Modal>
          <Login handleModal={handleModal} />
        </Modal>
      )}
      <nav>
        <Link to='/'>
          <div className='logo'>
            <img className='hamburger' src={hamburger} alt='hamburgerMenu' />
            <img className='logoimg' src={logo} alt='wanted' />
          </div>
        </Link>
        <ul className='menu'>
          <li>
            <Link to='/joblist'>채용</Link>
          </li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>
            <Link to='/resume/intro'>이력서</Link>
          </li>
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
              {accessToken ? (
                <Profile />
              ) : (
                <button type='button' onClick={handleModal}>
                  회원가입/로그인
                </button>
              )}
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
