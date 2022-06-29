import styled from 'styled-components'
import { InfoIcon, LinedArrow } from 'assets'
import { useState } from 'react'

const WarningCard = () => {
  const [toggle, setToggle] = useState(false)

  const onClickToggle = () => {
    setToggle((prev) => !prev)
  }
  return (
    <Warning>
      <div className='warningHeader'>
        <InfoIcon />
        <div className='warningTitle'>
          <h5>
            본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수 없으며, 구직활동 이외의 <br />
            용도로 사용할 수 없습니다.
          </h5>
          <button type='button' className='openBtn' onClick={onClickToggle}>
            {toggle ? <LinedArrow style={{ transform: 'rotate(180deg)' }} /> : <LinedArrow />}
          </button>
        </div>
      </div>
      {toggle && (
        <div className='warningBody'>
          <p>
            본 채용 정보는&nbsp;<strong>자비스앤빌런즈(삼쩜삼)</strong>에서 제공한 자료를 바탕으로 원티드랩에서 표현을
            수정하고 이의 배열 및 구성을 편집하여 완성한 원티드랩의 저작자산이자 영업자산입니다. 본 정보 및
            데이터베이스의 일부 내지는 전부에 대하여 원티드랩의 동의 없이 무단전재 또는 재배포, 재가공 및 크롤링할 수
            없으며, 게재된 채용기업의 정보는 구직자의 구직활동 이외의 용도로 사용될 수 없습니다. 원티드랩은
            <strong> 자비스앤빌런즈(삼쩜삼)</strong>에서 게재한 자료에 대한 오류나 그 밖에 원티드랩이 가공하지 않은
            정보의 내용상 문제에 대하여 어떠한 보장도 하지 않으며, 사용자가 이를 신뢰하여 취한 조치에 대해 책임을 지지
            않습니다.&nbsp;<strong>&lt;저작권자 (주)원티드랩. 무단전재-재배포금지&gt;</strong>
          </p>
        </div>
      )}
    </Warning>
  )
}

export default WarningCard

const Warning = styled.div`
  width: 700px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #f3f5f8;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333333;

  .warningHeader {
    padding: 25px 30px;
    display: flex;
    align-items: center;

    .warningTitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h5 {
        margin: 0 20px;
        font-size: 12px;
        font-weight: 700;
        line-height: 22px;
        color: #333;
      }
    }
  }

  .warningBody {
    padding: 13px 30px 30px;
    border-top: 1px solid #ececec;

    p {
      font-size: 13px;
      line-height: 24px;
      color: #666;
    }

    strong {
      font-weight: bold;
    }
  }
`
