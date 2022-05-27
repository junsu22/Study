function user(first, last){
    this.firstName = first
    this.lastName = last
}
user.prototype.getFullName = function(){
//prototype : 속성 중 하나
return `${this.firstName} ${this.lastName}`
}


const junsu = new user('junsu','Kim') //매개변수에서 first 와 last 로 받는다.
const amy = new user('Amy','Clarke')
const neo = new user('Neo', 'Smith')
// const junsu, amy , neo 는 인스턴스 들이다.

console.log(junsu.getFullName()) // getFullName 메소드 실행, 한번만 만들어진 user.prototype.getFullName = function() 를 참조한다. 
console.log(amy)
console.log(neo)
// 콘솔창 
// user {firstName: 'junsu', lastName: 'Kim'}----------user 라는 이름의 객체 데이터 출력
// firstName: "junsu" -----------------속성으로는 firstName 멤버
// lastName: "Kim" --------------------속성으로는 lastName 멤버


//new 라는 키워드를 통해 user 라는 함수를 실행 하게 되었다. 이때 실행한 user 라는 함수를 생성자 함수라고 부른다
//생성하는 함수. 객체데이터 가 생성되었다. 

// {} 중괄호를 열고 닫는 행위를 복잡하게 처리해야하는데, 손쉽게 {} 를 이용해 만드는데, 리터럴 방식이라고 한다.
//{},[] 리터럴 방식 손쉽게 데이터를 생성할 수 있다.


//a.includes(4) - 4가 포함된 데이터 찾기 