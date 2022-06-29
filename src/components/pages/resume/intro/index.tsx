import { ResumeIntroWrapper } from './intro.styles'

const ResumeIntro = () => {
  return (
    <ResumeIntroWrapper>
      <section className='resumeIntro1'>
        <div className='resumeIntroWrapper'>
          <h1>이력서 양식, 그 이상</h1>
          <h2>
            채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는 도구를 만들었습니다. <br />
            <br />
            서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.
          </h2>
          <div className='buttons'>
            <button type='button' className='default'>
              이력서 관리
            </button>
            <button type='button' className='primary'>
              새 이력서 작성
            </button>
          </div>
        </div>
        <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_01_en.png' />
      </section>
      <section className='resumeIntro2'>
        <div className='resumeIntroWrapper'>
          <h1>지원에 유리한</h1>
          <h2>
            글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에 맞춰서 제작하였습니다. <br />
            <br />
            군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.
          </h2>
        </div>
      </section>
      <section className='resumeIntro3'>
        <div className='resumeIntroWrapper'>
          <h1>본질에 집중한</h1>
          <h2>
            보다 명확한 정보 설계로 당신의 커리어를 돋보이게 만들어 드립니다. <br />
            <br />
            불필요한 정보 입력을 최소화하고 이력서 작성에 방해가 되는 UI 요소들을 제거하였습니다.
          </h2>
        </div>
        <img src='https://static.wanted.co.kr/images/userweb/resume_intro/resume_03_ko.png' />
      </section>
      <section className='resumeIntro4'>
        <div className='resumeIntroWrapper'>
          <h1>활용이 자유로운</h1>
          <h2>
            PC/모바일 어디에서나 작성할 수 있고, PDF 파일로 저장과 활용이 쉽습니다. <br />
            <br />
            가독성에 중점을 두고 설계하여, 파일 저장/출력시에도 돋보이는 결과물을 얻을 수 있습니다.
          </h2>
          <div className='buttons'>
            <a href='https://static.wanted.co.kr/images/userweb/resume-sample/sample_resume_ko.pdf' className='default'>
              샘플 다운로드
            </a>
            <button type='button' className='primary'>
              새 이력서 작성
            </button>
          </div>
        </div>
      </section>
    </ResumeIntroWrapper>
  )
}

export default ResumeIntro
