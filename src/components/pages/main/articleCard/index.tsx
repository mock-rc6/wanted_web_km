import styled from 'styled-components'

interface IProps {
  el: {
    url: string
    title: string
    hashtag: string
  }
}
const ArticleCard = ({ el }: IProps) => {
  return (
    <ArticleCardWrapper>
      <div className='imgWrapper'>
        <img src={el.url} alt={el.title} />
      </div>
      <div className='contentsWrapper'>
        <p className='articleTitle'>{el.title}</p>
        <p className='hashTag'>{el.hashtag} </p>
      </div>
    </ArticleCardWrapper>
  )
}

export default ArticleCard

const ArticleCardWrapper = styled.li`
  width: 260px;
  list-style: none;
  padding: 10px;

  .imgWrapper {
    position: relative;
    height: auto;
    padding-bottom: 70%;
    padding-left: 0;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 4px;
      object-fit: cover;
      object-position: top;
      outline: 1px solid rgba(0, 0, 0, 0.05);
      outline-offset: -1px;
    }
  }

  .contentsWrapper {
    .articleTitle {
      margin-top: 17px;
      font-size: 16px;
      overflow: hidden;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
    }

    .hashTag {
      margin-top: 13px;
      font-size: 12px;
      font-weight: 500;
      color: #333;
    }
  }
`
