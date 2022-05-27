// 화살표  함수
// () =>{} vs function() {}

// const double = function (x) { //(1) 밖에서 x의 값을 받아서
//     return x*2 // (2) x 값에 *2를한다음 return 을 통해 내보낸다.
// }   //(4)7이 x 에 들어가고 반환하니 결과가 14 가 나온다.
// console.log('double:',double(7))//(3)double 이라는 데이터, double 이라는 함수 . 함수부분에는 (7이라는 인수값이 들어있다.)


// // 동일 한 로직 . 

// const doubleArrow = (x) => {    //function 이 빠졌고, 소괄호, 중괄호 사이에 앞과 뒤에 띄어쓰기 한 화살표 모양 입력 
//     return x*2
// }
// console.log('doubleArrow', doubleArrow(7))


const double = function (x,y) {
    return x * 2
    
}
console.log('double:', double(7))

const doubleArrow = x => ({ name : 'junsu' })
console.log('doubleArrow',doubleArrow(7))
