<h2> 한입 크기로 잘라 먹는 리액트 : 기초부터 실전까지 </h2>

<h3> Section 1 : JavaScript 기본 </h3>

* 콘솔 대신 CodeSandbox.io 사용 : 개발자 도구 콘솔 사용시 한 줄 칠 때마다 실행되므로, CodeSandbox 이용.
* 변수 : 계속 바뀌는 값 저장소.
    - 변수 선언 - let age(변수) = 25; or var
    - let : 중복 불가 (되도록 let 쓰기), var : 중복 가능
    - ex. console.log(age); // 25
    - 변수 명에 기호 사용 불가; _ , $ 는 가능
    - 숫자 아닌 문자로 시작
    - 예약어 피하기

* 상수 : const
    - let, var 처럼 선언 가능
    - 선언 이후 값 바꿀 수 없음

* 자료형과 형 변환
    - 자료형
        - 원시 타입 : 한번에 하나의 값, 하나의 고정된 저장 공간
            - 숫자형 (사칙연산 적용), 문자열(백틱 - 문자열 안에 변수 값 집어넣을 수 있음 : 템플릿 리터럴 ${name2}), 불린 (참, 거짓), 널 (의도적으로 아무 값 없는 변수 표현), undefined
        - 비 원시 타입 : 한번에 여러 개 값, 고정되지 않은 동적 공간
    - 형 변환 : 다른 타입 자료형 적절하게 자동 변환 - 캐스팅, 묵시적 형변환
        - parseInt : 문자열 받아서 숫자로 돌려줌. 의도적 형변환 - 명시적 형변환

* 연산자
    - 대입 연산자
    - 산술 연산자
    - 복합 연산자 ex. a += 10;
    - 증감 연산자 : 숫자형에만 사용, 산술 연산자 두번 a++; 1개 더함
        후위연산 : 증감 연산자 뒤에 씀 - 라인 뒷부분부터 바뀜
        전위연산 : 증감 연산자 만난 시점부터 적용
    - 논리 연산자
        ! - not
        && : 연산자, 피연산자 다 참일 때 참
        || : 둘 중 하나 참 일떄
    - 비교 연산자
        ==, !== : 값만 비교.
        ===, !=== : 값, 타입 비교.
        <, >, <=, => : 대소 비교.
        typeof : 변수의 자료형을 문자열로 보여줌
        널병합 연산자 : ?? - 피연산자 중 null, undefined 아닌 것 선택 

* 조건문
    - 참 거짓 따라 각각 다른 명령 수행하게
    - if, else, else if
    - switch : 케이스들과 비교

        ```javascript
        switch(country) {
            case 'ko';
                console.log("한국");
                break;
            case 'jp';
                console.log ("일본");
                break;
            default;
                console.log ("미 분류");
                break;
        }
        ```


* 함수
    - 함수 선언 방식 함수 생성
        ```javascript
            function getArea(width, height){
                let width = 10;
                let height = 20;
                let area = width * height;
                console.log(area);
            }

            getArea(100, 200);
            console.log("함수실행완료");
        ```
    - 함수 호출 : getArea();, console,log("함수 실행 완료");
    - 매개 변수 사용 : getArea(100, 200);
    - return : 리턴값 반환 - 변수에 할당
    - 함수 내부 선언 변수 : 외부에서 접근 불가 - 지역 변수
    - 함수 외부 선언 변수 : 내부에 접근 가능 - 전역 변수