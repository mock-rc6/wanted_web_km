## 개발일지
 - 2022.06.25. 작업 초기환경 셋팅
   - esLint 설정
   - prettier 적용
   - 라이브러리 설치
     - recoil
     - axios
     - react-query
     - storejs
     - react-slick
     - styled-components
 - 2022.06.26. 
    - typescript 설치
    - styleLint 설정     
 - 2022.06.27.
    - styleLint 삭제
    - 페이지 레이아웃 구현 : react-router-dom(v6)의 outlet 기능을 활용하였습니다.
    - 모달 구현 : react의 portal 기능을 활용하여 부모 컴포넌트의 DOM 외부에 존재하는 DOM 노드에 렌더링되도록 구현하였습니다. 
    - 컴포넌트 제작
      - 공통컴포넌트 : 버튼, 라벨 
      - 채용공고 목록 페이지 : 카드 UI
      - 채용공고 상세 페이지 : 공고 상세내역, 이미지슬라이더, 지원하기
      - 회원가입(모달)
      - 로그인(모달)
    - API 일부 연결
      - 핸드폰 인증번호 발송 api
 - 2022.06.28.
    - API 연결
      - 핸드폰 인증 확인 api
      - 회원가입 api
    - 컴포넌트 수정
      - 회원가입 validation : 
        - (issue) 회원가입 부분 코드 가독성이 떨어지는 것 같아 고민입니다. 
        - (추후 수정해야 할 부분) validation error 시 해당 input 강조기능 추가요망
      - 핸드폰번호 인증 타이머
 - 2022.06.29.
    - 환경 관련
      - type선언 별도 파일로 분리
    - API 연결
      - 채용공고 목록 api
      - 채용공고 상세 api
    - 컴포넌트 제작 및 수정
      - 채용공고 상세페이지 지도 추가(네이버)
        - (추후 수정해야 할 부분) 클라이언트키 env 파일로 별도 관리 요망
      - 채용공고 상세페이지 이미지 슬라이드 컴포넌트 버튼을 통한 스크롤 기능 추가
      - 채용공고 상세페이지 회사카드 컴포넌트 분리, 토글기능 추가
      - 채용공고 상세페이지 경고카드 컴포넌트 분리
      - 이력서 소개페이지 UI 제작