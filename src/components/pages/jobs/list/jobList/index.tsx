import { Link } from 'react-router-dom'
import styled from 'styled-components'
import JobCard from './jobCard'

const JobList = () => {
  return (
    <JobListWrapper>
      <Link to='/joblist/1'>
        <JobCard />
      </Link>
      <Link to='/joblist/2'>
        <JobCard />
      </Link>
      <Link to='/joblist/3'>
        <JobCard />
      </Link>
      <Link to='/joblist/4'>
        <JobCard />
      </Link>
      <Link to='/joblist/5'>
        <JobCard />
      </Link>
      <Link to='/joblist/6'>
        <JobCard />
      </Link>
      <Link to='/joblist/7'>
        <JobCard />
      </Link>
      <Link to='/joblist/8'>
        <JobCard />
      </Link>
      <Link to='/joblist/1'>
        <JobCard />
      </Link>
      <Link to='/joblist/2'>
        <JobCard />
      </Link>
      <Link to='/joblist/3'>
        <JobCard />
      </Link>
      <Link to='/joblist/4'>
        <JobCard />
      </Link>
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
