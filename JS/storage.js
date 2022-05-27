const user ={
    name : 'JUNSU',
    age: 99,
    emails:[
        'okss22s@hanmial.net',
        'kim@naver.com'
    ]
}

// localStorage.setItem('user', JSON.stringify(user))
// //자바스크립트 문자화
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')


const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age =22
console.log(obj)
localStorage.setItem('user', JSON.stringify)