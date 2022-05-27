const user = {
    name:'junsu',
    age:80,
    email:'okss22s@hanmail.net'
}

const keys = Object.keys(user) // 새로운 배열을 만들어주는 개념
console.log(keys)
// ['name','age','email']

// keys : 정적메소드 중 하나
console.log(user['email'])
// keys = user 라는 객체데이터 
const values = keys.map(key => user[key])
//콜백 함수를 반복적으로 실행 하는데 배열데이터의 아이템이 3개 들어있으니
//3번 실행되는데 매개 변수로 들어간다. keys = 변경 가능하다.
//배열로 만들어 반환하는 기능
//values 에 값을 받아서.출력
console.log(values)

