import styled from 'styled-components'

const ResRateMediumLabel = () => {
  return <LabelWrapper>응답률 평균 이상</LabelWrapper>
}

export default ResRateMediumLabel

const LabelWrapper = styled.span`
  border: 1px solid #855af0;
  color: #855af0;
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
