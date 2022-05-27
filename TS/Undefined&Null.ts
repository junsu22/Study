let u: undefined = undefined;
// undefined , null 이외에 할수 없다.
let n: null = null;
// TypeScript 에서 undefined 와 null 은 실제로 각각 undefined 및 null 이라는 타입을 가진다.
// void 와 마찬가지로 그 자체로는 유용하지 않는다.
// 둘 다 소문자 만 존재한다.
// null 에 number 와 undefined 가  함께 있는 표현을 해주기 위해 union type을 이용해야 한다. 

// tscoonfig file ->"strict" :true 옵션을 전부 켠다로 해석 .
// let Myname: number = undefined;--------> Error
//  let u: undefined = null; -------------> Error
let v: void = undefined; // <------------------오로지  undefined 만 들어갈수있다. 
// void 는 타입으로만 존재한다 값이 들어가야 한다. 

// -------------------------------------------------------------------------- 
//let union: string = null; strict option true 이기 때문에 사용할 수 없는 문법
let union: string | null = null;  //<----이렇게 수정해 주어야 한다. 이것이 유니온 문법 string 도 넣을수있고 null 도 넣을 수 있게 된다.

union = "Mark";


//< JavaScript 에서의 null >
// - null 이라는 값으로 할당된 것을 null 이라고 함.
// - 무언가 가 있는데 , 사용할 준비가 덜 된 상태
// - null 이라는 타입은 null 이라는 값만 가질 수 있음
//  런타임 에서 typeof 연산자를 이용해서 알아내면, object 이다.
// ex)
console.log(n);  // null
console.log(typeof n) // object

//< JavaScript 에서의 undefined >
// - 값을 할당하지 않은 변수는 undefined 라는 값을 가진다.
// - 무엇인가 아예 준비가 안된 상태
// - object 의 property 가 없을 때도 undefined.
// - 런타임에서 typeof 연산자를 이용해서 알아내면, undefined 다.
let u: undefined = undefined;

console.log(u); // undefined
console.log(typeof u); // undefined

// 절대 이것들 없이는 코딩을 할 수 없다!
