import styled from 'styled-components'

interface IProps {
  title: string
  contents: string
}

const Guidance = ({ title, contents }: IProps) => {
  return (
    <GuideWrapper>
      <dt>{title}</dt>
      <dd>{contents}</dd>
    </GuideWrapper>
  )
}

export default Guidance

const GuideWrapper = styled.dl`
  width: 1060px;
  margin: 0 auto;

  dt {
    padding: 20px 0 6px;
    font-size: 16px;
    font-weight: 500;
    color: #3b3d40;
    border-bottom: 1px solid #bababa;
  }

  dd {
    white-space: pre-wrap;
    padding: 10px;
    background-color: #f3f9fe;
    font-size: 12px;
    line-height: 1.42;
    letter-spacing: normal;
    color: #666;
    margin-top: 10px;
  }
`
