import styled from 'styled-components'

interface IProps {
  position: {
    title: string
    query: string
  }
  handleClickPosition: () => void
}

const PositionItem = ({ position, handleClickPosition }: IProps) => {
  return (
    <ItemWrapper
      key={position.query}
      type='button'
      className='defaultItem'
      data-title={position.title}
      data-query={position.query}
      onClick={handleClickPosition}
    >
      <li>{position.title}</li>
    </ItemWrapper>
  )
}

export default PositionItem

const ItemWrapper = styled.button`
  height: 32px;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 1px solid #f2f4f7;
  background: #f2f4f7;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #333;
`
