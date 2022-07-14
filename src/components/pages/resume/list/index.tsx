import { InfoIcon } from 'assets'
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import store from 'storejs'

import { ListWrapper } from './list.styles'
import ResumeCard from './resumeCard'
import NewBtn from './resumeCard/newBtn'
import UploadBtn from './resumeCard/uploadBtn'

interface IResume {
  id: number
  title: string
  updated_at: Date
  is_finished: boolean
}

const ResumeList = () => {
  const [resumeList, setResumeList] = useState<IResume[]>([])
  const [id, setId] = useState(0)
  const accessToken = store.get('accessToken')
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get('https://dev.odoong.shop/resumes', {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => setResumeList(res.data.result))
  }, [accessToken])

  const handleClickNew = () => {
    axios
      .post('https://dev.odoong.shop/resumes', null, {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => {
        setId(res.data.result.id)
        navigate(`/resume/write/${res.data.result.id}`)
      })
  }

  return (
    <ListWrapper>
      <div className='listBody'>
        <div className='title'>
          <h4>최근 문서</h4>
          <span className='intro'>
            원티드 이력서 소개
            <InfoIcon />
          </span>
        </div>
        <ul className='listContents'>
          <li className='default'>
            <NewBtn onClick={handleClickNew} />
          </li>
          <li className='default'>
            <UploadBtn />
          </li>
          {resumeList?.map((resume) => (
            <li key={resume.id}>
              <ResumeCard resume={resume} />
            </li>
          ))}
        </ul>
      </div>
    </ListWrapper>
  )
}
export default ResumeList
