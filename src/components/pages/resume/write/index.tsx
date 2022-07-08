import { useEffect, useState } from 'react'
import axios from 'axios'
import store from 'storejs'
import { ResumeWriteWrapper } from './write.styles'
import Carrer from './career'
import Education from './education'
import Introduce from './introduce'
import Language from './language'
import Link from './link'
import Skill from './skill'
import ETC from './etc'
import ResumeHeader from './writeHeader'
import Title from './title'
import ResumeFooter from './writeFooter'
import { useLocation, useNavigate } from 'react-router-dom'

interface ICareer {
  id: number
  start_date: string
  end_date: string
  company_name: string
  department_position: string
  results: IResults[]
}

interface IResults {
  id: number
  title: string
  detail: string
  start_date: string
  end_date: string
}

interface IEducation {
  id: number
  start_date: string
  end_date: string
  is_in_service: boolean
  school_name: string
  major_degree: string
  detail: string
}

const ResumeWrite = () => {
  const [id, setId] = useState(0)
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [careers, setCareers] = useState<ICareer[]>([])
  const [educations, setEducations] = useState<IEducation[]>([])
  const [skills, setSkills] = useState([])
  const [awards, setAwards] = useState([])
  const [language, setLanguage] = useState([])
  const [link, setLink] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const accessToken = store.get('accessToken')

  useEffect(() => {
    axios
      .get(`https://dev.odoong.shop/resumes/${location.pathname.slice(-2)}`, {
        headers: {
          'X-ACCESS-TOKEN': accessToken,
        },
      })
      .then((res) => {
        setId(res.data.result.id)
        setTitle(res.data.result.title)
        setName(res.data.result.name)
        setEmail(res.data.result.email)
        setPhone(res.data.result.phone_number)
        setIntroduction(res.data.result.introduction)
        setCareers(res.data.result.careers)
        setEducations(res.data.result.educations)
        setSkills(res.data.result.skills)
        setAwards(res.data.result.awards)
        setLanguage(res.data.result.lanugage_skills)
        setLink(res.data.result.external_link)
        navigate(`/resume/write/${res.data.result.id}`)
      })
  }, [accessToken])

  const handleClickSubmit = () => {
    axios
      .patch(
        `https://dev.odoong.shop/resumes/${id}?permanent=TRUE`,
        {
          id,
          title,
          name,
          email,
          phone_number: phone,
          introduction,
          external_link: link,
          careers: [],
          educations,
          awards,
          language_skills: [],
          skills,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        }
      )
      .then((res) => {
        alert(res.data.message)
        navigate('/resume/list')
      })
  }

  const handleClickTemp = () => {
    axios
      .patch(
        `https://dev.odoong.shop/resumes/${id}?permanent=FALSE`,
        {
          id,
          title,
          name,
          email,
          phone_number: phone,
          introduction,
          external_link: link,
          careers: [],
          educations,
          awards,
          language_skills: [],
          skills,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': accessToken,
          },
        }
      )
      .then((res) => {
        alert(res.data.message)
      })
  }

  return (
    <ResumeWriteWrapper>
      <ResumeHeader />
      <Title
        title={title}
        setTitle={setTitle}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />
      <Introduce introduction={introduction} setIntroduction={setIntroduction} />
      <Carrer careers={careers} setCareers={setCareers} />
      <Education educations={educations} setEducations={setEducations} />
      <Skill />
      <ETC />
      <Language />
      <Link />
      <ResumeFooter handleClickSubmit={handleClickSubmit} handleClickTemp={handleClickTemp} />
    </ResumeWriteWrapper>
  )
}

export default ResumeWrite
