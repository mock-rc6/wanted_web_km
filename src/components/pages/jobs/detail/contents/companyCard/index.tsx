import styled from 'styled-components'

const CompanyCard = () => {
  return (
    <CardWrapper>
      <div className='companyCard'>
        <div className='cardLeft'>
          <div className='logo' />
          <div className='companyInfo'>
            <h5>자비스앤빌런즈(삼쩜삼)</h5>
            <h6>IT,컨텐츠</h6>
          </div>
        </div>
        <div className='cardRight'>
          <button type='button' className='followBtn'>
            팔로우
          </button>
        </div>
      </div>
    </CardWrapper>
  )
}

export default CompanyCard

const CardWrapper = styled.div`
  .companyCard {
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin: 80px 0 0;
    border-radius: 3px;
    border: 1px solid #e1e2e3;
    padding: 20px;

    .cardLeft {
      display: flex;
    }
    .logo {
      background-image: url(https://static.wanted.co.kr/images/wdes/0_5.0e34a18c.png);
      background-position: 50%;
      background-size: contain;
      width: 50px;
      height: 50px;
      -webkit-box-shadow: 0 0 1px 0 rgb(0 0 0 / 10%);
      box-shadow: 0 0 1px 0rgba (0, 0, 0, 0.1);
      margin-right: 15px;
      background-repeat: no-repeat;
    }

    .companyInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h5 {
        color: #333;
        font-size: 15px;
        font-weight: 600;
        margin: 0 0 5px;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding-right: 10px;
      }
      h6 {
        color: #999;
        font-size: 15px;
        font-weight: 600;
        margin: 0;
        padding-right: 10px;
      }
    }
    .cardRight {
      display: flex;
      align-items: center;
      .followBtn {
        border-radius: 25px;
        border: 1px solid #e1e2e3;
        height: 40px;
        font-size: 15px;
        color: #36f;
        background-color: #fff;
        min-width: 64px;
        padding: 0 27px;
        font-weight: 600;
      }
    }
  }
`
