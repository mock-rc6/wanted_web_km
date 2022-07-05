import { FilterIcon, LinedArrow, Logo, MatchUpIcon, ProfileIcon, QuestionIcon, SearchBigIcon, WhiteArrow } from 'assets'
import Footer from 'components/common/layout/footer'
import ArticleCard from './articleCard'
import Carousel from './carousel'
import EventCard from './eventCard'
import InsightCard from './insightCard'
import { MainWrapper } from './main.styles'
import VODCard from './vodCard'

const Main = () => {
  return (
    <>
      <MainWrapper>
        <Carousel />
        <section className='insight'>
          <div className='title'>
            <h1>나에게 필요한 커리어 인사이트</h1> <QuestionIcon />
          </div>
          <ul className='chips'>
            <li className='chipSelected'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
            <li className='chip'>취업/이직</li>
          </ul>
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
          <span className='subTitle'>
            아티클 전체보기 <LinedArrow />
          </span>
          <ul className='articlesUl'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ul>
        </section>
        <hr className='divider' />
        <section className='articles'>
          <h1>개발자를 위한 Wanted+ VOD</h1>
          <span className='subTitle'>
            VOD 전체보기
            <LinedArrow />
          </span>
          <ul className='articlesUl'>
            <VODCard />
            <VODCard />
            <VODCard />
            <VODCard />
          </ul>
        </section>
        <div className='buttonWrapper'>
          <button type='button' className='vodBtn'>
            무제한으로 즐기는 700여편의 커리어 콘텐츠
            <Logo className='logo' />
            <WhiteArrow className='arrow' />
          </button>
        </div>
        <section className='articles'>
          <h1>커리어 성장을 위한 맞춤 이벤트</h1>
          <span className='subTitle'>
            이벤트 전체보기
            <LinedArrow />
          </span>
          <ul className='articlesUl'>
            <EventCard />
            <EventCard />
          </ul>
        </section>
        <section className='wantedplus'>
          <div className='wantedplusWrapper'>
            <div className='wantedplusLeft'>
              <div className='plustitle'>
                <Logo />
                구독해야 하는 이유
              </div>
              <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
              <button type='button' className='subscribe'>
                <WhiteArrow />첫 구독 0원 신청하기
              </button>
            </div>
            <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90' />
          </div>
        </section>
        <section className='articles'>
          <h1>채용 정보를 찾고 계셨나요?</h1>
          <div className='footerNav'>
            <div>
              <SearchBigIcon />
              <span>
                채용공고
                <WhiteArrow />
              </span>
            </div>
            <div>
              <ProfileIcon />
              <span>
                내 프로필 <WhiteArrow />
              </span>
            </div>
            <div>
              <MatchUpIcon />
              <span>
                매치업 <WhiteArrow />
              </span>
            </div>
            <div>
              <FilterIcon />
              <span>
                직군별 연봉 <WhiteArrow />
              </span>
            </div>
          </div>
        </section>
      </MainWrapper>
      <Footer />
    </>
  )
}

export default Main
