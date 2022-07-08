import { LinedArrow } from 'assets'
import { RefObject, useEffect, useRef, useState } from 'react'
import { ImagesWrapper } from './images.styles'

interface IProps {
  url: []
}

const Images = ({ url }: IProps) => {
  const [scroll, setScroll] = useState(0)
  const scrollRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  let imgUrls = [
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F403%2Fwmcdajeixelbaztn__1080_790.jpg&w=1000&q=75',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F403%2Fi0a27uuv9l5qwkqw__1080_790.jpg&w=1000&q=75',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F403%2Fheenwqvxpwdka2rz__1080_790.jpg&w=1000&q=75',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F403%2Fwwjbojujs9wgxk8b__1080_790.jpg&w=1000&q=75',
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F403%2Foposozunwdmlggw5__1080_790.jpg&w=1000&q=75',
  ]

  // if (url.length > 0) imgUrls = url

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTo({
        left: scroll,
        behavior: 'smooth',
      })
  }, [scroll])

  const handleClickNext = () => {
    if (scroll >= 700 * imgUrls.length) return
    setScroll((prev) => prev + 700)
  }

  const handleClickPrev = () => {
    if (scroll === 0) return
    setScroll((prev) => prev - 700)
  }

  return (
    <div>
      <ImagesWrapper>
        <button type='button' className='arrowLeft' onClick={handleClickPrev}>
          <LinedArrow />
        </button>
        <button type='button' className='arrowRight' onClick={handleClickNext}>
          <LinedArrow />
        </button>
        <div className='imagesBox' ref={scrollRef}>
          {url?.length > 0 && (
            <>
              {url?.map((element) => (
                <div className='imageSlide' key={element}>
                  <img src={`https://dev.odoong.shop/resources${element}`} alt='채용공고 이미지' />
                </div>
              ))}{' '}
            </>
          )}
          {url?.length === 0 && (
            <>
              {imgUrls.map((element) => (
                <div className='imageSlide' key={element}>
                  <img src={element} alt='채용공고 이미지' />
                </div>
              ))}
            </>
          )}
        </div>
      </ImagesWrapper>
    </div>
  )
}

export default Images
