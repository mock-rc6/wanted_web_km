import { FilledArrow } from 'assets'
import styled from 'styled-components'

interface IProps {
  dt?: string
  dd?: string
  arrow?: boolean
  margin?: number
}

const FilterButton = ({ dt, dd, arrow, margin }: IProps) => {
  return (
    <ButtonWrapper arrow={arrow} margin={margin}>
      <dt>{dt}</dt>
      <dd>{dd}</dd>
      <span className='arrow'>{arrow && <FilledArrow />} </span>
    </ButtonWrapper>
  )
}

export default FilterButton

const ButtonWrapper = styled.button<{ arrow: boolean | undefined; margin: number | undefined }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 15px !important;
  border-radius: 5px;
  border: 1px solid #ececec;
  position: relative;
  font-size: 13px;
  margin-right: ${({ margin }) => (margin ? `${margin}px` : '0')};

  dt {
    margin-right: 15px;
  }

  dd {
    color: #36f !important;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .arrow {
    display: ${({ arrow }) => (arrow ? 'block' : 'none')};
    margin-left: 8px;
  }

  :hover {
    background-color: #f8f8fa;
  }
`
