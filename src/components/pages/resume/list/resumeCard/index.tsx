import styled from 'styled-components'
import ResumeCardInfo from './info'

const ResumeCard = () => {
  return (
    <ResumeCardWrapper>
      <div className='itemTitle'>
        <h3 className='resumeTitle'>민경미</h3>
        <p className='date'>2022.06.29</p>
        <span className='matchUp'>매치업 이력서</span>
      </div>
      <ResumeCardInfo />
    </ResumeCardWrapper>
  )
}

export default ResumeCard

const ResumeCardWrapper = styled.div`
  width: 100%;
  .itemTitle {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .resumeTitle {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.33;
      max-height: 46px;
      max-width: 100%;
      letter-spacing: normal;
      text-align: left;
      color: #333;
      overflow: hidden;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      border: none;
    }
    .date {
      color: #999;
      margin-top: 5px;
    }
    .matchUp {
      color: #36f;
      font-weight: 600;
    }
  }
`
