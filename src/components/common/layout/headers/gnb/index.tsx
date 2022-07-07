import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
          <NavLink to='/joblist' className={({ isActive }) => (isActive ? 'selected' : 'default')}>
            <li>채용</li>
          </NavLink>
          <li className='default'>이벤트</li>
          <li className='default'>직군별 연봉</li>
          <NavLink to='/resume/intro' className={({ isActive }) => (isActive ? 'selected' : 'default')}>
            <li>이력서</li>
          </NavLink>
          <li className='default'>
            커뮤니티 <NewIcon />
          </li>
          <li className='default'>프리랜서</li>
          <li className='default'>
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
