// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

setTimeout(function () {
    console.log('junsu')
}, 3000) //1000ms = 1s , 3초 뒤에 실행


//Arrow 사용
setTimeout(() => {
    console.log('junsu')
},3000)

// 타이머 함수 종료
const timer = setTimeout(() => {
    console.log('junsu')
},3000)

const h1El = document.querySelector('h1') // h1 를 클릭하면
h1El.addEventListener('click', () => { //멈춘다. 기다려도 콘솔에 아무것도 나오지 않는다.
    clearTimeout(timer)
})




const timer2 = setInterval(() => {
    console.log('junsu')
},3000)

const h1El2 = document.querySelector('h1')
    h1El2.addEventListener('click',() => { // h1 을 눌렀을때 숫자가 더 올라가지 않는다.
        clearInterval(timer2)
    })
