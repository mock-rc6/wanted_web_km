import Footer from 'components/common/layout/footer'
import { useSearchParams } from 'react-router-dom'
import JobFilter from './list/jobFilter'
import JobList from './list/jobList'

const Jobs = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <JobFilter setSearchParams={setSearchParams} searchParams={searchParams} />
      <JobList searchParams={searchParams} />
      <Footer />
    </>
  )
}

export default Jobs
