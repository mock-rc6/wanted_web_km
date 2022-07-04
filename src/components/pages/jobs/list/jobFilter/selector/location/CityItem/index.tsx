import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import styled from 'styled-components'

interface IProps {
  el: string
  selectedCity: string[]
  setSelectedCity: Dispatch<SetStateAction<string[]>>
}

const CityItem = ({ el, selectedCity, setSelectedCity }: IProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClickProvince = (e: MouseEvent<HTMLButtonElement>) => {
    if (selectedCity.includes(el)) {
      setIsSelected(false)
      selectedCity.splice(selectedCity.indexOf(el), 1)
      setSelectedCity(selectedCity)
      return
    }
    setIsSelected(true)
    setSelectedCity(selectedCity.concat(e.currentTarget.value))
  }
  return (
    <ItemWrapper>
      <button
        type='button'
        className={isSelected ? 'selectedCity' : 'defaultCity'}
        onClick={handleClickProvince}
        value={el}
      >
        {el}
      </button>
    </ItemWrapper>
  )
}

export default CityItem

const ItemWrapper = styled.li`
  .defaultCity {
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

  .selectedCity {
    width: 100%;
    text-align: left;
    padding: 0 14px;
    height: 27px;
    line-height: 27px;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #36f;
    font-weight: 600;
  }
`
