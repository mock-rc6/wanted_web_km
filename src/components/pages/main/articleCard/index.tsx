import styled from 'styled-components'

const ArticleCard = () => {
  return (
    <ArticleCardWrapper>
      <div className='imgWrapper'>
        <img src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2154%2Faefa9abe.jpg&amp;w=undefined&amp;q=75' />
      </div>
      <div className='contentsWrapper'>
        <p className='articleTitle'>핀테크 회사 대표가 된 개발자</p>
        <p className='hashTag'>#개발 #취업/이직 #조직문화 </p>
      </div>
    </ArticleCardWrapper>
  )
}

export default ArticleCard

const ArticleCardWrapper = styled.li`
  width: 270px;
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
