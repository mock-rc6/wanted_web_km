import axios from 'axios'
import DefaultBtn from 'components/common/buttons/default'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'
import store from 'storejs'
import { useNavigate } from 'react-router-dom'

interface IProps {
  handleClickApply: () => void
  applyData: any
  id: number
}
const ApplyModal = ({ handleClickApply, applyData, id }: IProps) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone_number: '',
    recommender: '',
    resume_id: 0,
  })

  const navigate = useNavigate()

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    })
  }

  const handleClickCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      resume_id: Number(e.target.value),
    })
  }
  const accessToken = store.get('accessToken')
  const handleClickSubmit = () => {
    axios
      .post(`https://dev.odoong.shop/recruits/${id}/application`, inputs, {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => {
        alert(res.data.message)
        navigate('/joblist')
      })
  }

  return (
    <div>
      <ApplyModalWrapper>
        <header>
          <h2>지원하기</h2>
          <button type='button' className='back' onClick={handleClickApply}>
            뒤로
          </button>
        </header>
        <div className='applyBody'>
          <h3>지원 정보</h3>
          <div className='information'>
            <label>
              <h4>이름</h4>
              <input type='text' name='name' defaultValue={applyData?.name} id='name' onChange={handleChangeInput} />
            </label>
            <label>
              <h4>이메일</h4>
              <input type='text' name='email' defaultValue={applyData?.email} id='email' onChange={handleChangeInput} />
            </label>
            <label>
              <h4>휴대폰 번호</h4>
              <input
                type='text'
                name='phone'
                defaultValue={applyData?.phone_number}
                id='phone_number'
                onChange={handleChangeInput}
              />
            </label>
            <label>
              <h4>추천인</h4>
              <input
                type='text'
                name='phone'
                defaultValue={applyData?.recommender}
                id='recommender'
                onChange={handleChangeInput}
              />
            </label>
            <h3 className='files'>첨부파일</h3>
            <ul>
              {applyData?.basic_resumes?.map((el: any) => (
                <li key={el.id}>
                  <label>
                    <input
                      type='checkbox'
                      className='check'
                      value={Number(el.id)}
                      id='resume_id'
                      onChange={handleClickCheck}
                    />
                  </label>
                  <h4 className='matched'>
                    <p>{el.title}</p>
                    {el.is_finished && <span>매치업</span>}
                  </h4>
                  <div className='info'>
                    <div className='resumeInfo'>
                      <span>한국어</span>
                      <span>2022.06.30</span>
                      {el.is_finished ? <span>작성 완료</span> : <span>작성 중</span>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='uploadBtn'>파일 업로드</div>
            <div className='uploadBtn'>새 이력서 작성</div>
          </div>
          <DefaultBtn buttonName='제출하기' handleClick={handleClickSubmit} />
        </div>
      </ApplyModalWrapper>
    </div>
  )
}

export default ApplyModal

const ApplyModalWrapper = styled.div`
  width: 340px !important;
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  position: sticky;
  top: 70px;

  header {
    background: #fff;
    padding: 15px 20px;
    border-bottom: 1px solid #e1e2e3;
    position: relative;
    h2 {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: #333;
      line-height: 22px;
    }
    .back {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      font-size: 16px;
      font-weight: 600;
      color: #999;
    }
  }

  h4 {
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    width: 80px;
    color: #333;
  }

  .applyBody {
    padding: 20px 20px;

    h3 {
      border-left: 2px solid #258bf7;
      padding-left: 20px;
      margin: 0 -20px;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }

    label {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e1e2e3;
      margin-bottom: 5px;
      display: flex;
      align-items: center;

      input {
        width: calc(100% - 80px);
        height: 50px;
        padding: 0;
        border: none;
        border-bottom: 1px solid #e1e2e3;
        line-height: 50px;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .row {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #e1e2e3;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      .hasMobile {
        float: left;
        width: calc(100% - 80px);
        height: 50px;
        padding: 0;
        border: none;
        border-bottom: 1px solid #e1e2e3;
        font-size: 16px;
        font-weight: 600;
        line-height: 50px;
        color: #2886fa;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #333;
      }
      .options {
        float: left;
        width: calc(100% - 80px);
        height: 50px;
        padding: 0;
        border: none;
        border-bottom: 1px solid #e1e2e3;
        font-size: 16px;
        font-weight: 600;
        line-height: 50px;
        color: #999;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    .files {
      border-left: 2px solid #258bf7;
      padding-left: 20px;
      margin: 35px -20px 20px;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }
    li {
      width: 100%;
      height: 60px;
      border: 1px solid #ececec;
      border-radius: 5px;
      margin-bottom: 10px;
      position: relative;

      label {
        position: relative;
        border: none !important;
        .check {
          position: absolute;
          top: 17px;
          left: 15px;
          width: 20px;
          height: 20px;
        }
      }

      h4 {
        font-size: 14px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: normal;
        text-align: left;

        p {
          position: absolute;
          top: 10px;
          left: 60px;
        }
        span {
          position: absolute;
          top: 10px;
          left: 130px;
          color: #36f;
          font-weight: 700;
          font-size: 11px;
          line-height: 21px;
          padding: 1px 5px;
          margin-left: 6px;
          border-radius: 2px;
          background: rgba(51, 102, 255, 0.1);
        }
      }
      .info {
        .resumeInfo {
          position: absolute;
          top: 35px;
          left: 60px;
          font-size: 11px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: normal;
          text-align: left;
          color: #333;
        }
      }
    }
    .uploadBtn {
      display: block;
      width: 100%;
      height: 50px;
      text-align: center;
      border-radius: 25px;
      border: 1px solid #e1e2e3;
      line-height: 50px;
      margin: 10px 0 10px;
      color: #333333;
      font-size: 14px;
      font-weight: 600;
      ~ .uploadBtn {
        margin: 0 0 10px;
      }
    }
  }
`
