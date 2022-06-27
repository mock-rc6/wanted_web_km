import styled from 'styled-components'

export const ImagesWrapper = styled.section`
  width: 700px;

  .imagesBox {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-top: -15px;
    padding-bottom: 4px;
    height: auto;
    overflow-x: auto;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -ms-scroll-chaining: none;
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
