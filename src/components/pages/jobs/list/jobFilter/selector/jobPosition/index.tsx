import { MouseEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const JobPositionSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [positionArr, setPositionArr] = useState<string[]>([])

  const handleClickPosition = (e: MouseEvent<HTMLButtonElement>) => {
    if (positionArr.length >= 5) {
      alert('최대 5개 선택 가능')
      return
    }
    if (positionArr.includes(String(e.currentTarget.dataset.title))) return
    setPositionArr([...positionArr, String(e.currentTarget.dataset.title)])
    searchParams.append('positions', String(e.currentTarget.dataset.query))
  }

  const handleClickSubmit = () => {
    setSearchParams(searchParams)
  }

  const jobPosition = [
    { title: '웹 개발자', query: 'web' },
    { title: '서버 개발자', query: 'server' },
    { title: '프론트엔드 개발자', query: 'frontend' },
    { title: '소프트웨어 엔지니어', query: 'software' },
    { title: '자바 개발자', query: 'java' },
    { title: '안드로이드 개발자', query: 'android' },
    { title: 'iOS 개발자', query: 'ios' },
    { title: 'Node.js 개발자', query: 'nodejs' },
    { title: '데이터 엔지니어', query: 'data-engineer' },
    { title: '파이썬 개발자', query: 'python' },
    { title: 'DevOps / 시스템 관리자', query: 'devops' },
    { title: 'C,C++ 개발자', query: 'c' },
    { title: '시스템,네트워크 관리자', query: 'system' },
    { title: '머신러닝 엔지니어', query: 'machinelearning' },
    { title: '데이터 사이언티스트', query: 'data-scientist' },
    { title: '빅데이터 엔지니어', query: 'bigdata' },
    { title: 'QA,테스트 엔지니어', query: 'qa' },
    { title: '개발 매니저', query: 'develop-manager' },
    { title: '기술지원', query: 'suport' },
    { title: '보안 엔지니어', query: 'security' },
    { title: '프로덕트 매니저', query: 'product-manager' },
    { title: 'PHP 개발자', query: 'php' },
    { title: '블록체인 플랫폼 엔지니어', query: 'block-chain' },
    { title: '임베디드 개발자', query: 'embeded' },
    { title: '웹 퍼블리셔', query: 'web-publisher' },
    { title: '하드웨어 엔지니어', query: 'hardware' },
    { title: '크로스플랫폼 앱 개발자', query: 'corss-platform' },
    { title: '.NET 개발자', query: 'net' },
    { title: '영상,음성 엔지니어', query: 'video' },
    { title: 'DBA', query: 'dba' },
    { title: '그래픽스 엔지니어', query: 'graphics' },
    { title: 'CTO,Chief Technology Officer', query: 'ctd' },
    { title: 'VR 엔지니어', query: 'vr' },
    { title: 'ERP전문가', query: 'erp' },
    { title: '루비온레일즈 개발자', query: 'ruby' },
    { title: 'BI 엔지니어', query: 'bi' },
    { title: 'CIO,Chief Information Officer', query: 'cio' },
  ]

  return (
    <SelectorWrapper>
      <div className='top'>
        <p className='title'>직무를 선택해 주세요. (최대 5개 선택 가능)</p>
        <ul>
          <button type='button' className='selectedItem'>
            <li>개발 전체</li>
          </button>
          {jobPosition.map((position) => (
            <button
              key={position.query}
              type='button'
              className='defaultItem'
              data-title={position.title}
              data-query={position.query}
              onClick={handleClickPosition}
            >
              <li>{position.title}</li>
            </button>
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
