import styled from 'styled-components'

interface IProps {
  onClick?: () => void
}

const AddButton = ({ onClick }: IProps) => {
  return (
    <AddButtonWrapper>
      <button type='button' onClick={onClick}>
        + 추가
      </button>
    </AddButtonWrapper>
  )
}

export default AddButton

const AddButtonWrapper = styled.div`
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
  padding: 30px 0;
  display: block;

  button {
    color: #36f;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    border: none;
    border-radius: 0;
  }
`
