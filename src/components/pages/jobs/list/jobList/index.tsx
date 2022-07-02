import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import JobCard from './jobCard'
import { IRecruits } from 'types/wanted'

interface IProps {
  searchParams?: URLSearchParams
}

const JobList = ({ searchParams }: IProps) => {
  const [jobData, setJobData] = useState<IRecruits[]>([])

  useEffect(() => {
    axios.get(`https://dev.odoong.shop/recruits?${searchParams?.toString()}`).then((res) => {
      const data = res.data.result
      setJobData(data)
    })
  }, [searchParams])

  return (
    <JobListWrapper>
      {jobData?.map((job) => (
        <Link to={`/joblist/${job.id}`} key={job.id}>
          <JobCard job={job} />
        </Link>
      ))}
      <Link to='/joblist/a'>
        <JobCard />
      </Link>
      <Link to='/joblist/b'>
        <JobCard />
      </Link>
      <Link to='/joblist/c'>
        <JobCard />
      </Link>
      <Link to='/joblist/d'>
        <JobCard />
      </Link>
      <Link to='/joblist/e'>
        <JobCard />
      </Link>
      <Link to='/joblist/f'>
        <JobCard />
      </Link>
      <Link to='/joblist/g'>
        <JobCard />
      </Link>
      <Link to='/joblist/h'>
        <JobCard />
      </Link>
      <Link to='/joblist/i'>
        <JobCard />
      </Link>
      <Link to='/joblist/j'>
        <JobCard />
      </Link>
    </JobListWrapper>
  )
}

export default JobList

const JobListWrapper = styled.main`
  width: 1080px;
  margin: 0 auto;
  padding: 20px 0 80px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
