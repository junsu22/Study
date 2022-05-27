//구조 분해 할당
// 비구조화 할당

const user = {
    name : 'junsu',
    age: 50,
    email: 'okss22s@hanmail.net',
    address: 'Daejeon'
}


const { name: junsu, age, email, address='Korea'} = user
// 객체 데이터를 구조 분해 해서 사용할수 있다.
// 속성이 많을때, 필요한 부분만 꺼내 사용할수있다는 것이 장점.
// E,g, user.address

console.log(`사용자 이름은 ${name} 입니다.`)
console.log(`${junsu}의 나이는 ${age}세 입니다.`)
console.log(`${junsu}의 이메일 주소는 ${email}입니다.`)
// console.log(address)//정의되지 않은 속성은 꺼내와도 없다. undefined

const fruits = ['Apple', 'Banana', 'Cherry']
const [a,b,c,d] = fruits
console.log(a,b,c,d)
//순서대로 꺼내온 데이터 
//a= Apple , b = 'Banana' c= 'Cherry' , d= undefined

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [, , b] = fruits
// console.log(b) 
// ----------->Cherry
