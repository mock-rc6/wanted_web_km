import { useEffect, useState } from 'react'
import { BookmarkLineIcon, HeartIcon } from 'assets'
import { ApplyBox } from './apply.styles'

export const Apply = ({ scrollRef }: any) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollEvent = () => {
    if (window.scrollY > scrollRef.current.offsetTop) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)
    return window.removeEventListener('scroll', scrollEvent)
  }, [])

  return (
    <ApplyBox isScrolled={isScrolled}>
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
