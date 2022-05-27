함수 
특정 동작(기능)을 수행하는 일부 코드의 집합(부분) = function

//함수 선언
function helloFunc(){
//실행 코드--------------------------명령
console.log(1234);
}
선언할떄 앞에 function 을 쓰고 , 뒤에 함수 중괄호 안에 코드를 넣는다.

//함수 호출 
helloFunc(); //1234 .함수안에 있는 것을 실행 한다.

function returnFunc(){
return 123;
}
//return 키워드를 사용해서 함수 밖으로 내보낼수 있고 할당해서 사용할수있다. 
반환값 바꿔가면 연습하기
let a = returnFunc();
console.log(a) //123
