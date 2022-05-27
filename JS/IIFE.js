// 즉시 실행 함수
// IIFE, Immediate-Invoked Function Expression
// 즉시 실행함수를 사용하는 이유 : 다른코드에서는 사용하지 못하게 하는 의미

const a =7;
function double(){
    console.log(a*2)
}

double();

(function() {
    console.log(a * 2)
})



//이 방법 권장
(function() {
    console.log(a * 2)
}())
    
