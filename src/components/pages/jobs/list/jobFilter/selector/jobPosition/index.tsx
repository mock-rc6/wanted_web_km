import { Dispatch, SetStateAction, Fragment, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import PositionItem from './jobPositiionItem'

interface IFilters {
  [prop: string]: boolean
}

interface IProps {
  setPositionString: Dispatch<SetStateAction<string>>
  toggle: Dispatch<SetStateAction<IFilters>>
}

const JobPositionSelector = ({ setPositionString, toggle }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [positionArr, setPositionArr] = useState<string[]>([])

  const isSelected = positionArr.length > 0

  const handleClickSubmit = () => {
    searchParams.delete('positions')
    positionArr.map((position: string) => searchParams.append('positions', position))
    setSearchParams(searchParams)
    setPositionString(positionArr.join(', '))
    toggle({ positions: false })
  }

  // prettier-ignore
  const jobPosition = [
    '웹 개발자', '서버 개발자', '프론트엔드 개발자', '소프트웨어 엔지니어', '자바 개발자', '안드로이드 개발자','iOS 개발자', 'Node.js 개발자', '데이터 엔지니어', '파이썬 개발자', 'DevOps / 시스템 관리자',  'C,C++ 개발자', '시스템,네트워크 관리자', '머신러닝 엔지니어', '데이터 사이언티스트', '빅데이터 엔지니어', 'QA,테스트 엔지니어', '개발 매니저', '기술지원', '보안 엔지니어', '프로덕트 매니저', 'PHP 개발자', '블록체인 플랫폼 엔지니어',  '임베디드 개발자', '웹 퍼블리셔', '하드웨어 엔지니어', '크로스플랫폼 앱 개발자', '.NET 개발자', '영상,음성 엔지니어', 'DBA', '그래픽스 엔지니어', 'CTO,Chief Technology Officer', 'VR 엔지니어', 'ERP전문가', '루비온레일즈 개발자', 'BI 엔지니어', 'CIO,Chief Information Officer',
  ]

  return (
    <SelectorWrapper>
      <div className='top'>
        <p className='title'>직무를 선택해 주세요. (최대 5개 선택 가능)</p>
        <ul>
          <button type='button' className={!isSelected ? 'selectedItem' : 'defaultItem'}>
            <li>개발 전체</li>
          </button>
          {jobPosition.map((position) => (
            <Fragment key={position}>
              <PositionItem position={position} positionArr={positionArr} setPositionArr={setPositionArr} />
            </Fragment>
          ))}
        </ul>
      </div>
      <div className='bottom'>
        <button className='selectBtn' type='button' onClick={handleClickSubmit}>
          <span>선택 완료하기</span>
        </button>
      </div>
    </SelectorWrapper>
  )
}

export default JobPositionSelector

const SelectorWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 40px;
  width: calc(100% - 140px);
  max-width: 910px;
  height: fit-content;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  border-radius: 5px;
  z-index: 99;

  .top {
    padding: 25px 25px 8px;
    max-width: 910px;
    .title {
      color: #666;
      font-weight: 400;
      font-size: 12px;
      line-height: 14.4px;
      margin-bottom: 10px;
    }

    .defaultItem {
      height: 32px;
      margin-right: 10px;
      margin-bottom: 12px;
      border: 1px solid #f2f4f7;
      background: #f2f4f7;
      border-radius: 20px;
      padding: 8px 14px;
      font-size: 13px;
      line-height: 16px;
      font-weight: 400;
      color: #333;
    }

    .selectedItem {
      border: 1px solid #36f;
      color: #36f;
      background-color: #fff;
      font-weight: 600;
      height: 32px;
      margin-right: 10px;
      margin-bottom: 12px;
      border-radius: 20px;
      padding: 8px 14px;
      font-size: 13px;
      line-height: 16px;
    }
  }

  .bottom {
    padding: 16px;
    text-align: right;
    border-top: 1px solid #ececec;
    background-color: #fff;

    .selectBtn {
      width: 160px;
      height: 40px;
      font-size: 15px;
      color: #fff;
      background-color: #36f;
      border: none;
      border-radius: 25px;
      font-weight: 700;
    }
  }
`
