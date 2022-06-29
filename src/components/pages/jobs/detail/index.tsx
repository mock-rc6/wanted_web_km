import Footer from 'components/common/layout/footer'
import { useRef } from 'react'
import JobList from '../list/jobList'
import { Apply } from './apply'
import Contents from './contents'
import { JobDetailWrapper } from './detail.styles'

const JobDetail = () => {
  const scrollRef = useRef(null)
  const user = '민경미'

  return (
    <JobDetailWrapper>
      <section className='jobDetail'>
        <Contents scrollRef={scrollRef} />
        <Apply scrollRef={scrollRef} />
      </section>
      <h5>{user}님, 이 포지션을 찾고 계셨나요?</h5>
      <JobList />
      <Footer />
    </JobDetailWrapper>
  )
}

export default JobDetail
