import { LinedArrow } from 'assets'
import FilterButton from 'components/common/buttons/filterButton'
import TagButton from 'components/common/buttons/tagButton'
import { useState } from 'react'
import { JobFilterWrapper, StickyFilter } from './jobFilter.styles'

const JobFilter = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const hashTags = [
    { text: '연봉이 최고의 복지 💰', color: '#f2fbf4' },
    { text: '재택근무 🏠', color: '#f2f9fe' },
    { text: '퇴사율 10% 이하 📍', color: '#f3f1fb' },
    { text: '급성장 중 📈', color: '#f5f7ee' },
    { text: '병역특례 👦', color: '#f8f1f8' },
    { text: '50인 이하 ⬇', color: '#edfbf9' },
    { text: '50인 이상 ⬆️', color: '#edf1fb' },
    { text: '연봉이 최고의 복지 💰', color: '#f2fbf4' },
    { text: '재택근무 🏠', color: '#f2f9fe' },
  ]

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })
  return (
    <JobFilterWrapper isScrolled={isScrolled}>
      <div className='wrapper'>
        <div className='title'>
          <div className='jobGroup'>전체</div>
          <div className='arrowWrapper'>
            <LinedArrow />
          </div>
          <div className='jobCategory'>직군을 선택해주세요.</div>
        </div>
      </div>
      <StickyFilter>
        <div className='wrapper'>
          <div className='filterMenu'>
            <div className='category'>
              <FilterButton dt='지역' dd='한국' margin={10} />
              <span className='filterCounter'>1</span>
              <FilterButton dt='경력' dd='전체' margin={10} arrow />
              <FilterButton dt='기술스택' arrow />
            </div>
            <FilterButton dt='응답률순' arrow />
          </div>
          <hr className='divider' />
          <div className='buttons'>
            {hashTags.map((tag, index) => (
              <TagButton text={tag.text} color={tag.color} key={`tag-${index}`} />
            ))}
          </div>
        </div>
      </StickyFilter>
    </JobFilterWrapper>
  )
}

export default JobFilter
