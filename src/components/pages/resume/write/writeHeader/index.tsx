import { DownloadIcon, LanguageIcon } from 'assets'
import styled from 'styled-components'

const ResumeHeader = () => {
  return (
    <ResumeHeaderWrapper>
      <div className='nav'>
        <div className='language'>
          <LanguageIcon />
          <div className='select'>한국어</div>
        </div>
        <div className='resumeHeaderRight'>
          <span className='guide'>합격 / 불합격 단어 가이드</span>
          <span>|</span>
          <span className='check'>내 이력서 단어 체크</span>
          <Toggle>
            <input className='toggleInput' type='checkbox' />
            <div className='toggleSlider' />
          </Toggle>
          <button type='button' className='download'>
            <DownloadIcon className='downloadIcon' />
          </button>
        </div>
      </div>
    </ResumeHeaderWrapper>
  )
}

export default ResumeHeader

const ResumeHeaderWrapper = styled.nav`
  width: 100%;

  .nav {
    width: 1060px;
    margin: 0 auto;
    position: fixed;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    top: 50px;
    right: 5%;
    left: 5%;
    z-index: 4;
    padding: 20px 0;
  }

  .language {
    display: flex;
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      width: 20px;
      z-index: 3;
    }
  }

  .select {
    position: relative;
    width: 102px;
    padding-left: 37px;
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    border: 1px solid #333;
    background-color: #fff;
    font-size: 14px;
  }

  .resumeHeaderRight {
    display: flex;
    align-items: center;
    .guide {
      font-size: 14px;
      font-weight: 600;
      color: #36f;
      margin-right: 10px;
    }

    .check {
      font-size: 14px;
      color: #333;
      font-weight: 600;
      margin-left: 10px;
    }

    button {
      position: relative;
      border: 1px solid #76797e;
      width: 40px;
      min-width: unset;
      height: 40px;
      padding: 0;
      outline: none;
      border-radius: 3px;
      .downloadIcon {
        width: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        fill: #999;
      }
    }
  }
`
const Toggle = styled.label`
  margin: 0 10px;
  .toggleInput {
    display: none;
  }
  .toggleSlider {
    position: relative;
    width: 56px;
    height: 30px;
    cursor: pointer;
    background-color: #f2f4f7;
    transition: 0.4s;
    border-radius: 15px;
    border: 1px solid #ececec;

    :before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      border-radius: 50%;
      left: 1px;
      top: 1px;
      background-color: #fff;
      transition: 0.4s;
      border: 1px solid #e1e2e3;
    }
  }
`
