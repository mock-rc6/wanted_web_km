import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from './slide'
import data from './data/data.json'
import { Fragment } from 'react'

const Carousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '220px',
    slidesToShow: 1,
    speed: 500,
    draggable: true,
    focusOnSelect: true,
    arrow: true,
  }

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {data.map((slide) => (
          <Fragment key={slide.url}>
            <Slide url={slide.url} h2={slide.h2} h3={slide.h3} />
          </Fragment>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default Carousel

const SliderWrapper = styled.section`
  padding-top: 20px;
  width: 100%;
  height: 300px;
  button {
    cursor: pointer;
    z-index: 99;
  }
  cursor: pointer;
  .slick-next {
    background: url(https://img.cgv.co.kr/R2014/images/common/ico/arrowL.png) center/9px 13px scroll no-repeat;
    transform: rotate(-180deg) translateY(50%);
    top: 50%;
    right: calc((100% - 1200px) / 2);
    justify-content: center;
    position: absolute;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    z-index: 10;
    ::before {
      display: none;
    }
  }
  .slick-prev {
    background: url(https://img.cgv.co.kr/R2014/images/common/ico/arrowL.png) center/9px 13px scroll no-repeat;
    top: 50%;
    left: calc((100% - 1200px) / 2);
    justify-content: center;
    position: absolute;
    width: 30px;
    height: 60px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    z-index: 10;
    transform: translateY(-50%);

    ::before {
      display: none;
    }
  }

  .slick-slide {
    width: 1060px;
    filter: brightness(50%);
    padding: 0px 10px;

    article {
      opacity: 0;
      transition: ease-in-out 0.7s;
    }
  }
  .slick-current {
    filter: brightness(100%);

    article {
      opacity: 1;
      transition: ease-in-out 0.7s;
    }
  }
`
