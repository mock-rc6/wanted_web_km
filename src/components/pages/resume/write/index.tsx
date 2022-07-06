import Carrer from './career'
import Education from './education'
import Introduce from './introduce'
import Language from './language'
import Link from './link'
import Skill from './skill'
import ETC from './etc'
import { ResumeWriteWrapper } from './write.styles'
import ResumeHeader from './writeHeader'
import Title from './title'
import ResumeFooter from './writeFooter'

const ResumeWrite = () => {
  return (
    <ResumeWriteWrapper>
      <ResumeHeader />
      <Title />
      <Introduce />
      <Carrer />
      <Education />
      <Skill />
      <ETC />
      <Language />
      <Link />
      <ResumeFooter />
    </ResumeWriteWrapper>
  )
}

export default ResumeWrite
