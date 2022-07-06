import AddButton from '../../addButton'
import Guidance from '../guidance'
import { CareerBox, CareerWrapper } from './carrer.styles'

const Carrer = () => {
  return (
    <CareerWrapper>
      <Guidance
        title='경력'
        contents='• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요. 
• 경력사항이 없는 경우 신입으로 작성해주세요.
• 업무 성과는 되도록 구체적인 숫자 혹은 %로 표현해주세요!'
      />
      <AddButton />
      <CareerBox>
        <div className='carrerLeft'>
          <div className='range'>
            <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
            <input type='text' maxLength={2} placeholder='MM' className='month' />
            -
            <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
            <input type='text' maxLength={2} placeholder='MM' className='month' />
            <span>*</span>
          </div>
          <label>
            <input type='checkbox' /> 현재 재직 중
          </label>
        </div>
        <div className='carrerRight'>
          <input type='text' placeholder='회사명' className='companyName' />
          <input type='text' placeholder='부서명/직책' className='department' />
          <div className='addButton'>
            <button type='button'>+ 주요 성과 추가</button>
          </div>
          <div className='performance'>
            <input type='text' placeholder='주요 성과' className='performanceTitle' />
            <div className='range'>
              <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
              <input type='text' maxLength={2} placeholder='MM' className='month' />
              -
              <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
              <input type='text' maxLength={2} placeholder='MM' className='month' />
              <span>*</span>
            </div>
            <input type='text' placeholder='상세 업무 내용과 성과를 기입해주세요' className='performanceDetail' />
          </div>
        </div>
      </CareerBox>
    </CareerWrapper>
  )
}

export default Carrer
