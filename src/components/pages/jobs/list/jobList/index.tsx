import styled from 'styled-components'
import JobCard from './jobCard'

const JobList = () => {
  return (
    <JobListWrapper>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </JobListWrapper>
  )
}

export default JobList

const JobListWrapper = styled.main`
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
