import styled from 'styled-components'

const EventCard = () => {
  return (
    <EventCardWrapper>
      <div className='eventImgWrapper'>
        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2113%2F8082560a.jpg&w=1200&q=100' />
      </div>
      <span>아티클</span>
      <h3>스타트업의 체계 없음이 가장 두려웠죠!</h3>
    </EventCardWrapper>
  )
}

export default EventCard

const EventCardWrapper = styled.div`
  width: 522px;
  overflow: hidden;
  margin-right: 15px;

  .eventImgWrapper {
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  span {
    color: #ff9100;
    border-color: #ff9100;
    align-items: center;
    height: 20px;
    border: 1px solid;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 700;
    line-height: 20px;
    padding: 2px 6px;
  }

  h3 {
    font-size: 16px;
    margin-top: 8px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
  }
`
