// TypeScript 는 나의 코드를 보고 알아낸다.
// placeHolder 를 발견하는 타입을 대체

type SuperPrint  = <T>(a: T[]) => T //Generic T           <T>(a: T[]) => T 이런식으로사용 할수는 없다.요구한대로 signature 를 생성해주는 도구로 이해.
// T는 배열에서 오고, 함수의 첫번째 파라미터에서 오는 것이다. 타입스크립트에게 알려주는 것.


// type SuperPrint  = <T,M>(a: T[], b: M[]) => T //제네릭 추가 방법 
// typescripts는 제네릭 이 처음 사용되는 지점을 기반으로 이 타입이 무엇인지 알게 됨.

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1,2,3,4]) // 타입스크립트 는 T를 number 로 대체
// const a = superPrint([1,2,3,4],"x") //두 번째 argument가 함수에서 제네릭 으로 되어있다는 걸 알게 됨. 순서를 기반으로 알게됨.
const b = superPrint([true, false, true])
// const b = superPrint([true, false, true],1)
const c = superPrint(["a","b","c"])
// const c = superPrint(["a","b","c"],false)
const d = superPrint([1,2,true,false,"Hello"])
// const d = superPrint([1,2,true,false,"Hello"],[])


