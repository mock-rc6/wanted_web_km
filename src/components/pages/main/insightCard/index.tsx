import styled from 'styled-components'

interface IProps {
  el: {
    link?: string
    url?: string
    img2?: string
    title?: string
    contents?: string
    writer?: string
  }
}

const InsightCard = ({ el }: IProps) => {
  return (
    <InsightCardWrapper>
      <a href='https://brunch.co.kr/@hyungsukkim/161'>
        <div className='cardTop'>
          <div className='cardImg'>
            <img src={el.url} alt={el.title} />
          </div>
        </div>
        <p className='cardTitle'>{el.title}</p>
        <p className='cardContents'>{el.contents}</p>
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
      overflow: hidden;

      img {
        width: 100%;
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
