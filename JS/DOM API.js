//DOM API
//Document Object Model, Application Programming Interface
//(div, span ,input),(HTML을 제어하는 명령)
//El박스 요소
//HTML 요소 (Element) 1개 검색 / 찾기
const boxEl = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

//인수 (Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2);

// 2- 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function () {
    console.log('click~');
});
//상황을 청취하고 있다가 실행 

//HTML 요소 (/Element) 검색 / 찾기
const boxEl = document.querySelector('.box');

//요소 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains); // true


boxEl.classList.remove('active);
isContains = boxEl.class.contains('active');
console.log(isContains) ; // false
