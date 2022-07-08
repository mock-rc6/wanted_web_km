import JobCard from 'components/pages/jobs/list/jobList/jobCard'
import styled from 'styled-components'
import store from 'storejs'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const MyLike = () => {
  const accessToken = store.get('accessToken')
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios
      .get('https://dev.odoong.shop/mypages/likemarks', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => setData(res.data.result))
  }, [accessToken])

  return (
    <MyLikeWrapper>
      <div className='myPage'>
        <h2>좋아요</h2>
        <div className='myWantedContents'>
          {data?.map((el: any) => (
            <Fragment key={el.id}>
              <JobCard job={el} />
            </Fragment>
          ))}
        </div>
      </div>
    </MyLikeWrapper>
  )
}

export default MyLike

const MyLikeWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f8f8fa;
  padding-top: 50px;

  h2 {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    padding: 50px 0 20px;
  }

  .myPage {
    width: 1100px;
    margin: 0 auto;
  }
  .myWantedContents {
    display: flex;
    flex-wrap: wrap;
  }
`
