import styled from 'styled-components'

interface IProps {
  link?: string
  img1?: string
  img2?: string
  title?: string
  contents?: string
  writer?: string
}

const InsightCard = ({ link, img1, img2, title, contents, writer }: IProps) => {
  return (
    <InsightCardWrapper>
      <a href='https://brunch.co.kr/@hyungsukkim/161'>
        <div className='cardTop'>
          <div className='cardImg'>
            <img
              src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon152.png&amp;w=70&amp;q=75'
              alt='나는 어떠한 회사에 다니고 싶은가.'
            />
          </div>
        </div>
        <p className='cardTitle'>나는 어떠한 회사에 다니고 싶은가.</p>
        <p className='cardContents'>
          완벽한 사람이 없는 것처럼 완벽한 회사도 없다. 그러나 그렇다고 체념할 필요는 없다. 자신에게 맞는 회사를 찾고,
          필요하다면 내가 다니고 있는 회사를 그렇게 만들려고 노력하면 된다. 나는 언제 가장 잘 작동하는가. 내게 가장
          중요한 가치는 무엇인가. 어떤 회사를 다니고 싶은가에 대해서 자신만의 기준을 생각하는 것은 스스로에게 큰 도움이
          된다. -
        </p>
        <div className='cardInfo'>
          <img
            src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&amp;w=30&amp;q=75'
            alt='brunch'
          />
          <p>김형석</p>
        </div>
      </a>
    </InsightCardWrapper>
  )
}

export default InsightCard

const InsightCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(25% - 20px);
  margin: 0 10px 50px;
  .cardTop {
    position: relative;
    height: auto;
    padding-bottom: 70%;
    padding-left: 0;

    .cardImg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 4px;
      background: #111;
      outline: 1px solid rgba(0, 0, 0, 0.05);
      outline-offset: -1px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
  }

  .cardTitle {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #333;
    margin: 17px 0 8px;
  }

  .cardContents {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
    color: #aaa;
  }

  .cardInfo {
    margin-top: 12px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #ececec;
    }

    p {
      margin-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      color: #aaa;
    }
  }
`
