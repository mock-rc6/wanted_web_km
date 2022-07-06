import styled from 'styled-components'

const Title = () => {
  return (
    <TitleWrapper>
      <h1>민경미</h1>
      <div>
        <input type='text' placeholder='민경미' />
        <input type='text' placeholder='kmmin727@gmail.com' />
        <input type='text' placeholder='+821071560673' />
      </div>
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  margin-bottom: 60px;
  h1 {
    color: #3b3d40;
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
    margin: 130px 0 50px;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 10px;
      font-size: 16px;
      border: none;
      outline: none;
    }
  }
`
