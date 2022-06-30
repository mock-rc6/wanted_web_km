import { InfoIcon } from 'assets'

import { ListWrapper } from './list.styles'
import ResumeCard from './resumeCard'
import NewBtn from './resumeCard/newBtn'
import UploadBtn from './resumeCard/uploadBtn'

const ResumeList = () => {
  return (
    <ListWrapper>
      <div className='listBody'>
        <div className='title'>
          <h4>최근 문서</h4>
          <span className='intro'>
            원티드 이력서 소개
            <InfoIcon />
          </span>
        </div>
        <ul className='listContents'>
          <li className='default'>
            <NewBtn />
          </li>
          <li className='default'>
            <UploadBtn />
          </li>
          <li>
            <ResumeCard />
          </li>
        </ul>
      </div>
    </ListWrapper>
  )
}
export default ResumeList
