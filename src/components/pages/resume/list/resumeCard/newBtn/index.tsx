import NewIcon from 'assets/img/new.png'
import styled from 'styled-components'

interface IProps {
  onClick: () => void
}

const NewBtn = ({ onClick }: IProps) => {
  return (
    <NewBtnWrapper onClick={onClick}>
      <span className='new'>
        <img src={NewIcon} alt='new' />
      </span>
      <p>새 이력서 작성</p>
    </NewBtnWrapper>
  )
}

export default NewBtn

const NewBtnWrapper = styled.button`
  .new {
    background-color: #36f;
    cursor: pointer;
    width: 74px;
    height: 74px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`
