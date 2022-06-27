import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
  user-select: none;
  color: #333333;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 1100px;
    margin: 0 auto;
    padding: 15px 20px;

    .logo {
      display: flex;
      .hamburger {
        margin: 2px;
        width: 17px;
        height: 14px;
        object-fit: contain;
        margin-right: 15px;
      }
      .logoimg {
        width: 85px;
        margin-right: -40px;
      }
    }

    .menu {
      display: flex;
      li {
        position: relative;
        vertical-align: middle;
        height: 50px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        padding: 15px;
        border-bottom: 2px solid transparent;
        :hover {
          border-bottom: 2px solid #e5e5e5;
          cursor: pointer;
        }
        svg {
          position: absolute;
          top: 12px;
          right: -5px;
        }
      }
    }

    aside {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        svg {
          width: 18px;
          height: 18px;
          margin-right: 20px;
        }
        li {
          display: flex;
          padding: 15px 0;
          .divider {
            margin-left: 25px;
            text-align: right;
            line-height: 30px;
            color: #e1e2e3;
            font-size: 12px;
            font-weight: 400;
            user-select: none;
          }
          button {
            font-size: 13px;
            color: #666;
            line-height: 30px;
            height: 30px;
            border: 1px solid #e1e2e3;
            border-radius: 15px;
            padding: 0 10px;
            margin-left: 25px;
            font-weight: 400;
          }
        }
      }
    }
  }
`
