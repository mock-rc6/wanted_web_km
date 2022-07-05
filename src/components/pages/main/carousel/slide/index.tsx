import { LinedArrow } from 'assets'
import styled from 'styled-components'

interface IProps {
  url: string
  h2: string
  h3: string
}

const Slide = ({ url, h2, h3 }: IProps) => {
  return (
    <SliderWrapper>
      <img src={url} alt={h2} />
      <article className='information'>
        <h2>{h2}</h2>
        <h3>{h3}</h3>
        <hr />
        <button type='button' className='readmore'>
          바로가기
          <LinedArrow />
        </button>
      </article>
    </SliderWrapper>
  )
}

export default Slide

const SliderWrapper = styled.li`
  display: flex;
  list-style: none;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  background-color: blue;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }

  .information {
    position: absolute;
    bottom: 20px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    left: 20px;
    z-index: 777;
    h2 {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 20px;
      line-height: 1.5;
      margin-top: 20px;
      font-weight: 700;
      color: #333;
      width: 'auto';
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    h3 {
      margin: 0 20px;
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      color: #333;
      font-weight: 500;
    }

    hr {
      height: 1px;
      background-color: #f2f2f2;
      color: #f2f2f2;
      border: none;
    }

    .readmore {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 13px;
      margin-left: 20px;
      font-size: 14px;
      font-weight: 700;
      color: #36f;

      svg {
        margin-left: 5px;
        transform: rotate(-90deg);
      }
    }
  }
`
