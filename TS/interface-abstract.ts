abstract class User {

    constructor(
        protected firstName: string,    //protected 는 추상 클래스로부터 상속받은 클래스 들이 property 에 접근하도록 해줌.
        protected lastName: string      //private 를 사용하게 되면 firstName, lastName 이 접근 할 수 없다.
    ) { }
    abstract sayHi(name: string): string
    abstract fullName(): string
}

class Player extends User {//class Player User 상속
    fullName() { // fullName 구현
        return `${this.firstName} ${this.lastName}`
    }
    // sayHi 구현
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`   // =>추상 클래스 완성
    }
}
//추상클래스의 장점
//장점1. 어떻게 구현해야 할지 알려 주지는 않지만, 무엇을 구현 해야 할지는 알려준다.
// 


// 추상 클래스의 단점
// 단점1.javascript 에서는 abstract 개념이 없다.
// 단점2.new User()  와 같은 인스턴스를 사용할수 없다.


// interface 를 사용 할때다! 인터페이스는 자바스크립트로 넘어가면 사라진다.

interface User {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}
interface Human {
    health: number
}
class Player implements User, Human {
    // extends 를 사용하게 되면 자바스크립트가 된다. 
    // 자바스크립트에서 사용하지 않는implements 로 바꾼다.
    // implements 를 사용하게 되면 코드가 가벼워짐.
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) { }

    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

function makeUser(user: User): User {
    return "hi"
}
makeUser({
    firstName: "junsu",
    lastName: "las",
    fullName: () => "xxx",
    sayHi: (name) => "string"




})