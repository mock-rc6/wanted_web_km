import { useEffect, useState } from 'react'
import store from 'storejs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import JobCard from './jobCard'
import { IRecruits } from 'types/wanted'

interface IProps {
  searchParams?: URLSearchParams
}

interface IBookMarkData {
  recruit_id: number
}
const JobList = ({ searchParams }: IProps) => {
  const [jobData, setJobData] = useState<IRecruits[]>([])
  const [bookMarkData, setBookMarkData] = useState<IBookMarkData[]>([])
  const accessToken = store.get('accessToken')

  useEffect(() => {
    axios
      .get(`https://dev.odoong.shop/recruits?years=0&years=10&${searchParams?.toString()}`, {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => {
        const data = res.data.result
        setJobData(data.recruits)
        setBookMarkData(data.bookmarks)
      })
  }, [searchParams])

  console.log(jobData)

  const bookMarkList: number[] = []

  bookMarkData?.map((el) => {
    return bookMarkList.push(el.recruit_id)
  })

  return (
    <JobListWrapper>
      {jobData?.map((job) => (
        <JobCard job={job} bookMarkList={bookMarkList} key={job.id} />
      ))}
      {/* <Link to='/joblist/a'> */}
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
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
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
