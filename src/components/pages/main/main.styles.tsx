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
`
