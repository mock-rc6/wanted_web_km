import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/common/layout'
import GlobalStyles from './style/globalStyles'
import Jobs from 'components/pages/jobs'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Jobs />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}
export default App
