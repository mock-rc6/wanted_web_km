import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userProfileState } from 'recoil/atoms'
import store from 'storejs'
import styled from 'styled-components'

interface IData {
  name: string
  email: string
  phone_number: string
}

const Aside = () => {
  const [data, setData] = useState<IData>()
  const [img, setImg] = useRecoilState(userProfileState)

  const accessToken = store.get('accessToken')
  const ref = useRef<any>()
  useEffect(() => {
    axios
      .get('https://dev.odoong.shop/mypages', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => setData(res.data.result))
  }, [accessToken])

  const formData = new FormData()
  const onClickButton = () => {
    if (ref.current != null) ref.current.click()
  }
  const onChangeFile = (event: any) => {
    const file = event.target.files?.[0]
    if (!file) return
    formData.append('images', file)
    axios
      .post(`https://dev.odoong.shop/users/resources/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => setImg(`https://dev.odoong.shop/resources${res.data.result.photo_url}`))
  }

  return (
    <AsideWrapper>
      <Profile>
        <form encType='multipart/form-data' onSubmit={onChangeFile}>
          <button type='button' onClick={onClickButton}>
            {img.length > 0 ? (
              <div className='profileImg'>
                <img src={img} />
              </div>
            ) : (
              <div className='profileImg' />
            )}
          </button>
          <input type='file' onChange={onChangeFile} ref={ref} style={{ display: 'none' }} />
        </form>
        <dl>
          <dt>{data?.name}</dt>
          <dd>{data?.email}</dd>
          <dd>{data?.phone_number}</dd>
        </dl>
      </Profile>
      <div className='info'>기본정보 수정</div>
      <div className='row'>
        <dt>관심있음</dt>
        <dd>0</dd>
      </div>
      <div className='row'>
        <dt>열람</dt>
        <dd>0</dd>
      </div>
      <div className='row'>
        <dt>받은 제안</dt>
        <dd>0</dd>
      </div>
    </AsideWrapper>
  )
}

export default Aside

const AsideWrapper = styled.aside`
  background: #fff;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
  width: 250px;
  padding-bottom: 41px;

  .info {
    width: 160px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #e1e2e3;
    margin: 0 auto;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    color: #333;
    margin-bottom: 40px;
  }
  .row {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    color: #333;

    dd {
      font-size: 18px;
      line-height: 19px;
      font-weight: 700;
    }
  }
`

export const Profile = styled.div`
  padding: 42px 20px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profileImg {
    position: relative;
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(https://static.wanted.co.kr/images/profile_default.png);
    img {
      width: 77px;
      height: 77px;
      border-radius: 50%;
      object-fit: cover;
      background-color: #fff;
    }
  }

  dl {
    padding-top: 30px;
  }

  dt {
    font-size: 18px;
    line-height: 19px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-bottom: 12px;
  }

  dd {
    font-size: 14px;
    line-height: 16px;
    padding-top: 8px;
    color: #767676;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`
