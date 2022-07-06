import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import Guidance from '../guidance'

const Introduce = () => {
  const textRef = useRef<any>(null)
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = `${textRef.current.scrollHeight}px`
  }, [])

  return (
    <IntroduceWrapper>
      <Guidance
        title='간단 소개글'
        contents='• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요. 
• 3~5줄로 요약하여 작성하는 것을 추천합니다!'
      />
      <textarea
        ref={textRef}
        onInput={handleResizeHeight}
        placeholder='간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)'
      />
    </IntroduceWrapper>
  )
}

export default Introduce

const IntroduceWrapper = styled.div`
  margin-bottom: 60px;
  textarea {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto;
    width: 100%;
    border: none;
    color: rgb(59, 61, 64);
    margin: 30px 0px 3px;
    font-size: 16px;
    resize: none;

    :focus {
      outline: none;
    }
  }
`
