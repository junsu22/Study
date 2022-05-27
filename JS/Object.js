// API
//Object.assign 
//정적 메소드 . Static

const userAge = {
    //key : value
    name : 'junsu',
    age: 99
}


const userEmail = {
    name : 'junsu',
    email : 'okss22s@hanmail.net'
}


const target = Object.assign(userAge, userEmail)
// const target = Object.assign({}) - f/f 같은 데이터가 아니다.
// const target = Object.assign({},userAge) - f/f 같은 데이터가 아니다.
// 특정한 객체를 복사하는 용도

console.log(target)
console.log(userAge)
console.log(target === userAge)


const a = {k:123}
const b = {k:123}
console.log(a === b)


// 참조형 데이터?? target 과 userAge 같은 곳을 바라보고있다..?
// const a , const b 는 다른 데이터다.

// {name: 'junsu', age: 99, email: 'okss22s@hanmail.net'}
// {name: 'junsu', age: 99, email: 'okss22s@hanmail.net'}
// true
// false
