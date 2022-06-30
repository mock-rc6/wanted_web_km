import { useEffect, useState } from 'react'
import axios from 'axios'
import store from 'storejs'

import { BookmarkLineIcon, HeartIcon } from 'assets'
import { ApplyBox } from './apply.styles'
import DefaultBtn from 'components/common/buttons/default'
import BookmarkModal from './bookmarkModal'
import Modal from 'components/common/modal'

interface IProps {
  scrollRef: any
  data: any
}

export const Apply = ({ scrollRef, data }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const accessToken = store.get('accessToken')

  const handleClickBookmark = () => {
    axios
      .post(
        `/recruits/${data.id}/bookmarks`,
        { id: data.id },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        }
      )
      .then((res) => {
        if (res.data.result.status === 0) handleModal()
      })
  }

  const handleClickLike = () => {
    axios
      .post(
        `/recruits/${data.id}/likemarks`,
        { id: data.id },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        }
      )
      .then((res) => console.log(res))
  }

  const handleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

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
    <>
      {isModalOpen && (
        <Modal>
          <BookmarkModal handleModal={handleModal} />
        </Modal>
      )}
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
        <button type='button' className='bookmarkBtn' onClick={handleClickBookmark}>
          <BookmarkLineIcon />
          북마크하기
        </button>
        <DefaultBtn buttonName='지원하기' />
        <div className='applyBottom'>
          <button type='button' className='likeBtn' onClick={handleClickLike}>
            <HeartIcon />
            <span>2</span>
          </button>
          <ul className='likeUser'>
            <li />
            <li />
          </ul>
        </div>
      </ApplyBox>
    </>
  )
}
