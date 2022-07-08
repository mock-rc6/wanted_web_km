import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ResumeCardInfo from './info'

interface IProps {
  resume: {
    id: number
    title: string
    updated_at: Date
    is_finished: boolean
  }
}

const ResumeCard = ({ resume }: IProps) => {
  return (
    <ResumeCardWrapper>
      <Link to={`/resume/write/${resume.id}`}>
        <div className='itemTitle'>
          <h3 className={resume.is_finished ? 'resumeTitle' : 'notFinished'}>{resume.title}</h3>
          <p className='date'>{String(resume.updated_at).slice(0, 10)}</p>
          {resume.is_finished && <span className='matchUp'>매치업 이력서</span>}
        </div>
      </Link>
      <ResumeCardInfo isFinished={resume.is_finished} id={resume.id} />
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

    .notFinished {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.33;
      max-height: 46px;
      max-width: 100%;
      letter-spacing: normal;
      text-align: left;
      color: #999;
      overflow: hidden;
      word-break: break-all;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      border: none;
    }

    .date {
      color: #999 !important;
      margin-top: 5px;
    }

    .matchUp {
      color: #36f;
      font-weight: 600;
    }
  }
`
