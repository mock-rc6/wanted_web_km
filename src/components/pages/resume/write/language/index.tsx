import { WhiteArrow } from 'assets'
import AddButton from '../../addButton'
import Guidance from '../guidance'
import { LanguageBox, LanguageWrapper } from './language.styles'

const Language = () => {
  return (
    <LanguageWrapper>
      <Guidance
        title='외국어'
        contents='• 외국어 자격증을 보유한 경우 작성해주세요. 
• 활용 가능한 외국어가 있다면, 어느정도 수준인지 레벨을 선택해주세요.'
      />
      <AddButton />
      <LanguageBox>
        <div className='languageLeft' />
        <div className='languageRight'>
          <div className='language'>
            언어
            <WhiteArrow />
          </div>
          <div className='level'>
            수준
            <WhiteArrow />
          </div>
          <div className='addButton'>
            <button type='button'>+ 어학시험 추가</button>
          </div>
          <div className='performance'>
            <input type='text' placeholder='시험명' className='exam' />
            <input type='text' placeholder='점수/급' className='grade' />
            <div className='range'>
              <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
              <input type='text' maxLength={2} placeholder='MM' className='month' />.
              <input type='text' maxLength={2} placeholder='DD' className='month' />
            </div>
          </div>
        </div>
      </LanguageBox>
    </LanguageWrapper>
  )
}

export default Language
