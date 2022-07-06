import AddButton from '../../addButton'
import Guidance from '../guidance'
import { EducationBox, EducationWrapper } from './education.styles'

const Education = () => {
  return (
    <EducationWrapper>
      <Guidance title='학력' contents='• 최신순으로 작성해주세요.' />
      <AddButton />
      <EducationBox>
        <div className='educationLeft'>
          <div className='range'>
            <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
            <input type='text' maxLength={2} placeholder='MM' className='month' />
            -
            <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
            <input type='text' maxLength={2} placeholder='MM' className='month' />
            <span>*</span>
          </div>
          <label>
            <input type='checkbox' /> 현재 재학 중
          </label>
        </div>
        <div className='educationRight'>
          <input type='text' placeholder='학교명' className='schoolName' />
          <input type='text' placeholder='전공 및 학위 (ex: 경영학과 학사)' className='department' />
          <input type='text' placeholder='상세 업무 내용과 성과를 기입해주세요' className='performanceDetail' />
        </div>
      </EducationBox>
    </EducationWrapper>
  )
}

export default Education
