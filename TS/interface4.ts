// function in interface 
// intereface 안에 function을 정의 하는 방법

interface Person4 {
    name: string;
    age: number;
    hello():void;
}

const p41: Person4 = {

    name: 'Junsu',
    age: 30,
    hello: function():void {
        console.log(`안녕하세요 . ${this.name} 입니다.`);
    }  
};


const p42: Person4 = {
    name: "Junsu",
    age:30,
    hello(this:Person4) {   // 타입스크립트에서는 첫번째 인자는 원래는 없는 거지만 만들어서 넣더라도 알아서 해석, 첫번째 자리에는 this 를 넣고 타입을 지정 (JS : bind, apply ) 
        // , 그것도 사용할 수 있어를 명시
        console.log(`안녕하세요 ${this.name} 입니다.`);
    },
}
// const p43: Person4 = {
//     name: "Junsu",
//     age:30,
//     hello: (): void => {
//         console.log(`안녕하세요 ${this.name} 입니다.`);
//     },
// }
// 에러 때문에 arrow function 은 사용 할수 없다.

p41.hello();
p42.hello();
// p41, p42 만 컴파일 후 실행
// npm i typescript -D
// code .
// npx tsc --init 
// npx tsc
// npx tsc
// node interface4.js
// 정상 출력 확인
// <결과>
// 안녕하세요 . Junsu 입니다.
// 안녕하세요 Junsu 입니다.