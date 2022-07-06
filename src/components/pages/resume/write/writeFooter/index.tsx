import styled from 'styled-components'

const ResumeFooter = () => {
  return (
    <FooterWrapper>
      <div className='footer'>
        <div className='footerLeft'>💪 400자 이상 작성하시면 이력서를 완료할 수 있어요!</div>
        <div className='footerRight'>
          <button className='outlined' type='button'>
            임시 저장
          </button>
          <button className='filled' type='button'>
            작성 완료
          </button>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default ResumeFooter

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;
  display: flex;
  align-items: center;

  .footer {
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .footerLeft {
      line-height: 50px;
      font-size: 13px;
      color: #333;
      font-weight: 600;
    }

    .outlined {
      color: #36f;
      background-color: #fff;
      border: 1px solid #36f;
      height: 50px;
      padding: 0 27px;
      border-radius: 25px;
      font-weight: 700;
      font-size: 16px;
      width: 173px;
      margin-right: 9px;
    }

    .filled {
      color: #fff;
      background-color: #36f;
      border: 1px solid #fff;
      height: 50px;
      padding: 0 27px;
      border-radius: 25px;
      font-weight: 700;
      font-size: 16px;
      width: 173px;
    }
  }
`
