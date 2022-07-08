import { ChangeEvent, useEffect, useState } from 'react'
import AddButton from '../../addButton'
import Guidance from '../guidance'
import { CareerBox, CareerWrapper } from './carrer.styles'

interface IProps {
  careers: ICareer[]
  setCareers: (value: ICareer[]) => void
}

interface ICareer {
  id: number
  start_date: string
  end_date: string
  company_name: string
  department_position: string
  results: IResults[]
}

interface IResults {
  id: number
  title: string
  detail: string
  start_date: string
  end_date: string
}

const Carrer = ({ careers, setCareers }: IProps) => {
  const [careerInputs, setCarrerInputs] = useState<ICareer>({
    id: careers.length,
    start_date: '',
    end_date: '',
    company_name: '',
    department_position: '',
    results: [
      {
        id: 0,
        title: '',
        detail: '',
        start_date: '',
        end_date: '',
      },
    ],
  })

  const [results, setResults] = useState<IResults>({
    id: careerInputs.results.length,
    title: '',
    detail: '',
    start_date: '',
    end_date: '',
  })

  const [startYear, setStartYear] = useState('')
  const [startMonth, setStartMonth] = useState('')
  const [endYear, setEndYear] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [isResultOpen, setIsResultOpen] = useState(false)

  const handleClickAddCareer = () => {
    setCareers(careers.concat(careerInputs))
  }

  const handleDetailClick = () => {
    setIsResultOpen((prev) => !prev)
  }

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setCarrerInputs({
      ...careerInputs,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleChangeDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setResults({
      ...results,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  useEffect(() => {
    setCarrerInputs({
      ...careerInputs,
      results: [results],
    })
  }, [results])

  useEffect(() => {
    setCarrerInputs({
      ...careerInputs,
      start_date: startYear + startMonth,
      end_date: endYear + endMonth,
    })
  }, [startYear, startMonth, endYear, endMonth])

  useEffect(() => {
    setCareers([careerInputs])
  }, [careerInputs])

  return (
    <CareerWrapper>
      <Guidance
        title='경력'
        contents='• 담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요. 
• 경력사항이 없는 경우 신입으로 작성해주세요.
• 업무 성과는 되도록 구체적인 숫자 혹은 %로 표현해주세요!'
      />
      <AddButton onClick={handleClickAddCareer} />
      {careers?.map((el) => (
        <CareerBox key={el.id}>
          <div className='carrerLeft'>
            <div className='range'>
              <input
                type='text'
                maxLength={4}
                placeholder='YYYY'
                className='year'
                id='start_year'
                onChange={(e) => {
                  setStartYear(e.currentTarget.value)
                }}
              />
              .
              <input
                type='text'
                maxLength={2}
                placeholder='MM'
                className='month'
                id='start_month'
                onChange={(e) => {
                  setStartMonth(e.currentTarget.value)
                }}
              />
              -
              <input
                type='text'
                maxLength={4}
                placeholder='YYYY'
                className='year'
                id='end_year'
                onChange={(e) => {
                  setEndYear(e.currentTarget.value)
                }}
              />
              .
              <input
                type='text'
                maxLength={2}
                placeholder='MM'
                className='month'
                id='end_month'
                onChange={(e) => {
                  setEndMonth(e.currentTarget.value)
                }}
              />
              <span>*</span>
            </div>
            <label>
              <input type='checkbox' /> 현재 재직 중
            </label>
          </div>
          <div className='carrerRight'>
            <input
              type='text'
              placeholder='회사명'
              className='companyName'
              id='company_name'
              onChange={handleChangeInputs}
            />
            <input
              type='text'
              placeholder='부서명/직책'
              className='department'
              id='department_position'
              onChange={handleChangeInputs}
            />
            <div className='addButton'>
              <button type='button' onClick={handleDetailClick}>
                + 주요 성과 추가
              </button>
            </div>
            {isResultOpen && (
              <div className='performance'>
                <input
                  type='text'
                  placeholder='주요 성과'
                  className='performanceTitle'
                  id='title'
                  onChange={handleChangeDetail}
                />
                <div className='range'>
                  <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
                  <input type='text' maxLength={2} placeholder='MM' className='month' />
                  -
                  <input type='text' maxLength={4} placeholder='YYYY' className='year' />.
                  <input type='text' maxLength={2} placeholder='MM' className='month' />
                  <span>*</span>
                </div>
                <input
                  type='text'
                  placeholder='상세 업무 내용과 성과를 기입해주세요'
                  className='performanceDetail'
                  id='detail'
                  onChange={handleChangeDetail}
                />
              </div>
            )}
          </div>
        </CareerBox>
      ))}
    </CareerWrapper>
  )
}

export default Carrer
