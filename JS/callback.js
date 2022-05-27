// 콜백 (callback)
//함수의 인수로 사용되는 함수
// 인수로 사용되는 함수는 callback 이다 ★
// setTimeout(함수, 시간) <-시간 callback

function timeout(cb) {
    setTimeout(() => {
        console.log('junsu')
    cb() //cb 실행 위치를 보장하는 용도로 활용이 된다.
    },3000)
}

timeout(() => {
    console.log('kim')
})