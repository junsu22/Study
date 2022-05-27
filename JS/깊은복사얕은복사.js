import _ lodash from 'lodash'

//데이터 불변성
// 원시데이터 : String, Number, Boolean , undefined, null
// 참조형 데이터: Object, Array, Function

// let a = 1
// let b = 4
// console.log(a,b,a === b)
// b = a
// console.log(a,b,a === b)
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b,c,b === c)
//----------------------------------------------
//  메모리
// [   1   ] [   2   ][   3   ][   4   ]
                                // X               

//----------------------------------------------


let a = {k:1}
let b = {k:1}
console.log(a, b , a === b)
a.k = 7 //a 라는 변수를 숫자 7로 바꾸다
b = a
console.log(a,b,a === b)
a.k = 9 //a 라는 변수를 숫자 9로 바꾸다
console.log(a, b, a === b)
let c = b
console.log(a,b,c,a === c)

//한쪽을 수정하면 다른쪽 도 수정된다. 의도치 않게 다른곳을 수정되는 문제 발생.
//메모리 주소만 옮기는것 은 상관없지만 의도 한것이 아니라면 복사를 사용해야 한다
//얕은 복사 :  겉 표면 만 복사

const user = {
    name : 'Junsu',
    age : 99,
    emails : ['okss22s@hanmail.net']
}
const copyUser = _.cloneDeep(user)// 깊은복사
// const copyUser = {...user} //전개연산자 (얕은복사),속의 내용은 복사되지 않는다.
// const copyUser = Object.assign({}, user)
console.log(copyUser === user)


user.age = 20
console.log('user', user)
console.log('copUser', copyUser)

console.log('______________')
console.log('______________')

user.emails.push('kim@naver.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)


