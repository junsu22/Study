// ES6 classes

// const junsu = {
//     name: 'junsu',
//     normal() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// junsu.normal()
// junsu.arrow()


// ----> 간단한 로직으로 구현 
class User{
    constructor(first, last){
        this.firstName = first
        this.lastName = last

    }
    getFullName() {     //protoType 이 정의 되는 메소드. 
        return `${this.firstName} ${this.lastName}`
    }
}
// 리액트 때 자주 사용하는 문법



//생성자 이용
function User(first,last) {
    this.firstName = first
    this.lastName = last
}

User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
const junsu2 = new User('junsu2','kim')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')


console.log(junsu2)
console.log(amy.getFullName())  //FullName 으로 출력
console.log(neo.getFullName())
