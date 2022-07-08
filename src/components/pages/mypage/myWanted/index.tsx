import axios from 'axios'
import styled from 'styled-components'
import store from 'storejs'
import Aside from '../profileBox'
import { useEffect, useState } from 'react'

const MyProfile = () => {
  const accessToken = store.get('accessToken')
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios
      .get('https://dev.odoong.shop/mypages/profiles', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => setData(res.data.result))
  }, [accessToken])

  console.log(data)

  return (
    <MyPageWrapper>
      <div className='myPage'>
        <h2>프로필</h2>
        <div className='myWantedContents'>
          <div>
            <Aside />
          </div>
          <section>
            <div className='apply'>
              <h3>기본 이력서</h3>
              <article className='selectedResume'>
                <span>기본 이력서 선택</span>
                <button type='button' className='defaultResumeSelector'>
                  <div className='lang'>한</div>
                  <span>민경미</span>
                </button>
                <span>학교</span>
                <div className='row'>
                  <dt>라이징캠프</dt>
                  <span>|</span>
                  <dd>web 5기 a반</dd>
                </div>
                <span>직장</span>
                <div className='row'>
                  <dt>좋은직장</dt>
                  <span>|</span>
                  <dd>좋은 부서</dd>
                </div>
                <div className='introduce'>
                  안녕하세요. 주니어 프론트엔드 개발자 민경미입니다.
                  <br />- JavaScript 및 TypeScript와 React를 이용한 프론트엔드 개발이 가능합니다.
                </div>
              </article>
            </div>
            <div className='apply'>
              <h3>전문분야 설정</h3>
              <article className='selectedResume'>
                <div className='label'>직군</div>
                <div className='contents'>{data?.job_group ? data.job_group : '개발'}</div>
                <div className='label'>직무</div>
                <div className='contents'>
                  {data?.positions.map((el: string) => (
                    <div key={el}>{el.length > 0 ? el : '프론트엔드'}</div>
                  ))}
                </div>
                <div className='label'>경력</div>
                <div className='contents'>{data?.career === 0 ? '신입' : data?.career}</div>
                <hr />
                <div className='jobSearchingOption'>
                  <h6>구직 여부 설정</h6>
                  <div className='jobSearchingBody'>
                    <div className='selectorWrapper'>
                      <select>
                        <option value='LOOKINGFORJOB' selected={data?.looking_for_job === 'LOOKINGFORJOB'}>
                          현재 구직 중
                        </option>
                        <option value='INTERESTED' selected={data?.looking_for_job === 'INTERESTED'}>
                          관심 있음
                        </option>
                        <option value='NOINTEREST' selected={data?.looking_for_job === 'NOINTEREST'}>
                          전혀 관심 없음
                        </option>
                      </select>
                    </div>
                    <span className='resumeNow'> 이력서 공개중</span>
                  </div>
                </div>
                <p className='JobSearchIntentionSelector-status desc-text'>
                  기업으로부터 면접 제안을 받으실 수 있습니다.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </MyPageWrapper>
  )
}

export default MyProfile

const MyPageWrapper = styled.main`
  width: 100%;
  background-color: #f8f8fa;
  padding-top: 50px;

  hr {
    margin: 1px;
    padding: 0;
    height: 1px;
    background-color: #f2f2f2;
    color: #f2f2f2;
    border: none;
    width: 100%;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    padding: 50px 0 20px;
  }

  .myPage {
    width: 1060px;
    margin: 0 auto;
  }

  .myWantedContents {
    display: flex;
    justify-content: space-between;

    .apply {
      width: 790px;
      padding: 41px 30px 30px;
      border: 1px solid #e1e2e3;
      border-radius: 3px;
      background-color: #fff;
      margin-bottom: 10px;

      .label {
        align-items: center;
        line-height: 24px;
        color: #999;
      }
      .contents {
        margin-top: 9px;
        margin-bottom: 24px;
      }

      h3 {
        color: #333;
        font-size: 20px;
        font-weight: 600;
        line-height: 1;
      }

      .selectedResume {
        display: flex;
        flex-direction: column;
        margin-top: 36px;
        span {
          line-height: 24px;
          color: #999;
        }

        .defaultResumeSelector {
          position: relative;
          width: 100%;
          height: 50px;
          padding-right: 20px;
          padding-left: 20px;
          border-radius: 3px;
          border: 1px solid #e1e2e3;
          margin-top: 10px;
          text-align: left;
          display: flex;
          align-items: center;
          margin-bottom: 28px;

          .lang {
            width: 20px;
            height: 20px;
            border-radius: 2px;
            border: 1px solid #999;
            font-size: 11px;
            font-weight: 400;
            font-stretch: normal;
            font-style: normal;
            line-height: 20px;
            letter-spacing: normal;
            color: #999;
            text-align: center;
            margin-right: 10px;
          }
          span {
            font-size: 16px;
            color: #333;
          }
        }

        .row {
          margin-top: 9px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          dd {
            color: #999;
          }
        }

        .introduce {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          max-height: inherit;
          position: relative;
          overflow: hidden;
          margin-top: 28px;
          font-size: 14px;
          line-height: 1.57;
          color: #999;
          white-space: pre-line;
        }
      }

      .jobSearchingOption {
        display: flex;
        align-items: center;
        padding: 18px 0 15px;

        .jobSearchingBody {
          display: flex;

          .resumeNow {
            font-size: 16px;
            line-height: 40px;
            color: #333;
          }
        }

        h6 {
          width: 150px;
          padding-right: 10px;
          color: #999;
          font-size: 16px;
          line-height: 40px;
        }

        select {
          font-size: 16px;
          font-weight: 600;
          text-align: left;
          color: #258bf7;
          padding: 10px 20px 10px 0;
          border: none;
          background: none;
          margin-right: 20px;
        }
      }
    }
    p {
      color: #08ba9c;
      font-size: 12px;
    }
  }
`
