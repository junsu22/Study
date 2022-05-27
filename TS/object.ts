// create by object literal
const person1 = {name: 'junsu', age: 30}; //<-object literal 타입

// person is not "object" type. 
// person is "{name: string, age:number}" type.


// create by Object.create
const person2 = Object.create({name: 'junsu', age :30}) // <-대문자 object , 전역 내장개체 준비가 된.
// union type 
// - primitive type 이 아닌것을 나타내고 싶을때 사용하는 타입

let obj: object = {}; // 보통 이런식으로 사용하지 않음

obj = {name: 'junsu'};
obj = [{name: 'junsu'}];
obj = 30; // Error
obj = 'junsu'; // Error
obj = true; //Error
obj = 100n; // Error
obj = null; //Error
obj = undefined; // Error


declare function create(o:object | null):void;

create({ prop:0 });

create(null);

create(30); //Error

create("string"); //Error

create(undefined); //Error

// Object.create
Object.create(0); //Error