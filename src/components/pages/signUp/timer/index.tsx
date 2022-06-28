import { useState } from 'react'
import styled from 'styled-components'
import useInterval from 'hooks/useInterval'

interface IProps {
  number: number
  isStarted: boolean
  isCodeValid: boolean
  handler: (state: boolean) => void
}

const Timer = ({ number, isStarted, isCodeValid, handler }: IProps) => {
  const [time, setTime] = useState(number)
  const min = Math.floor(time / 60)
  const sec = time - min * 60

  useInterval(() => {
    if (time > 0 && isStarted && !isCodeValid) {
      setTime((prev) => prev - 1)
    }
  }, 1000)
  if (time === 0) handler(false)

  return (
    <TimerWrapper time={time}>
      <p>{time > 0 ? '인증번호가 요청되었습니다.' : '인증 시간이 만료됐어요. 다시 시도해 주세요.'}</p>
      <strong>
        유효시간 {min}:{sec}
      </strong>
    </TimerWrapper>
  )
}

export default Timer

const TimerWrapper = styled.div<{ time: number }>`
  text-align: left;
  p {
    margin-top: 6px;
    font-size: 12px;
    color: ${({ time }) => (time > 0 ? '#36f' : '#fe415c')};
  }
  strong {
    font-weight: 600;
    margin-top: 3px;
    font-size: 13px;
    color: ${({ time }) => (time > 0 ? '#36f' : '#fe415c')};
  }
`
