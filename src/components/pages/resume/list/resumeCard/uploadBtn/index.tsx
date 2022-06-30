import styled from 'styled-components'
import UploadIcon from 'assets/img/upload.png'

const UploadBtn = () => {
  return (
    <UploadBtnWrapper>
      <span className='upload'>
        <img src={UploadIcon} alt='upload' />
      </span>
      <p>파일업로드</p>
    </UploadBtnWrapper>
  )
}

export default UploadBtn

const UploadBtnWrapper = styled.div`
  .upload {
    background-color: #e1e2e3;
    cursor: pointer;
    width: 74px;
    height: 74px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`
