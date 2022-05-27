// <타입스크립트의 타입 시스템>
// -컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
// -컴파일러가 자동으로 타입을 추론 하는 시스템

// 타입이란 해당 변수가 할 수 있는 일을 결정한다.
// <javascript>

// 코드 설명 : 
// f1 이라는 함수의 body 에서는 a를 사용할 것이다.
// a 가 할수 있는 일은 a 의 타입이 결정한다.
function f1(a) {
    return a;
}

// <함수사용법에 대한 오해를 야기하는 자바스크립트>
// JavaScript 
// (f2 실행의 결과가 NaN을 의도한 것이 아니라면)






// 이 함수의 작성자는 매개변수 a 가 number 타입이라는 가정으로 함수를 작성 했다.
function f2(a) {
    return a *30;
}

// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행
console.log(f2(10)); // 300
console.log(f2('junsu')) //NaN

// <타입스크립트의 추론에 의지 하는 경우>
// 타입스크립트 코드지만, 
// a의 타입을 명시적으로 지정하지 않은 경우 이기 때문에 a는 any로 추론된다.

function f3(a) {
    return a *30;
}
// 사용자는 a 가 any 이기 때문에 , 사용법에 맞게 문자열을 사용하여 함수를 실행
console.log(f3(10)) // 30
console.log(f3('junsu') +8 ) // NaN




// noimplicitAny 옵션을 켜면
// 타입을 명시적으로 지정하지 않은 경우, 타입스크립트 가 추론 중 `any`라고 판단하게 되면,
// 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.

// nolmplicitAny 에 의한 방어
// error TS7006 : 'a' implicitly has an 'any' type. 명시적으로 타입이 지정되지 않았다. any면 any라고 써! 라는 에러
function f4(a) {
    return a * 30;
}
// 사용자의 코드를 실행 할 수 없다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 한다.

console.log(f4(10));
console.log(f4('junsu')+7);







// <number 타입으로 추론된 리턴 타입></number>
// 매개변수의 타입은 명시적으로 지정 했다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number 로 추론된다.
function f5(a:number) {
    if(a > 0) {
        return a *15;
    }
}




// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행했다.
// 해당 함수의 리턴타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있다.
// 하지만 실제 undefined +5 가 실행되어 NaN이 출력된다.
console.log(f5(5)); 
console.log(f5(-5) + 5); //NaN
// undefined 인데 왜 number 추론이지?

// strictNullChecks 옵션을 켜면
// 모든 타입에 자동으로 포함되어 있는 `null` 과 `undefined` 를 제거해준다.





// <number | undefined 타입으로 추론된 리턴 타입>
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number | undefined 로 추론된다.

function f5(a:number) {
    if(a > 0) {
        return a *15;
    }
}
// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행 하였다.
// 해당 함수의 리턴타입은 number | undefined 이기 때문에,
// 타입에 따르면 이어진 연산을 바로 할 수 없다.
// 컴파일 에러를 고쳐야 하기 때문에 사용자와 작성자 논의 가 필요하다.



console.log(f5(5)); 
console.log(f5(-5) + 5); // error TS2532 : Object is possibly 'undefined'.








// <명시적으로 리턴 타입을 지정해야 할까?>
// 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정했다.
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생한다.

// error TS2366 

function f6(a: number): number {
    if( a > 0 ) {
        return a*10;
    }
}


// nolmplicitReturns 옵션을 켜게 되면
// 함수 내에서 모든 코드가 값을 리턴하지 않으면 , 컴파일 에러를 발생시킨다.
//<모든 코드에서 리턴을 직접해야한다>
// if 가 아닌 경우 return 을 직접하지 않고 코드가 종료된다.
// error TS7030
function f6(a: number) {
    if( a > 0 ) {
        return a*10;
    }
}


// < 매개변수에 object 가 들어오는 경우 >
// JavaScript 
function f7(a) {
    return `이름은 ${a.name} 이고 , 연령대는 ${Math.floor(a.age / 10) *10} 대 입니다.`
}

console.log(f7({ name: 'junsu', age:30 }))//이름은 junsu 이고 연령대는 30대 입니다.
console.log(f7('junsu')); //이름은 undefined 이고 연령대는 NaN 대 입니다.

// <object literal type>
function f8(a: { name : string; age:number }) : string {
    return `이름은 ${a.name}이고 , 연령대는 ${Math.floor(a.age) *10 }대 입니다.`;
}
console.log(f8({ name : 'junsu', age: 30})); // 이름은 junsu 이고 , 연령대는 30 대 입니다.


// console.log(f8('junsu')); //error TS2345



// 나만의 타입을 만드는 방법
interface PersonInterface {
    name : string;
    age : number;
}

type PersonTypeAlias = {
    name : string;
    age : number;
}

function f9(a: PersonInterface): string {
    return `이름은 ${a.name} 이고 ,연령대는 ${Math.floor(a.age / 10)*10} 대 입니다.`;
}
console.log(f9({ name: 'junsu', age:30}));

