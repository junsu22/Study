
//1
function sum(x, y){ // 인수값을 (첫번째 데이터를)x와 (두번째 데이터를)y 로 받겠다.매개변수의 이름은 자유롭게 선언할수있다.
    console.log(x+y)
}

sum(1, 3)   //4 출력
sum(4, 12)  //16 출력




//2 return 키워드 사용
function sum(x, y){
    return x+y
}
const a = sum(1,3)
const b = sum(4,12)
console.log(a) // 4
console.log(b) // 16
console.log(a+b)//20



//3 함수를 직접 실행
function sum(x,y){
    return x+y
}
const a = sum(1,3)
const b = sum(4,12)
console.log(sum(1,3))
console.log(sum(4,12))
console.log(sum(1,3)+sum(4,12))

//여러번 실행하는것이 효율적이지 않다. 자원낭비
//함수가 호출되는 횟수를 최대한 줄여주는 것이 좋다.
//반복적으로 사용하느냐, 사용하지 않느냐.

//함수가 반복적으로 사용될때는 변수에 담아서 사용 const a = sum(1,3)
//함수가 단일적으로 사용될때는 그대로 결과가 사용되는것에서 호출 하는것이 효과적 console.log(sum(1,3))




function sum(x,y){
    console.log(x) //x 값인 출력값 1이 출력
    return x+y
}

sum(1,3)

// console.log 부분을 잘라서 return 아래에 붙이게 되면



function sum(x,y){
    return x+y
    console.log(x) //콘솔 값이 출력되지 않는다.
}

sum(1,3)


// 의미
// 의미1.함수내부에서 리턴키워드를 사용하는 것은 뒤에 있는 어떠한 내용이 <return(x,y) y값>이 함수 밖으로 반환
// 의미2.리턴 키워드가 사용된 부분에서 함수가 종료됨을 의미. 그이하의 코드는 실행 하지 않는다.

// 활용방법
//if 조건문 추가

// 활용 1 .함수 종료
function sum(x,y){
    if(x < 2){ //2라는 값이 2보다 작으면 
        return  //함수를 종료. 아래부분은 실행되지 않음
    }
    return x+y
}
console.log(sum(1,3)) //undefined (return 뒷부분에 아무것도 없기 때문에) return 123 을 할 경우 123 출력. 
// 여기서는함수종료의 의미 이므로 리턴 키워드 뒤에 아무것도 안붙이기로.




// 활용 2. 다른 로직 동작 
function sum(x,y){
    if(x < 2){  //(2) 7이 2 보다 작지 않기 때문에
        return  //(3) 이 부분이 실행되지 않고
    }
    return x+y  //(4) 이 부분이 실행되서
}

console.log(sum(7,3)) //(1) x값을 7을 주게되면 

// (5)결과는 10



//일괄적 관리 arguments
function sum(){
    console.log(arguments) //배열에 값이 들어간다.
    return arguments[0] + arguments[1] // [0] = 7 이 들어감.  [1] = 3이 들어감
}

console.log(sum(7,3))
// ↓ 이름을 지정해서 받는 인수가 어떤의미 인지 명시 권장.

function sum(x,y){
    return x + y
}

console.log(sum(7,3))

//정리 : 인수가 많은경우 매개변수 이름을 일일이 지정하기 힘든경우 arguments 로 일괄 관리 할수 있다.