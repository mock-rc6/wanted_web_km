import { SearchIcon } from 'assets'
import AddButton from '../../addButton'
import Guidance from '../guidance'
import { SkillBox, SkillWrapper } from './skill.styles'

const Skill = () => {
  return (
    <SkillWrapper>
      <Guidance
        title='스킬'
        contents='• 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.
• 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요.'
      />
      <AddButton />
      <SkillBox>
        많이 쓰는 인기 스킬을 추가해보세요.
        <ul className='skillList'>
          <li>
            <button type='button'>React +</button>
          </li>
        </ul>
      </SkillBox>
      <div className='search'>
        <input type='text' placeholder='보유 스킬을 검색해주세요.' />
        <SearchIcon />
      </div>
      <ul className='selected'>
        <li>React ✕</li>
      </ul>
    </SkillWrapper>
  )
}

export default Skill
