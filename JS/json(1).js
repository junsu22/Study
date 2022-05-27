import myData from './myData.json'

console.log(myData)

const user ={
    name : 'JUNSU',
    age: 99,
    emails:[
        'okss22s@hanmial.net',
        'kim@naver.com'
    ]
}

console.log('user',user)


const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)
// JSON 포맷 - 문자데이터로 관리 된다 .js 내에서 json 의 형태로 문자 형태로 만들어 활용한다.
const obj =  JSON.parse(str)// 실제 자바스크립트 데이터 처럼 변경이 되려면 parse, 반대의 경우라면 stringify
console.log('obj',obj)

