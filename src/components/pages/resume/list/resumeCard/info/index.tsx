import { DotsIcon } from 'assets'
import { useState } from 'react'
import styled from 'styled-components'
import Menu from './menu'

interface IProps {
  isFinished: boolean
  id: number
}

const ResumeCardInfo = ({ isFinished, id }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <ResumeCardInfoWrapper>
      <div className='right'>
        <div className='language'>한</div>
        <span className={isFinished ? 'complete' : 'notfinished'}> {isFinished ? '작성 완료' : '작성 중'}</span>
      </div>
      <div className='moreBtn'>
        <button type='button' onClick={handleClickMenu}>
          <DotsIcon />
        </button>
        {isOpen && <Menu id={id} handleClickMenu={handleClickMenu} />}
      </div>
    </ResumeCardInfoWrapper>
  )
}

export default ResumeCardInfo

const ResumeCardInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 41px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 12px 0 20px;
  align-items: center;
  border-top: 1px solid #e0e0e0;

  .right {
    display: flex;
    .language {
      width: 20px;
      height: 20px;
      border-radius: 2px;
      border: 1px solid #333;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      font-weight: 600;
      margin-right: 10px;
    }

    .complete {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: normal;
      text-align: left;
    }

    .notfinished {
      font-size: 16px;
      font-weight: 600;
      color: #999;
    }
  }

  .moreBtn {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    button {
      svg {
        margin-top: 5px;
        width: 23px;
        height: 23px;
      }
    }
  }
`
