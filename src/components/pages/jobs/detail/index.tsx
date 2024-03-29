import axios from 'axios'
import Footer from 'components/common/layout/footer'
import store from 'storejs'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobList from '../list/jobList'
import { Apply } from './apply'
import Contents from './contents'
import { JobDetailWrapper } from './detail.styles'

const JobDetail = () => {
  const [detailData, setDetailData] = useState<any>([])
  const scrollRef = useRef(null)
  const accessToken = store.get('accessToken')
  const param = useParams()
  const { id } = param

  useEffect(() => {
    axios
      .get(`https://dev.odoong.shop/recruits/${id}`, {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => {
        const { data } = res
        setDetailData(data.result)
      })
  }, [id])

  const user = '민경미'

  return (
    <JobDetailWrapper>
      <section className='jobDetail'>
        <Contents scrollRef={scrollRef} data={detailData} />
        <Apply scrollRef={scrollRef} data={detailData} />
      </section>
      <h5>{user}님, 이 포지션을 찾고 계셨나요?</h5>
      <JobList />
      <Footer />
    </JobDetailWrapper>
  )
}

export default JobDetail
