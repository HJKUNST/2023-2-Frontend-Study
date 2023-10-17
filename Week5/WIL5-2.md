<h2> 한입 크기로 잘라 먹는 리액트 : 기초부터 실전까지 </h2>

<h3> Section 3 : Node.js 기초 </h3>

- Node.js

  - 크롬의 자바스크립트 엔진이 v8 엔진 이용하여 자바스크립트를 브라우저가 아닌 어디에서든 사용할 수 있도록 하는 도구.
  - 자바스크립트의 실행환경 : javascript's runtime
  - 리액트의 근간

- Node.js Hello World & Common JS

  - 모듈 : 기능 담당하는 분리된 파일 각각을 말함
  - CommonJS (모듈 시스템) : node.js에서는 module.exports로 내보낸 모듈을 경로와 require라는 내장함수 통해서 가져와서 사용할 수 있음

- Node.js 패키지 생성 및 외부 패키지 사용하기

  - npm : node package manager - 다른 사람이 만들어 놓은 모듈 사용하거나 프로젝트 관리하는 데 도움 줌.
  - package.json : 패키지 정보 기록하는 환경설정
  - 자주 사용할 긴 명령어를 쉬운 키워드로 바꿀 수 있음.
  - npmjs.com : node.js 패키지 쇼핑몰

<h3> Section 4 : React.js 기초 </h3>

React.js : Node.js 기반의 Javascript UI 라이브러리

- Why React?

  - 문제 1 : 중복 코드 작성 (산탄총 수술)
    - 공통적으로 사용 될 헤더, 푸터 같은 내부 요소를 별도의 파일, 모듈로
    - 컴포넌트화 방식 : 수정하기 쉬워짐
    - 리액트의 문제 해결 : Component 기반 UI 라이브러리
  - 문제 2 : 명령형 프로그래밍 (절차 나열) ... jQuery
    - 선언형 프로그래밍 (목적 바로 말함) ... React
  - Virtual DOM : 브라우저가 html 트리 형태로 변환.
    - 발생 변화를 화면에 실시간으로 업데이트 하는 것 아닌,
      가상의 DOM에 미리 업데이트 시켜서, 한번에 업데이트 할 수 있는 부분 모아서 리얼돔에 업데이트
    - 다섯 번 업데이트 할 거 한번에 업데이트

- Create React App

  - 보일러 플레이트 : 이미 세팅 완료된 패키지
  - 리액트 앱은 Node.js 기반 웹서버 위에서 동작
  - npm start로 켜고, ctrl c로 끄기
  - node.js 패키지는 Node-modules 없어도 무방 : 어떤 모듈 사용해야 하는지가 package.json과 package.loc.json에 명시.
    - npm i : node.modules 자동으로 다운
  - JSX : Javascript 표현식 (Extension) JS, Html 합쳐서 사용할 수 있는 문법
  - app(함수) 만들고 JSX 문법의 html return -> 컴포넌트 생성
  - es 모듈 시스템 : export default App; 으로 내보내면,
    다른 파일에서 import 이름 from 파일의 경로 로 사용 가능
