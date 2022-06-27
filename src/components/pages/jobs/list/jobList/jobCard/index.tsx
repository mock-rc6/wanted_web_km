import { BookmarkIcon } from 'assets'
import ResRateLabel from 'components/common/labels/responseRate'
import styled from 'styled-components'

const JobCard = () => {
  return (
    <CardWrapper>
      <div className='imgWrapper'>
        <img src='https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/403/wmcdajeixelbaztn__400_400.jpg&w=400&q=undefined' />
        <button type='button' className='bookmarkBtn'>
          <BookmarkIcon />
        </button>
      </div>
      <div className='cardContents'>
        <h3 className='jobTitle'>[삼쩜삼]프론트엔드 엔지니어</h3>
        <p className='companyName'>자비스앤빌런즈(삼쩜삼)</p>
        <ResRateLabel />
        <p className='companyLocation'>서울 ∙ 한국</p>
        <p className='reward'>채용보상금 1,000,000원</p>
      </div>
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
