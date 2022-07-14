import { Link } from 'react-router-dom'
import styled from 'styled-components'
import store from 'storejs'

const MyMenu = () => {
  const logout = () => {
    store.remove('accessToken')
    location.reload()
  }

  return (
    <MyMenuWrapper>
      <li>MY 원티드</li>
      <Link to='/profile'>
        <li>프로필</li>
      </Link>
      <hr />
      <li>지원 현황</li>
      <li>지원받기 현황</li>
      <Link to='/profile/likes'>
        <li>좋아요</li>
      </Link>
      <Link to='/profile/bookmarks'>
        <li>북마크</li>
      </Link>
      <hr />
      <li>추천</li>
      <li>포인트</li>
      <hr />
      <li>
        <button type='button' onClick={logout}>
          로그아웃
        </button>
      </li>
    </MyMenuWrapper>
  )
}

export default MyMenu

const MyMenuWrapper = styled.ul`
  margin-top: 13px;
  padding: 10px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 194px;
  background-color: #fff;
  box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
  border: 1px solid #cdcdcd;
  top: 100%;
  font-size: 14px;
  color: #333;
  z-index: 99999999999;

  li {
    padding: 8px !important;
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: #f2f2f2;
    color: #f2f2f2;
    border: none;
  }
`
