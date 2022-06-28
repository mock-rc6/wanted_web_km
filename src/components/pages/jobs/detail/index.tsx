import Footer from 'components/common/layout/footer'
import JobList from '../list/jobList'
import { Apply } from './apply'
import Contents from './contents'
import { JobDetailWrapper } from './detail.styles'

const JobDetail = () => {
  return (
    <>
      <JobDetailWrapper>
        <Contents />
        <Apply />
      </JobDetailWrapper>
      <JobList />
      <Footer />
    </>
  )
}

export default JobDetail
