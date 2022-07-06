import { XButton } from 'assets'
import DefaultBtn from 'components/common/buttons/default'
import { ModalBackground } from 'components/pages/signUp/signUp.styles'
import { Dispatch, Fragment, MouseEvent, SetStateAction, useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import CityItem from './CityItem'
import { ModalWrapper } from './location.styles'
import ProvinceItem from './ProvinceItem'

interface IFilters {
  [prop: string]: boolean
}

interface IProps {
  toggle: Dispatch<SetStateAction<IFilters>>
  setLocations: Dispatch<SetStateAction<string>>
}

const LocationModal = ({ toggle, setLocations }: IProps) => {
  const [selectedMetroCity, setSelectedMetroCity] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const tempLocationArr: string[] = []
    selectedCity.forEach((el) => tempLocationArr.push(`서울 ${el}`))
    setSelectedLocation(tempLocationArr)
  }, [selectedCity])

  const handleClickLocation = () => {
    searchParams.delete('locations')
    const tempQueryArr: string[] = []
    selectedCity.forEach((el) => tempQueryArr.push(`서울.${el}`))
    tempQueryArr.forEach((el) => searchParams.append('locations', el))
    setSearchParams(searchParams)
    setLocations('서울 외')
    toggle({ locations: false })
  }

  const handleClickTag = (e: MouseEvent<HTMLSpanElement>) => {
    const restArr = selectedCity.filter((city) => city !== e.currentTarget.dataset.name?.substring(3))
    setSelectedCity(restArr)
  }

  // prettier-ignore
  const province = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']
  // prettier-ignore
  const seoul = ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구']

  return (
    <ModalBackground>
      <ModalWrapper>
        <div className='locationTitle'>
          <button type='button' className='resetButton'>
            초기화
          </button>
          <span className='loctaionNameTitle'>
            지역
            <span className='filterCount'>{selectedLocation.length === 0 ? 1 : selectedLocation.length}</span>
          </span>
          <button className='xButton' type='button' onClick={() => toggle({ locations: false })}>
            <XButton />
          </button>
        </div>
        <div className='locationBody'>
          <div className='selectorContainer'>
            <h6 className='selectorHeader'>국가</h6>
            <select>
              <option value='kr'>한국</option>
            </select>
          </div>
          <div className='locationContainer'>
            <div className='locationLeft'>
              <h6>지역</h6>
              <ul>
                <li>
                  <button type='button' className={selectedMetroCity.length === 0 ? 'selected' : 'defaultSelect'}>
                    전국
                  </button>
                </li>
                {province.map((el) => (
                  <Fragment key={el}>
                    <ProvinceItem
                      el={el}
                      selectedMetroCity={selectedMetroCity}
                      setSelectedMetroCity={setSelectedMetroCity}
                    />
                  </Fragment>
                ))}
              </ul>
            </div>
            <div className='locationRight'>
              <h6>상세지역</h6>
              {selectedMetroCity.includes('서울') && (
                <ul>
                  {seoul.map((el) => (
                    <Fragment key={el}>
                      <CityItem el={el} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
                    </Fragment>
                  ))}
                </ul>
              )}
              {!selectedMetroCity.includes('서울') && (
                <div className='empty'>
                  지역을 선택하면
                  <br />
                  상세 지역을 확인할 수 있습니다.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='locationFooter'>
          <div className='selectedList'>
            <ul className='locationItems'>
              {selectedLocation.length >= 1 ? (
                <>
                  {selectedLocation.map((el) => (
                    <li className='locationItem' key={el}>
                      <span data-name={el} role='button' onClick={handleClickTag} tabIndex={0}>
                        {el} ✕
                      </span>
                    </li>
                  ))}
                </>
              ) : (
                <li className='locationItem'>
                  <span>한국 전국</span>
                </li>
              )}
            </ul>
            <p>최대 15개까지 선택 가능합니다.</p>
          </div>
          <DefaultBtn buttonName='확인' type='button' handleClick={handleClickLocation} />
        </div>
      </ModalWrapper>
    </ModalBackground>
  )
}

export default LocationModal
