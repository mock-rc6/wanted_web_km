import ResRateHighLabel from './high'
import ResRateMediumLabel from './medium'

interface IProps {
  rate: number
}

const ResponseRateLabel = ({ rate }: IProps) => {
  if (rate >= 0.95) return <ResRateHighLabel />
  if (rate >= 0.75) return <ResRateMediumLabel />
  return <div />
}

export default ResponseRateLabel
