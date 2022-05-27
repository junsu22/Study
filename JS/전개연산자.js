// 전개 연산자(Spread)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits)
//console.log('Apple','Banana','Cherry')
function toObject(a,b,...c) {
//나머지 들을 모두 c 로 받는다.(나머지 매개변수)
    // return {
        // a: a, //속성의 이름과 데이터 이름이 같으면 축약형으로 만들어줄수 있다.
        // // a,b,c 로 가능하다. 
        // b: b,
        // c: c
        return {a,b,c} //소괄호 안에서 객체데이터 정의 해서 축약형으로 가능하다

    }
// }
console.log(toObject(...fruits))

//쉼표로 구분된 아이템으로 배열 데이터로 전개되어 만들어진다.
// console.log(fruits[0],fruits[1],fruits[2]...)
//수동으로 할것을 전개연산자로 줄일 수 있다.

