import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import styled from 'styled-components'

interface IProps {
  el: string
  selectedMetroCity: string[]
  setSelectedMetroCity: Dispatch<SetStateAction<string[]>>
}

const ProvinceItem = ({ el, selectedMetroCity, setSelectedMetroCity }: IProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClickProvince = (e: MouseEvent<HTMLButtonElement>) => {
    if (selectedMetroCity.includes(el)) {
      setIsSelected(false)
      selectedMetroCity.splice(selectedMetroCity.indexOf(el), 1)
      setSelectedMetroCity(selectedMetroCity)
      return
    }
    setIsSelected(true)
    setSelectedMetroCity(selectedMetroCity.concat(e.currentTarget.value))
  }
  return (
    <ItemWrapper>
      <button
        type='button'
        className={isSelected ? 'selected' : 'defaultSelect'}
        onClick={handleClickProvince}
        value={el}
      >
        {el}
      </button>
    </ItemWrapper>
  )
}

export default ProvinceItem

const ItemWrapper = styled.li`
  .defaultSelect {
    width: 100%;
    text-align: left;
    padding: 0 14px;
    height: 27px;
    line-height: 27px;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .selected {
    width: 100%;
    text-align: left;
    padding: 0 14px;
    height: 27px;
    line-height: 27px;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: #f6f8ff;
    color: #36f;
    font-weight: 600;
  }
`
