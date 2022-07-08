import axios from 'axios'
import store from 'storejs'
import styled from 'styled-components'

import ResponseRateLabel from 'components/common/labels/responseRate'
import ResRateHighLabel from 'components/common/labels/responseRate/high'
import { BookmarkFilledIcon, BookmarkIcon } from 'assets'
import { IRecruits } from 'types/wanted'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  job?: IRecruits
  bookMarkList?: number[]
}

const JobCard = ({ job, bookMarkList }: IProps) => {
  const [isBookMarked, setIsBookMarked] = useState(false)
  const accessToken = store.get('accessToken')
  useEffect(() => {
    if (bookMarkList?.includes(Number(job?.id))) setIsBookMarked(true)
  }, [bookMarkList, job])

  // 북마크
  const handleClickBookmark = () => {
    axios
      .post(
        `https://dev.odoong.shop/recruits/${job?.id}/bookmarks`,
        { id: job?.id },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        }
      )
      .then(() => {
        setIsBookMarked((prev) => !prev)
      })
  }

  return (
    <CardWrapper>
      <div className='imgWrapper'>
        <Link to={`/joblist/${job?.id}`}>
          {job?.photos[0].length ? (
            <img src={`https://dev.odoong.shop/resources${job?.photos[0]}`} />
          ) : (
            <img src='https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/12366/stqnylud5cbzas4c__400_400.jpg&w=400&q=75' />
          )}
        </Link>
        <button type='button' className='bookmarkBtn' onClick={handleClickBookmark}>
          {isBookMarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
        </button>
      </div>
      <Link to={`/joblist/${job?.id}`}>
        <div className='cardContents'>
          <h3 className='jobTitle'>{job ? job.title : '[삼쩜삼]프론트엔드 엔지니어'}</h3>
          <p className='companyName'>{job ? job.company_name : '자비스앤빌런즈(삼쩜삼)'}</p>
          {job ? <ResponseRateLabel rate={job.response_rate} /> : <ResRateHighLabel />}
          <p className='companyLocation'>서울 ∙ 한국</p>
          <p className='reward'>채용보상금 1,000,000원</p>
        </div>
      </Link>
    </CardWrapper>
  )
}

export default JobCard

const CardWrapper = styled.div`
  margin: 10px;
  width: 250px;
  max-height: 365px;
  cursor: pointer;

  .imgWrapper {
    position: relative;

    img {
      border-radius: 4px;
      width: 100%;
    }

    .bookmarkBtn {
      position: absolute;
      top: 0;
      right: 0;
      background: none;
      padding: 8px 6px;
      width: 42px;
      height: 42px;
    }
  }
  .cardContents {
    padding: 14px 0;
    text-align: left;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;

    .jobTitle {
      color: #333;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.2;
      max-height: 2.4em;
    }
    .companyName {
      color: #333;
      font-weight: 600;
      font-size: 14px;
      line-height: normal;
      width: 100%;
      margin-top: 10px;
    }
    .companyLocation {
      font-size: 14px;
      line-height: normal;
      width: 100%;
      margin-top: 10px;
      font-weight: 400;
      color: #999;
    }
    .reward {
      margin-top: 10px;
      color: #333;
      font-size: 14px;
      font-weight: 500;
      width: 100%;
    }
  }
`
