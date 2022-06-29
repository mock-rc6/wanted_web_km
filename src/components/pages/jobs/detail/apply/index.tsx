import styled from 'styled-components'
import { BookmarkLineIcon, HeartIcon } from 'assets'
import { useState } from 'react'

export const Apply = ({ scrollRef }: any) => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollRef.current.offsetTop) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })
  console.log(isScrolled)

  return (
    <ApplyBox>
      <h3>채용보상금</h3>
      <ul className='rewards'>
        <li>
          <h4>추천인</h4>
          <p>500,000원</p>
        </li>
        <li>
          <h4>지원자</h4>
          <p>500,000원</p>
        </li>
      </ul>
      <button type='button' className='bookmarkBtn'>
        <BookmarkLineIcon />
        북마크하기
      </button>
      <button type='button' className='applyBtn'>
        지원하기
      </button>
      <div className='applyBottom'>
        <button type='button' className='likeBtn'>
          <HeartIcon />
          <span>2</span>
        </button>
        <ul className='likeUser'>
          <li />
          <li />
        </ul>
      </div>
    </ApplyBox>
  )
}

const ApplyBox = styled.section`
  width: 340px;
  height: 325px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  padding: 24px 20px;
  border-radius: 3px;
  position: sticky;
  top: 70px;
  margin-bottom: 30px;

  h3 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }

  .rewards {
    display: flex;
    overflow: hidden;
    margin: 24px 0;
    li {
      width: 150px;
      h4 {
        font-size: 14px;
        font-weight: 600;
        color: #999;
        margin-bottom: 8px;
        line-height: 1.2;
      }
      p {
        font-size: 15px;
        color: #333;
        font-weight: 600;
      }
    }
  }
  .bookmarkBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #36f;
    text-align: center;
    margin-bottom: 10px;
    svg {
      margin-right: 8px;
    }
  }
  .applyBtn {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background-color: #36f;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    color: #fff;
    text-align: center;
  }
  .applyBottom {
    margin-top: 24px;
    height: 30px;
    display: flex;
    .likeBtn {
      height: 30px;
      border-radius: 15px;
      border: 1px solid #e1e2e3;
      margin-right: 12px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      svg {
        width: 20px;
        height: 30px;
        font-size: 16px;
        fill: #dbdbdb;
        margin-right: 10px;
      }
      span {
        line-height: 30px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: normal;
        text-align: left;
        color: #333;
        position: relative;
      }
    }
    .likeUser {
      height: 30px;
      padding-top: 2px;
      li {
        background-image: url('https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png');
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #fff;
        z-index: 1;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
      li {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid #fff;
        float: left;
        position: relative;
        margin-left: -10px;
        z-index: 2;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
`
