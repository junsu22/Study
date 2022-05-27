//this
//일반 (Normal) 함수는 호출 위치에서 따라 this 정의!    (호출 위치)
//화살표 (Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의   (함수 범위)

function User(name) {
    this.name = name
}
User.prototype.normal = function () {
    console.log(this.name)
}

User.prototype.arrow = () => {
    console.log(this.name)
}

const junsu = new User('junsu')

junsu.normal()
junsu.arrow()

//예제
const timer ={
    name: 'junsu!',
    timeout: function () {
        //setTimeout(함수,시간)
        setTimeout(() => {
            console.log(this.name)
        },2000)
    }
}
timer.timeout()
