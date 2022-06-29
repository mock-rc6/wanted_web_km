import styled from 'styled-components'

export const ImagesWrapper = styled.section`
  position: relative;
  width: 700px;

  .arrowLeft {
    position: absolute;
    left: 0;
    width: 9%;
    height: 100%;
    font-size: 26px;

    opacity: 0.7;
    z-index: 1;
    transform: rotate(90deg);
    svg {
      width: 18px;
      height: 18px;
      fill: #b5b5b5;
    }
  }

  .arrowRight {
    position: absolute;
    right: 0;
    width: 9%;
    height: 100%;
    font-size: 26px;

    opacity: 0.7;
    z-index: 1;
    transform: rotate(-90deg);
    svg {
      width: 18px;
      height: 18px;
      fill: #b5b5b5;
    }
  }

  .imagesBox {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding-bottom: 4px;
    height: auto;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior: contain;

    .imageSlide {
      scroll-snap-align: start;
      position: relative;
      width: 100%;
      flex-shrink: 0;
      padding-bottom: 70%;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        object-fit: cover;
        outline-offset: -1px;
        border-radius: 4px;
        outline: rgba(0, 0, 0, 0.05) solid 1px;
      }
    }
  }
`
