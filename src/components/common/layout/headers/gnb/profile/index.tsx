import styled from 'styled-components'
import { AlarmIcon } from 'assets'
import { useState } from 'react'

import MyMenu from '../../lnb'
import { useRecoilState } from 'recoil'
import { userProfileState } from 'recoil/atoms'

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [img, setImg] = useRecoilState(userProfileState)

  const handleClickProfile = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <>
      <ProfileWrapper>
        <AlarmIcon />
        <button type='button' className='avatarBorder' onClick={handleClickProfile}>
          {img.length > 0 ? (
            <div className='avatar'>
              <img src={img} />
            </div>
          ) : (
            <div className='avatar' />
          )}
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

      img {
        width: 28px;
        height: 28px;
        background-color: #fff;
        object-fit: cover;
      }
    }
  }
`
