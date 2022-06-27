import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/common/layout'
import GlobalStyles from './globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<div>테스트</div>} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}
export default App
