import { useState } from 'react'
import styled from 'styled-components'

const ResRateHighLabel = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <LabelWrapper>
      <Label onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        응답률 매우 높음
      </Label>
      {isHover && <div className='toolTip'>지원 후 응답받을 확률이 95% 이상입니다.</div>}
    </LabelWrapper>
  )
}

export default ResRateHighLabel

const Label = styled.span`
  border: 1px solid #00aead;
  color: #00aead;
  border-radius: 2px;
  background-color: #fff;
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  height: 19px;
  line-height: 19px;
  margin-top: 4px;
  padding: 0 5px;
  user-select: none;
`
const LabelWrapper = styled.div`
  position: relative;
  .toolTip {
    position: absolute;
    top: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    color: #333;
    font-size: 12px;
    font-weight: 400;
    min-height: 40px;
    height: auto;
    line-height: normal;
    padding: 11px 12px;
    background: #fff;
    border: 1px solid #999;
    z-index: 1;
    white-space: nowrap;
  }
`
