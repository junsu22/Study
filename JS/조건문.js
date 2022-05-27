조건문
조건의 결과 에 따라 다른 코드를 실행하는 구문 if,else

let isShow = true;
let checked = false;

if (isShow) { 
//isShow 자리에 조건
	console.log('Show!'); // Show!
}

if (checked) {
//false 조건이 부합하지 않기 때문에 출력이 되지않는다.
console.log('checked!');
}

정리 .참 -실행 
거짓- 실행 안함


let isShow = true;

if (isShow) {
console.log('Show!');
}else{
	console.log('Hide?');
}
hide 는 출력되지 않는다 . 
조건을 false 로 바꾸면 else 가 실행 된다.