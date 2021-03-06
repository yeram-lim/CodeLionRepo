![image](https://user-images.githubusercontent.com/77733145/171085820-3b7225a5-e31c-4a5c-80a9-91d1d0dc93ca.png)

## CH01

## CH02
```
document.getElementById();
document.getElementsByTagName();
document.getElementsByClassName();
document.querySelector();
document.querySelectorAll();
```

#### DOM 조작
```
innerHTML

```

## CH03
#### 타입 변환
JS는 데이터 타입을 자기가 맞다고 생각하는 대로 변환하기 때문에 우리가 보다 정확하게 데이터 타입을 넘겨줘야 한다.

#### Truthy & Falsy
빈 문자열은 false로 인식한다.

false인 경우
- undefined
- null
- 0
- ''(빈 문자열)
- NaN

#### 함수 심화
1. 화살표 함수
```
const add = (a, b) => a + b;
```

2. 일급객체
변수에 할당될 수 있어야 하고, 함수의 인자와 반환값으로 사용가능한 타입

3. 비동기와 promise
JS는 비동기적으로 일을 처리한다. = 순서대로 일을 처리하지 않는다.
하지만 가끔 동기적으로 일을 진행해야 할 경우가 있는데 그 때는 아래와 같이 코드를 작성한다.
```
fetch('url')
    .then(res => res.json())
    .then(console.log);
```

1.프로미스
- Pending: 프로미스 처리중
- Fulfilled: 프로미스 성공
- Rejected: 프로미스 실패

4. 논리 연산자 심화
- && and
- || or

#### Spread
```
const me = {
    name: '임예람',
    age: 24,
};

const militaryMe = {
    ...me,
    militaryState: false,
}
```
- `...` 을 사용해 객체나 리스트를 복제한다.

#### Rest
```
const me = {
    name: '임예람',
    age: 24,
    militaryState: false,
};

const { militaryState, ...another } = me; 
```
- `...` 을 사용해 요소가 제외된 객체나 리스트를 출력한다.

## CH04
#### MBTI 테스트를 만들어보장

## CH05
#### REST API
- GET, POST등의 메서드를 이용해 백엔드와 자원을 주고 받는다.
- 자원은 주로 `XML`과 `JSON` 형식으로 주고 받는다.

1. Fetch
- REST API를 손쉽게 활용할 수 있게 해주는 JS의 내장 라이브러리이다. 일부 기능이 부족하다.

2. Axios
- 외부 라이브러리 모듈 설치가 필요하다. Fetch에 비해 다양한 기능이 존재한다.

