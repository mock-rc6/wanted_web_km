import { HeaderWrapper } from './gnb.styles'
import hamburger from 'assets/img/hamburger.webp'
import logo from 'assets/img/logo.png'
import { BetaIcon, NewIcon, SearchIcon } from 'assets'

const GNB = () => {
  return (
    <HeaderWrapper>
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
            <li>회원가입/로그인</li>
            <li>
              <div className='divider'>|</div>
              <button type='button'>기업서비스</button>
            </li>
          </ul>
        </aside>
      </nav>
    </HeaderWrapper>
  )
}

export default GNB
