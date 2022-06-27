import { FooterWrapper } from './footer.styles'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer'>
        <div className='footerTop'>
          <div className='footerTopLeft'>
            <div className='logo'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&amp;w=110&amp;q=75'
                alt='wanted'
              />
            </div>
            <div className='menu'>
              <a href='https://www.wantedlab.com/'>기업소개</a>
              <a href='https://help.wanted.co.kr/hc/ko/articles/360035844551'>이용약관</a>
              <a href='https://www.wanted.co.kr/privacy'>개인정보 처리방침</a>
              <a href='https://help.wanted.co.kr/hc/ko/'>고객센터</a>
            </div>
          </div>
          <div className='footerTopRight'>
            <a href='https://www.instagram.com/wantedjobs.kr/'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=75'
                alt='instagram'
              />
            </a>
            <a href='https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=75'
                alt='youtube'
              />
            </a>
            <a href='https://www.facebook.com/wantedkr'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=75'
                alt='facebook'
              />
            </a>
            <a href='https://blog.naver.com/wantedlab'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=75'
                alt='blog'
              />
            </a>
            <a href='https://pf.kakao.com/_XqCIxl'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=75'
                alt='kakao'
              />
            </a>
            <a href='https://post.naver.com/my.nhn?memberNo=18284175'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=75'
                alt='post'
              />
            </a>
            <a href='https://apps.apple.com/kr/app/id1074569961'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=75'
                alt='apple'
              />
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.wanted.android.wanted'>
              <img
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=75'
                alt='google'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='footerBottom'>
        <address>
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 :
          2020-서울송파-3147
          <br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 :
          299-86-00021 | 02-539-7118
          <br />© Wantedlab, Inc.
        </address>
        <div className='language'>
          <img
            className='countryIcon'
            src='https://static.wanted.co.kr/images/userweb/ico_KR.svg'
            alt='country flag KR'
          />
          <select>
            <option value='KR'>한국 (한국어)</option>
            <option value='JP'>日本 (日本語)</option>
            <option value='WW'>Worldwide (English)</option>
            <option value='SG'>Singapore (English)</option>
          </select>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
