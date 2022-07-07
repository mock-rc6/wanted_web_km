import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/common/layout'
import GlobalStyles from './style/globalStyles'
import Jobs from 'components/pages/jobs'
import JobDetail from 'components/pages/jobs/detail'
import ResumeIntro from 'components/pages/resume/intro'
import ResumeList from 'components/pages/resume/list'
import Main from 'components/pages/main'
import ResumeWrite from 'components/pages/resume/write'
import MyProfile from 'components/pages/mypage/myWanted'
import MyLike from 'components/pages/mypage/myLike'
import MyBookmark from 'components/pages/mypage/myBookmark'

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='joblist' element={<Jobs />} />
          <Route path='joblist/:id' element={<JobDetail />} />
          <Route path='resume/intro' element={<ResumeIntro />} />
          <Route path='resume/list' element={<ResumeList />} />
          <Route path='resume/write' element={<ResumeWrite />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='profile/likes' element={<MyLike />} />
          <Route path='profile/bookmarks' element={<MyBookmark />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}
export default App
