import axios from 'axios'
import styled from 'styled-components'
import store from 'storejs'

interface IProps {
  id: number
  handleClickMenu: () => void
}

const Menu = ({ id, handleClickMenu }: IProps) => {
  const accessToken = store.get('accessToken')
  const handleClickDelete = () => {
    axios
      .post(
        `https://dev.odoong.shop/resumes/${id}`,
        { id },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        }
      )
      .then(() => {
        handleClickMenu()
        location.reload()
      })
  }
  return (
    <MenuWrapper>
      <button type='button'>
        <li className='menuList'>이름변경</li>
      </button>
      <button type='button'>
        <li className='menuList'>다운로드</li>
      </button>
      <button type='button' onClick={handleClickDelete}>
        <li className='menuList'>삭제</li>
      </button>
    </MenuWrapper>
  )
}

export default Menu

const MenuWrapper = styled.ul`
  position: absolute;
  top: 26px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  width: 160px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
  border: 1px solid #d2d2d2;
  background-color: #fff;
  padding: 5px 0;
  z-index: 9999;

  button {
    width: 100%;
  }

  .menuList {
    align-items: flex-start !important;
    width: 100% !important;
    height: 26px !important;
    line-height: 26px !important;
    border: none !important;
    color: #272b33 !important;
    text-align: left !important;
    padding: 3px 20px !important;
    margin: 0 !important;
    font-size: 14px !important;
    :hover {
      background-color: #e9e9e9 !important;
    }
  }
`
