// // symbol
// // -ECMA Script 2015의 Symbol
// // -new Symbol 로 사용할 수 없다.
// // -Symbol 을 함수로 사용해서 symbol 타입을 
// // 만들어 낼수 있다.

console.log(Symbol('pooh')=== Symbol('pooh'));
console.log(Symbol('pooh'));


// //  프리미티브 타입의 값을 담아서 사용한다.
// // 고유하고 수정 불가능한 값으로 만들어 준다.
// //  그래서 주로 접근을 제어하는데 쓰는 경우가 많았다.

// let sym = Symbol();
// let obj = {
//     [sym]: "value"
// };

// console.log(obj[sym]); //"value"

console.log(Symbol("Pooh")=== Symbol("Pooh"));
const sym  = Symbol();

const obj = {
    [sym]: "value",

};
obj[sym]
    
//  함수를 사용할 때는 대문자 심볼
//  타입을 사용할 때는 소문자 심볼 사용
