import styled from 'styled-components'

const VODCard = () => {
  return (
    <VODCardWrapper>
      <div className='imgWrapper'>
        <img src='https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210429%2F9%2F17633650.jpg&w=undefined&q=75' />
        <span className='playtime'>24:01</span>
      </div>
      <div className='contentsWrapper'>
        <p className='author'>원티드랩 안드레</p>
        <p className='articleTitle'>Wanted Talk Engineering #2: 성능 최적화와 자동화</p>
        <p className='description'>[무료] 성능 최적화와 자동화 : Wanted Talk Engineering #2 </p>
      </div>
    </VODCardWrapper>
  )
}

export default VODCard

const VODCardWrapper = styled.li`
  width: 260px;
  list-style: none;
  padding: 10px;

  .imgWrapper {
    position: relative;
    height: auto;
    padding-bottom: 70%;
    padding-left: 0;

    .playtime {
      position: absolute;
      right: 9px;
      bottom: 8px;
      display: inline-block;
      padding: 0 10px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.5);
      height: 24px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1.85;
      color: #fff;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 4px;
      object-fit: cover;
      object-position: top;
      outline: 1px solid rgba(0, 0, 0, 0.05);
      outline-offset: -1px;
    }
  }

  .contentsWrapper {
    margin: 14px 0 0;
    .author {
      font-size: 14px;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      margin: 5px 0;
      font-weight: 600;
      color: #333;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
    }
    .articleTitle {
      font-size: 16px;
      overflow: hidden;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .description {
      font-size: 13px;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      margin-top: 8px;
      font-weight: 600;
      color: #aaa;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
    }
  }
`
