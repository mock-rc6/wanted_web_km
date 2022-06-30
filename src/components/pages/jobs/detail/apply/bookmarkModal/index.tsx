import { XButton } from 'assets'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useRef } from 'react'
import styled from 'styled-components'

interface IProps {
  handleModal: () => void
}

const BookmarkModal = ({ handleModal }: IProps) => {
  const ref = useRef<any>(null)
  useOnClickOutside(ref, handleModal)
  return (
    <ModalBackGround>
      <div className='modalWrapper' ref={ref}>
        <div className='modalHeader'>
          <button className='xButton' type='button' onClick={handleModal}>
            <XButton />
          </button>
        </div>
        <p>북마크에 저장되었습니다.</p>
        <div className='position'>저장된 포지션 보기</div>
      </div>
    </ModalBackGround>
  )
}

export default BookmarkModal

const ModalBackGround = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

  .modalWrapper {
    width: 500px;
    height: 160px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px 20px;

    .modalHeader {
      height: 50px;
      position: relative;
      top: 0;
      color: #333;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      word-wrap: break-word;
      .xButton {
        position: absolute;
        top: 16px;
        right: 0px;
        svg {
          cursor: pointer;
        }
      }
    }

    p {
      font-size: 16px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #333;
      text-align: center;
    }

    .position {
      font-size: 16px;
      font-weight: 600;
      color: #36f;
      margin-top: 15px;
      text-align: center;
    }
  }
`
