function error(message: string): never {
    throw new Error(message);


}

function fail() {
    return error("failed");

}

function infiniteLoop(): never {
    while(true){} 

    
}

// never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당 할 수 있다.
// 하지만 never 에는 그 어떤 것도 할당할 수 없다.
// any 조차도 never에게 할당 할 수 없다.
// 잘못된 타입을 넣는 실수를 막고자 할때 사용하기도 한다.

let a: string = 'hello';

if (typeof a !== 'string'){
    let b:never =a;

}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never;



// *********************************************************************************
function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while (true) {}
}

declare const a: string | number;

if(typeof a ≠ "string") {

    a;
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never;
const b: Indexable<{}> = '';