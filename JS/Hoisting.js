// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 과정

// const a = 7

// const double = function () {
//     console.log(a * 2)
// }

// double()

//코드가 복잡해지면 많은 로직을 거쳐야 한다. 
//선언부를 유효범위 최상단으로 올려 어디서 부터 실행이 되는지 보기 위함. 로직 추측
//함수가 아래에 있어도 정상적으로 출력이 된다.

const a = 7

double()
function double() {
    console.log(a * 2)
}

