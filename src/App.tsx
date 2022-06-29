import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/common/layout'
import GlobalStyles from './style/globalStyles'
import Jobs from 'components/pages/jobs'
import JobDetail from 'components/pages/jobs/detail'
import ResumeIntro from 'components/pages/resume/intro'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Jobs />} />
          <Route path='joblist' element={<Jobs />} />
          <Route path='joblist/:id' element={<JobDetail />} />
          <Route path='resume/intro' element={<ResumeIntro />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}
export default App
