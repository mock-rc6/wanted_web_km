import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 1px solid #ececec;
  padding: 18px 0 65px;
  background-color: #fff;

  .footer {
    width: 1060px;
    margin: 0 auto;

    .footerTop {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;

      .footerTopLeft {
        display: flex;
        .logo {
          margin-right: 45px;
        }
      }

      .menu {
        a {
          font-size: 15px;
          color: #3a3a3a;
          font-weight: 500;
          line-height: 2.6;
          margin-right: 45px;
          white-space: nowrap;
        }
      }

      .footerTopRight {
        line-height: 2.6;
        a {
          margin-left: 14px;
        }
      }
    }
  }
  .footerBottom {
    width: 1060px;
    margin: 0 auto;
    border-top: 1px solid #ececec;
    padding-top: 25px;
    display: flex;

    address {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.6666666667em;
      color: #767676;
      width: calc(100% - 290px);
      margin-right: 40px;
    }

    .language {
      position: relative;
      width: 250px;
      height: 36px;
      float: left;

      img {
        position: absolute;
        left: 15px;
        top: 55%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 24px;
        height: 17px;
        z-index: 1;
      }

      select {
        user-select: none;
        width: 100%;
        height: 40px;
        background: #f2f4f7;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        line-height: 2.1;
        color: #717171;
        padding: 0 45px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-weight: 500;
      }
      ::after {
        content: '▾';
        position: absolute;
        width: 10px;
        height: 10px;
        font-size: 24px;
        line-height: 1.6;
        right: 15px;
        top: 12%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #717171;
      }
    }
  }
`
