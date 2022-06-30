import { useEffect, useState } from 'react'
import { BookmarkLineIcon, HeartIcon } from 'assets'
import { ApplyBox } from './apply.styles'
import axios from 'axios'
import DefaultBtn from 'components/common/buttons/default'

interface IProps {
  scrollRef: any
  data: any
}

export const Apply = ({ scrollRef, data }: IProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  // const handleClickBookmark = () => {
  //   axios.post(`/recruits/${data.id}/bookmarks`, null, {
  //     headers: {
  //       'X-ACCESS-TOKEN': accessToken,
  //     },
  //   })
  // }

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
      <DefaultBtn buttonName='지원하기' />
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
