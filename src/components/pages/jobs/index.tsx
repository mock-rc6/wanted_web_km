import Footer from 'components/common/layout/footer'
import JobFilter from './list/jobFilter'
import JobList from './list/jobList'

const Jobs = () => {
  return (
    <>
      <JobFilter />
      <JobList />
      <Footer />
    </>
  )
}

export default Jobs
