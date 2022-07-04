import { LinedArrow } from 'assets'
import InsightCard from './insightCard'
import { MainWrapper } from './main.styles'

const Main = () => {
  return (
    <MainWrapper>
      <section className='insight'>
        <h1>나에게 필요한 커리어 인사이트</h1>
        <ul className='insightCardList'>
          <InsightCard />
          <InsightCard />
          <InsightCard />
          <InsightCard />
          <InsightCard />
          <InsightCard />
          <InsightCard />
          <InsightCard />
        </ul>
        <button type='button' className='moreBtn'>
          더 많은 콘텐츠 보기
          <LinedArrow />
        </button>
      </section>
      <section className='creater'>
        <div className='banner'>
          <div className='bannerContainer'>
            <div className='bannerLeft'>
              <div className='bannerText'>
                즐겨보는
                <span>크리에이터의</span>
                글도 추천하고 싶다면?
              </div>
              <div className='bannerImg'>
                <img
                  src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&amp;w=121&amp;q=75'
                  alt='크리에이터 추천하기'
                  loading='lazy'
                />
              </div>
            </div>
            <a className='bannerBtn' href='https://forms.gle/uurkbpmkA1FapxGJ6'>
              <span className='Button_Button__label__1Kk0v'>크리에이터 추천하기</span>
            </a>
          </div>
        </div>
      </section>
      <section className='articles'>
        <h1>3분만에 읽는 Wanted+ 아티클</h1>
      </section>
    </MainWrapper>
  )
}

export default Main
