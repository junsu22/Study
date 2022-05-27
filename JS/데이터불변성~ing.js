//데이터 불변성
// 원시데이터 : String, Number, Boolean , undefined, null
// 참조형 데이터: Object, Array, Function

let a = 1
let b = 4
console.log(a,b,a === b)
b = a
console.log(a,b,a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b,c,b === c)