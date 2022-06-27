import styled from 'styled-components'

const ResRateLabel = () => {
  return <LabelWrapper>응답률 매우 높음</LabelWrapper>
}

export default ResRateLabel

const LabelWrapper = styled.span`
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
`
