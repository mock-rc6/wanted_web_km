import store from 'storejs'
import styled from 'styled-components'
import { AlarmIcon } from 'assets'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MyMenu from '../../lnb'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const accessToken = store.get('accessToken')
  useEffect(() => {
    axios
      .get('https://dev.odoong.shop/users/mypages', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => console.log(res))
  }, [accessToken])

  const handleClickProfile = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <ProfileWrapper>
        <AlarmIcon />
        <button type='button' className='avatarBorder' onClick={handleClickProfile}>
          <div className='avatar' />
        </button>
      </ProfileWrapper>
      {isOpen && <MyMenu />}
    </>
  )
}

export default Profile

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  .avatarBorder {
    cursor: pointer;
    border: 1px solid #36f;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
    align-items: center;
    overflow: hidden;
    position: relative;

    .avatar {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(https://static.wanted.co.kr/images/profile_default.png);
    }
  }
`
