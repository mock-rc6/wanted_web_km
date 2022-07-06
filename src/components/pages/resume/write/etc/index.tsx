import AddButton from '../../addButton'
import Guidance from '../guidance'
import { ETCBox, ETCWrapper } from './etc.styles'

const ETC = () => {
  return (
    <ETCWrapper>
      <Guidance
        title='수상 및 기타'
        contents='• 수상 이력, 직무 관련 자격증, 수료한 교육이나 참석한 외부활동 등이 있다면 간략히 작성해주세요.
• 지원하는 회사에서 요구하는 경우가 아니라면 운전면허증과 같은 자격증은 생략하는 것이 좋습니다!'
      />
      <AddButton />
      <ETCBox>
        <div className='etcLeft'>
          <div className='range'>
            <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
            <input type='text' maxLength={2} placeholder='MM' className='month' />
          </div>
        </div>
        <div className='etcRight'>
          <input type='text' placeholder='활동명' className='etcName' />
          <input type='text' placeholder='세부사항' className='etcDetail' />
        </div>
      </ETCBox>
    </ETCWrapper>
  )
}

export default ETC
