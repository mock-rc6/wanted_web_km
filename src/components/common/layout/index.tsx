import { Outlet } from 'react-router-dom'

import styled from 'styled-components'
import GNB from './headers/gnb'

export const Layout = () => {
  return (
    <LayoutWrapper>
      <GNB />
      <Outlet />
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
`
