import styled from 'styled-components'

interface IProps {
  title: string
  name: string
  email: string
  phone: string
  setTitle: (value: string) => void
  setName: (value: string) => void
  setEmail: (value: string) => void
  setPhone: (value: string) => void
}

const Title = ({ title, setTitle, name, setName, email, setEmail, phone, setPhone }: IProps) => {
  return (
    <TitleWrapper>
      <input
        className='resumeTitle'
        type='text'
        defaultValue={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value)
        }}
      />
      <div>
        <input
          type='text'
          defaultValue={name}
          onChange={(e) => {
            setName(e.currentTarget.value)
          }}
        />
        <input
          type='text'
          defaultValue={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value)
          }}
        />
        <input
          type='text'
          defaultValue={phone}
          onChange={(e) => {
            setPhone(e.currentTarget.value)
          }}
        />
      </div>
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  margin-bottom: 60px;
  .resumeTitle {
    color: #3b3d40;
    width: 100%;
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
    margin: 130px 0 50px;
    border: none;
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
