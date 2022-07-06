import Carrer from './career'
import Education from './education'
import Introduce from './introduce'
import Language from './language'
import Link from './link'
import Skill from './skill'
import ETC from './etc'
import { ResumeWriteWrapper } from './write.styles'

const ResumeWrite = () => {
  return (
    <ResumeWriteWrapper>
      <Introduce />
      <Carrer />
      <Education />
      <Skill />
      <ETC />
      <Language />
      <Link />
    </ResumeWriteWrapper>
  )
}

export default ResumeWrite
