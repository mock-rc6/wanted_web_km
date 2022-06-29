import styled from 'styled-components'

export const ResumeIntroWrapper = styled.div`
  margin-top: 50px;
  background: #fff;
  .default {
    margin: 0 5px;
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #fff;
    color: #36f;
    border: 1px solid #36f;
  }

  .primary {
    margin: 0 5px;
    padding: 15px 50px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #36f;
    border: 1px solid #36f;
    color: #fff;
  }

  .buttons {
    padding-top: 30px;
  }

  .resumeIntroWrapper {
    padding: 80px 0 20px;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    word-break: keep-all;
    word-wrap: break-word;
  }
  .resumeIntro1 {
    padding-top: 20px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      font-size: 56px;
      font-weight: 600;
    }
    h2 {
      font-size: 18px;
      font-weight: 400;
      margin: 20px 0 0;
      line-height: 1.5;
    }
  }

  .resumeIntro2 {
    color: #fff;
    background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/resume_02.jpeg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 284px;
    h1 {
      font-weight: 600;
      font-size: 40px;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      font-weight: 400;
      margin: 20px 0 0;
      line-height: 1.5;
    }
  }

  .resumeIntro3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 600;
      font-size: 40px;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      font-weight: 400;
      margin: 20px 0 0;
      line-height: 1.5;
      padding-bottom: 35px;
    }
    img {
      width: 70%;
    }
  }

  .resumeIntro4 {
    background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/resume_04.jpeg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 284px;
    color: #fff;
    h1 {
      font-weight: 600;
      font-size: 40px;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      font-weight: 400;
      margin: 20px 0 0;
      line-height: 1.5;
      padding-bottom: 35px;
    }
  }
`
