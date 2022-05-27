//자바스크립트의 클래스 
//다른 언어의 클래스라고 말하기는 차이점이 있다.

const junsu = {
    firstName : 'junsu',
    lastName : 'kim',
    getFullName : function () {
        return `${this.firstName} ${this.lastName}` // this. 는 junsu다 .. junsu 는 언제든지 바뀔수 있기 때문에 this 를 사용 했다.
    }
}
console.log(junsu.getFullName())


const amy = {
    firstName : 'Amy',
    lastName : 'Clarke',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(amy)
console.log(amy.getFullName() // getFullName 메소드 실행
)

const neo = {
    firstName : 'Neo',
    lastName : 'Smith',
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(neo)