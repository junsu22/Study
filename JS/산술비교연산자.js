// 산술 연산자
// 더하기 , 뻬기, 곱하기 , 나누기 , 나머지  연산자
console.log(1 + 2) // 출력 값 : 3  가독성을 높이기 위해 띄어쓰기 하는것이 좋다.
console.log(5 - 7) // 출력 값 : -2
console.log(3 * 4) // 출력 값 : 12 
console.log(10 / 2)// 출력 값 : 5
console.log(7 % 5) // 출력 깂 : 2 , 7을 5로 나눈 나머지 값 



// 할당 연산자
// 변수 선언시 변수 선언 할 키워드 , //const : 재 할당이 불가능하다 .
//  a 라는 변수에 다른 데이터를 할당하고 싶다면. let 키워드를 사용한다.
// const a = 2 // "="기호를 사용해 변수에 값을 할당해준다. "=" 는 할당 연산자.

let a= 2


//모든 산술 연산자가 가능하다 
a += 1 // a = a+1 과 같은 코드이다. 할당 연산자를 사용해 간소화 시켜 주었다.
a -= 1 // a = a - 1
a *= 1 // a = a * 1
a /= 1 // a = a / 1 
a %= 1 // a = a % 1
console.log(a)

// 비교 연산자 

// 예제 1
const a = 1
const b = 1 

console.log(a === b)  //"==="는 일치 연산자  true 가 출력이 된다. 일치 하지 않으면 false 출력

function isEqual(x,y){  // 일치 연산자를 활용하는 함수 만들어 보기 , 매개변수 x,y
    return x === y 
    // 반환  x와 y를 비교해서 결과를 반환 
}

console.log(isEqual(1, 1))
//(1과 1을 비교해서 함수가 실행된 true 값이 isEqual 로 반환 )
console.log(isEqual(2,"2"))
//촐력값은 false 이유,  숫자형과 문자형 이기 떄문이다.


//예제 2 
const  a = 1
const  b = 3
console.log(a !== b)
//출력값 true . 서로가 다른 연산자 .불일치 연산자. 