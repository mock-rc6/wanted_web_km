import styled from 'styled-components'

const MyWanted = () => {
  return (
    <MyPageWrapper>
      <div className='myPage'>
        <h2>MY 원티드</h2>
        <div className='myWantedContents'>ddd</div>
      </div>
    </MyPageWrapper>
  )
}

export default MyWanted

const MyPageWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #f8f8fa;
  padding-top: 50px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #333;
    padding: 50px 0 20px;
  }

  .myPage {
    width: 1060px;
    margin: 0 auto;
  }
  .myWantedContents {
    display: flex;
    justify-content: space-between;
  }
`
