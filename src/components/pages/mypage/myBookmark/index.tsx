import JobCard from 'components/pages/jobs/list/jobList/jobCard'
import styled from 'styled-components'
import store from 'storejs'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

const MyBookmark = () => {
  const accessToken = store.get('accessToken')
  const [data, setData] = useState<any>()
  useEffect(() => {
    axios
      .get('https://dev.odoong.shop/mypages/bookmarks', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => setData(res.data.result))
  }, [accessToken])

  return (
    <MyBookmarkWrapper>
      <div className='myPage'>
        <h2>북마크</h2>
        <div className='myWantedContents'>
          {data?.map((el: any) => (
            <Fragment key={el.id}>
              <JobCard job={el} />
            </Fragment>
          ))}
        </div>
      </div>
    </MyBookmarkWrapper>
  )
}

export default MyBookmark

const MyBookmarkWrapper = styled.main`
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
