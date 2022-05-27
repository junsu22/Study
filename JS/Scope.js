// scope : 범위 (변수에 접근 할 수 있는 범위)

// 2가지 타입 
// 전역(global), 지역(local)  

var a = 1; //전역 스코프

function print() { // 지역 (함수) 스코프
var a = 111;
console.log(a);

}

print() ; // 111


console.log(a); // 1


// 함수 scope 에서 사용하고자 하는 변수가 없다면 
// Scope 체인을 통해 해당 변수를 찾게됨 . 


// scope 안의 변수를 지우게 되면 1이 출력됨.