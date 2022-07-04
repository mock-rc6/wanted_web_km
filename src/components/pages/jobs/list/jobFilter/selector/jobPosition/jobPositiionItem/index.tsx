import { Dispatch, SetStateAction, useState } from 'react'

import styled from 'styled-components'

interface IProps {
  position: string
  positionArr: any
  setPositionArr: Dispatch<SetStateAction<string[]>>
}

const PositionItem = ({ position, positionArr, setPositionArr }: IProps) => {
  const [isClicked, setIsClicked] = useState(false)

  const isIncluded = positionArr.includes(position)

  const handleItemClick = () => {
    if (isIncluded) {
      positionArr.splice(positionArr.indexOf(position), 1)
      setPositionArr(positionArr)
      setIsClicked(false)
    }
    if (positionArr.length >= 5) {
      alert('최대 5개까지 선택 가능합니다.')
    }
    if (!isIncluded && positionArr.length < 5) {
      setIsClicked(true)
      setPositionArr([...positionArr, position])
    }
  }

  return (
    <ItemWrapper>
      <button
        key={position}
        type='button'
        className={isClicked ? 'selectedItem' : 'defaultItem'}
        onClick={handleItemClick}
      >
        <li>{position}</li>
      </button>
    </ItemWrapper>
  )
}

export default PositionItem

const ItemWrapper = styled.div`
  display: inline-flex;
  .defaultItem {
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
  }
  .selectedItem {
    border: 1px solid #36f;
    color: #36f;
    background-color: #fff;
    font-weight: 600;
    height: 32px;
    margin-right: 10px;
    margin-bottom: 12px;
    border-radius: 20px;
    padding: 8px 14px;
    font-size: 13px;
    line-height: 16px;
  }
`
