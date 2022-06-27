import styled from 'styled-components'

export const JobFilterWrapper = styled.nav<{ isScrolled: boolean }>`
  width: 100%;
  padding-top: ${({ isScrolled }) => (isScrolled ? '0' : '40px')};
  background-color: #fff;
  border-bottom: 1px solid ${({ isScrolled }) => (isScrolled ? '#36F' : '#e5e5e5')};
  position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'static')};
  margin-top: 50px;
  top: 0px;
  z-index: 999;
  .wrapper {
    width: 1060px;
    margin: 0 auto;
  }
  .title {
    display: ${({ isScrolled }) => (isScrolled ? 'none' : 'flex')};
    align-items: center;
    font-size: 24px;
    margin-bottom: 10px;

    .jobGroup {
      padding-top: 3px;
      margin-right: 15.5px;
      font-size: 24px;
      line-height: 29px;
      font-weight: 700;
      color: #333;
    }

    .arrowWrapper {
      position: relative;
      width: 26px;
      height: 26px;
      border: 1px solid #e1e2e3;
      border-radius: 9999px;
      text-align: center;

      svg {
        width: 12px;
        height: 12px;
        margin-bottom: 1px;
      }
    }

    .jobCategory {
      padding-top: 3px;
      font-size: 24px;
      line-height: 29px;
      font-weight: 400;
      color: #aaa;

      ::before {
        content: '|';
        font-size: 28px;
        line-height: 29px;
        padding: 3px 24px 0;
        color: #ececec;
      }
    }
  }
`

export const StickyFilter = styled.nav`
  .wrapper {
    background-color: #fff;
    width: 1060px;
    margin: 0 auto;
  }

  .filterMenu {
    margin: 0 auto;
    padding: 20px 0 5px;
    display: flex;
    position: relative;
    justify-content: space-between;

    .category {
      display: flex;
    }

    .filterCounter {
      background-color: #36f;
      border-radius: 10px;
      color: #fff;
      display: inline-block;
      font-size: 12px;
      font-weight: 600;
      width: 20px;
      height: 20px;
      line-height: 20px;
      position: absolute;
      top: 15px;
      left: 80px;
      z-index: 1;
      text-align: center;
    }
  }
  .divider {
    max-width: 1060px;
    margin: 25px auto;
    height: 1px;
    background-color: #f2f2f2;
    color: #f2f2f2;
    border: none;
  }

  .buttons {
    padding-bottom: 20px;
  }
`
