import Images from './images'
import ResRateMediumLabel from 'components/common/labels/responseRate/medium'
import CompanyCard from './companyCard'

import { JobContents } from './contents.styles'
import WarningCard from './warningCard'

const Contents = ({ scrollRef }: any) => {
  const map =
    'https://naveropenapi.apigw.ntruss.com/map-static/v2/raster-cors?w=700&h=254&markers=type:d|size:mid|color:red|pos:127.0480901%2037.5038089&format=png&scale=2&X-NCP-APIGW-API-KEY-ID=6j3nqcgb0s'

  return (
    <div>
      <Images />
      <JobContents>
        <h2>[삼쩜삼] 프론트엔드 엔지니어</h2>
        <div className='company'>
          <span className='companyName'>자비스앤빌런즈(삼쩜삼)</span>
          <ResRateMediumLabel />
          <span className='location'>
            <span className='divider'>|</span>
            서울 ∙ 한국
          </span>
        </div>
        <ul className='hashTags'>
          <li className='tag'>#연봉상위1%</li>
          <li className='tag'>#인원급성장</li>
        </ul>
        <article>
          개인 세무 시장을 혁신하는 Tax-tech 스타트업, 삼쩜삼(자비스앤빌런즈)
          <br />
          <br />
          삼쩜삼(자비스앤빌런즈)는 개인 세금 신고와 환급을 도와주는 서비스로, 출시 21개월만에 가입자 1000만명이라는
          가파른 성장을 보이고 있습니다.
          <br />
          <br />
          2021년 12월 모바일 앱을 출시 후, 차별화된 연말정산 미리보기 서비스를 통해 또 한 번 세무 시장을 선도하려
          합니다. 2022년 삼쩜삼(자비스앤빌런즈)의 목표는 세무가 어렵다는 선입견을 깨고 누구나 잘 알고 쉽게 이용할 수
          있게 세무서비스를 만드는 것입니다.
          <br />
          <br />
          삼쩜삼이 만들어 나갈 새로운 도전에 함께 할 빌런즈를 적극 채용하고 있습니다.
          <br />
          오늘도 로켓 성장 중인 삼쩜삼 팀에 합류하세요!
          <br />
        </article>
        <div className='workPlace' ref={scrollRef}>
          <dl>
            <dt>마감일</dt>
            <dd>상시</dd>
          </dl>
          <dl>
            <dt>근무지역</dt>
            <dd>서울특별시 강남구 테헤란로 332 HJ타워, 10층</dd>
          </dl>
          <img src={map} alt='map' />
        </div>
        <CompanyCard />
        <WarningCard />
      </JobContents>
    </div>
  )
}

export default Contents
