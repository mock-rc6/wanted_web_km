import { MouseEvent, useState } from 'react'
import { LinedArrow } from 'assets'
import FilterButton from 'components/common/buttons/filterButton'
import TagButton from 'components/common/buttons/tagButton'
import { JobFilterWrapper, StickyFilter } from './jobFilter.styles'
import JobGroupSelector from './selector/jobGroup'
import JobPositionSelector from './selector/jobPosition'

interface IFilters {
  [prop: string]: boolean
}

const JobFilter = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const [isFilterOpen, setIsFilterOpen] = useState<IFilters>({
    job_group: false,
    years: false,
    positions: false,
    locations: false,
    techstacks: false,
  })

  // query value 값이 아니고 렌더링 될 string
  const [selectedJobGroup, setSelectedJobGroup] = useState('전체')
  const [positions, setPositions] = useState('전체')
  const [years, setYears] = useState('전체')
  const [locations, setLocations] = useState('한국')

  const handleClickFilters = (e: MouseEvent<HTMLButtonElement>) => {
    setIsFilterOpen({
      [e.currentTarget.id]: !isFilterOpen[e.currentTarget.id],
    })
  }

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
          <button type='button' className='jobGroup' id='job_group' onClick={handleClickFilters}>
            {selectedJobGroup}
            <div className='arrowWrapper'>
              <LinedArrow />
            </div>
          </button>
          {isFilterOpen.job_group && (
            <JobGroupSelector
              selectedJobGroup={selectedJobGroup}
              setSelectedJobGroup={setSelectedJobGroup}
              toggle={setIsFilterOpen}
            />
          )}

          <button
            type='button'
            className={selectedJobGroup === '전체' ? 'default' : 'selected'}
            id='positions'
            onClick={handleClickFilters}
          >
            {selectedJobGroup === '전체' ? '직군을 선택해주세요.' : `${selectedJobGroup} 전체`}
            {selectedJobGroup !== '전체' && (
              <div className='arrowWrapper'>
                <LinedArrow />
              </div>
            )}
          </button>
          {isFilterOpen.positions && <JobPositionSelector />}
        </div>
      </div>
      <StickyFilter>
        <div className='wrapper'>
          <div className='filterMenu'>
            <div className='category'>
              <FilterButton dt='지역' dd={locations} margin={10} id='locations' onClick={handleClickFilters} />
              <span className='filterCounter'>1</span>
              <FilterButton dt='경력' dd={years} margin={10} id='years' onClick={handleClickFilters} arrow />
              <FilterButton dt='기술스택' id='techstacks' onClick={handleClickFilters} arrow />
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
