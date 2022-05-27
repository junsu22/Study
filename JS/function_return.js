/return 키워드를 사용해서 함수 밖으로 내보낼수 있고 할당해서 사용할수있다. 
반환값 바꿔가면 연습하기
let a = returnFunc();
console.log(a) //123


//함수 선언!
function sum(a,b) {
//a 와 b는 매개변수(Parameters)
	retrun a + b;

}

//재사용 
let a = sum(1,2) // 1과 2는 인수 (Arguments) 
//1과 2가 a,b 에 대입되서 결과는 3
let b  =  sum(7,12);

//7과 12가 a,b 에 대입되서 결과는 19
let c = sum(2,4);

//2와 4가 a,b 에 대입되서 결과는 6
console.log(a,b,c); //결과 값은 :  3,19,6 
