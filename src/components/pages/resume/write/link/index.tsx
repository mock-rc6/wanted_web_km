import AddButton from '../../addButton'
import Guidance from '../guidance'
import { LinkBox, LinkWrapper } from './link.styles'

const Link = () => {
  return (
    <LinkWrapper>
      <Guidance
        title='링크'
        contents='• 깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요.'
      />
      <AddButton />
      <LinkBox>
        <input type='text' placeholder='http://' className='linkUrl' />
      </LinkBox>
    </LinkWrapper>
  )
}

export default Link
