import styled from 'styled-components'

export const MainWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 5px;
    }
  }

  .subtitle {
    margin: 5px 0 0;
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    vertical-align: middle;
    color: #767676 !important;
  }

  .chips {
    display: flex;
    margin: 30px 0;
    width: 1060px;
    overflow: hidden;
  }

  .chipSelected {
    font-weight: 700;
    background-color: #fff;
    border: 1px solid #36f;
    color: #36f;
    outline: none;
    padding: 0 29px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    border-radius: 5px;
    white-space: nowrap;
    margin: 0 10px;
  }

  .chip {
    border: 1px solid #f2f4f7;
    background-color: #f2f4f7;
    padding: 0 29px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    border-radius: 5px;
    white-space: nowrap;
    color: #333;
    margin: 0 10px;
  }

  h1 {
    font-size: 22px;
    line-height: 24px;
    font-weight: 700;
    color: #333;
  }
  .insight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1060px;
    padding: 80px 0;
    margin: 0 auto;

    .insightCardList {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }

    .moreBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 345px;
      border: 1px solid #e1e2e3;
      color: #333;
      height: 50px;
      font-size: 16px;
      border-radius: 25px;
      margin: 0 auto;
      font-weight: 700;

      svg {
        margin-left: 2px;
      }
    }
  }

  .creater {
    padding: 60px 0;
    width: 100%;
    height: 110px;
    background-color: #36f;
    display: flex;
    justify-content: center;
    align-items: center;

    .banner {
      width: 1060px;

      .bannerContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .bannerLeft {
        display: flex;
        align-items: center;
      }

      .bannerText {
        font-size: 24px;
        color: #fff;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: -0.2px;
        span {
          color: #a9ecf0;
        }
      }

      .bannerImg {
        display: flex;
        justify-content: flex-start;
      }

      .bannerBtn {
        text-align: center;
        width: 220px;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        color: #36f;
        background-color: #fff;
        border: 1px solid #36f;
        padding: 0 27px;
        font-weight: 700;
        border-radius: 25px;
      }
    }
  }

  .subTitle {
    margin: 5px 0 0;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
    vertical-align: middle;
    color: #767676;
    cursor: pointer;
    margin-bottom: 30px;

    svg {
      transform: rotate(-90deg);
    }
  }

  .articles {
    width: 1060px;
    padding: 60px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .articlesUl {
      display: flex;
    }
  }

  .divider {
    max-width: 1060px;
    height: 1px;
    background-color: #f2f2f2;
    color: #f2f2f2;
    border: none;
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
  }
  .vodBtn {
    width: 1060px;
    margin: 0 auto;
    padding: 21px 30px;
    font-size: 17px;
    border-radius: 38.5px;
    line-height: normal;
    color: #fff;
    align-items: center;
    font-weight: 700;
    background-image: linear-gradient(90deg, #01a9fe -12%, #2f5fef 37%, #046afe 72%, #00d2dd 110%);
    .logo {
      margin-left: 10px;
      width: 95px;
      fill: #fff;
    }

    .arrow {
      width: 17px;
      fill: #fff;
    }
  }
  .wantedplus {
    background-color: #f7f7f7;
    padding: 60px 0;

    .wantedplusWrapper {
      display: flex;
      width: 1060px;
      margin: 0 auto;

      .wantedplusLeft {
        font-size: 14px;
        line-height: 1.42857143;
        color: #333333;
        .plustitle {
          display: flex;
          width: 500px;
          font-size: 30px;
          font-weight: 700;
          word-break: keep-all;
          svg {
            width: 160px;
            fill: #000;
            margin-right: 10px;
          }
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 260px;
          margin-top: 25px;
          color: #fff;
          background-color: #36f;
          border: none;
          height: 50px;
          font-size: 16px;
          border-radius: 25px;
          font-weight: 700;
          svg {
            margin-right: 5px;
            width: 16px;
            fill: #fff;
            transform: rotate(90deg);
          }
        }
      }
    }
    img {
      width: 50%;
    }
  }
  .footerNav {
    margin-top: 30px;
    border-radius: 4px;
    width: 1060px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    border-left: 1px solid #ececec;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 18px 0 0;
      border-right: 1px solid #ececec;

      span {
        display: flex;
        align-items: center;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        padding: 6px 8px;
        font-weight: 700;

        svg {
          width: 16px;
        }
      }

      svg {
        width: 32px;
      }
    }
  }
`
