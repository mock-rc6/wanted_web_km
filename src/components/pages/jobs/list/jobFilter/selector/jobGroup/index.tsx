import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

interface IFilters {
  [prop: string]: boolean
}

interface IProps {
  selectedJobGroup: string
  setSelectedJobGroup: (value: string) => void
  toggle: React.Dispatch<React.SetStateAction<IFilters>>
}

const JobGroupSelector = ({ selectedJobGroup, setSelectedJobGroup, toggle }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const JOB_GROUP = [
    '전체',
    '개발',
    '경영∙비즈니스',
    '마케팅∙광고',
    '디자인',
    '영업',
    '고객서비스∙리테일',
    'HR',
    '게임제작',
    '미디어',
    '엔지니어링∙설계',
    '금융',
    '의료∙제약∙바이오',
    '물류∙무역',
    '제조∙생산',
    '교육',
    '식음료',
    '법률∙법집행기관',
    '건설∙시설',
    '공공∙복지',
  ]

  const handleClickJobGroup = (groupName: string) => {
    if (searchParams.has('job_group')) searchParams.delete('job_group')
    searchParams.append('job_group', '개발')
    setSearchParams(searchParams)
    setSelectedJobGroup(groupName)
    toggle({ job_group: false })
  }

  return (
    <JobGroupSelectorWrapper>
      <ul>
        {JOB_GROUP.map((groupName, index) => (
          <button
            type='button'
            key={index}
            onClick={() => {
              handleClickJobGroup(groupName)
            }}
          >
            <li className={groupName === selectedJobGroup ? 'focused' : 'submenu'}>{groupName}</li>
          </button>
        ))}
      </ul>
    </JobGroupSelectorWrapper>
  )
}

export default JobGroupSelector

const JobGroupSelectorWrapper = styled.div`
  width: 190px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 40px;
  overflow-y: hidden;
  max-width: 220px;
  height: 70vh;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  border-radius: 5px;
  z-index: 99;
  padding: 15px 0;
  :hover {
    overflow-y: scroll;
  }

  ul {
    .focused {
      color: #36f;
      font-weight: 500;
    }
    .submenu {
      color: #333;
      font-weight: 400;
    }
    button {
      width: 100%;
      font-size: 16px;
      text-align: left;
      :hover {
        background-color: #f9f9f9;
      }
    }

    li {
      text-align: left;
      padding: 11px 25px 9px;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`
