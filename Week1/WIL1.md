모던 자바스크립트 입문 1-7장
1장. 자바스크립트의 개요
1.1 프로그래밍 언어로서의 자바 스크립트

    프로그래밍 언어 유형 : 절차적, 객체지향, 함수형, 논리형
    자바스크립트 특징
        1. 객체 지향 언어, but 함수형 언어 특징도 포함
        2. 인터프리터 언어 : 그러나 JIT 컴파일러(기계어로 번역하는 일 수행하는 소프트웨어) 내장 - 속도 보완
        3. 동적 프로토타입 기반 객체 지향 언어 : 객체 생성 이후 수정 가능
        4. 동적 타입 언어 : 변수 타입 없음
        5. 일급 객체 함수 : 고차함수 구현 가능, 함수형 프로그래밍 가능
        6. 함수가 클로저 정의 : 변수 은닉, 영속성 보장
    기술적 요소
        클라이언트 측 : 웹 브라우저 동작 JS
            주요 API : 윈도우 인터페이스
        서버 측 : 웹 서버 동작 JS
            서버 측 실행 환경 구현체 : Node.js, Rhino, Aptana Jaxer
        ECMAScript6

2장. 프로그램의 작성법과 실행법

    주의사항 : 세미콜론 잊지 않기, 저장 시 확장자 붙이기, UTF-8
    실행법 : 콘솔에서 실행, HTML에 삽입해 웹 브라우저로 실행, Node.js 대화형 모드, Node.js로 파일 읽어 실행 ($ node파일이름.js)

3장. 변수와 값
    변수

        변수 타입 x, 변수 선언자(var) 생략 가능
        변수 선언의 끌어올림(호이스팅) : 나중에 변수 선언해도 처음에 선언한 것처럼 다른 문장 앞에 생성.
        규칙 : 알파벳, 숫자, 밑줄, 달러기호.
            첫자로 숫자 불가, 예약어 불가
            상수는 대문자 (ex. MAX_SIZE)
            논리값 변수 이름 앞에 is 붙이기
            루프 카운터 변수 이름은 i, j, k
            생성자 이름은 파스칼 표기법 (ex. NewName)
        예약어
    데이터 타입
        분류 : 원시타입(기본적 요소, 불변), 객체타입(복합 데이터 타입)
        문자열 : "", '' 사용, //빈 문자열. 보통 html "큰 따옴표", JS '작은 따옴표' 구분
        논리값 : a==b
        특수한 값 : <undefined> - 값 할당 x 변수, 아무것도 반환하지 않는 함수가 반환하는 값 등
            <null> : 아무것도 없음을 값으로.
        심벌 : 유일부이한 값.
            심벌 생성
                var sym1 = Symbol();
                var sym2 = Symbol();
                console.log(sym1 == sym2); // -> false
                ...
                var HEART = Symbol("하트");
                console.log(HEART.toString()); // -> Symbol(하트)
            심벌, 문자열 연결 : Symbol.for, Symbol.keyFor
        템플릿 : 반복, 재사용 가능 틀
            사용법 : 역 따옴표(`)로 묶은 문자열.
                템플릿 리터럴 사용하면 \n 말고 일반적 줄 바꿈 문자 사용 가능
            보간 표현식 : 플레이스 홀더 - 외부 값 표현식에 반영하고자 할 때 마련한 장소.

4장. 객체와 배열, 함수의 기초
    객체 : 여러 데이터 하나로 모은 복합 데이터

        cf. 프로퍼티 : 객체 데이터(이름과 값의 쌍) 하나
        객체 생성 방법
            객체 리터럴 사용 객체 생성
                var card = { suit: "하트", rank: "A" };
                var card = { "suit": "하트", "rank": "A" };
                card.suit // -> 하트
                card["rank"] // -> A
            프로퍼티 추가, 삭제
                // <추가>
                card.value = 14;
                console.log (card); // -> Object {suit: "하트", rank: "A", value: 14}
                // <삭제>
                delete card.rank;
                console.log(card); // -> Object {suit: "하트", value: 14}
            프로퍼티 확인
                var card = { "suit": "하트", "rank": "A" };
                console.log("suit" in card); // -> true
                console.log("color" in card); // -> false
    함수 : 동사, 동사 시작 어휘로 만든다
        let, const : var 사용법과 같으나 유효 범위는 블록 안으로 한정.
            let : 선언 변수 호이스팅 x. let문으로 똑같은 변수 선언시 오류 발생.
            const : 반드시 초기화 필요.
        메서드 : 메서드가 속한 객체 데이터 상태 바꾸는 용도
        함수의 이점 : 재사용 가능, 이해 쉬움, 유지보수 간편
       length 프로퍼티 : 배열 길이 넘는 인덱스 삭제됨. 새 요소 추가x, 프로퍼티 값만 변경.
       wrapper object : 문자열은 length 프로퍼티 가짐. length 호출 시점에 string 객체로 변환. JS에서는 원시값 처리시 래퍼 객체로 자동 변환.

5장. 표현식과 연산자

    연산자
        관계 연산자 - 동일 연산자, 일치 연산자
        논리 연산자

6장. 웹 브라우저에서의 입출력

    대화상자(모달창, 떠있는 동안 기존 창 조작 불가), console
    이벤트 처리기 - 웹 브라우저의 동작
        등록 방법 : HTML 요소의 속성으로 등록, DOM 요소 프로퍼티로 등록, addEventListener 메서드 사용
    타이머 메소드 - 시간에 따른 동작 할 수 있는 메서드
    innerHTML - DOM 이용해 HTML 자체 변경 가능.
    폼 컨트롤 요소 : HTML 요소에 input 입력시 checked 여부도 확인 가능.
    document.write : 인수로 받은 문자열을 HTML 문서의 body 요소 안에 출력.

7장. 제어 구문

    종류
        조건문 : 조건에 따라 분기 처리. ex. if/else, switch, try/catch/finally
        반복문 : 조건 만족 시 반복. ex. while, do/while, for, for/in, for/of
        점프문 : 실행 위치를 이동. ex. break, continue, return, throw
