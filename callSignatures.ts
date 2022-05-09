function add(a:number, b: number) : number {// argument type 을 지정해 주는 것만으로 return type을 number 로 받을 수 있다. 
    return a+b;
}

// 더 좋은 방법(arrow function)
const add = (a:number, b:number) => a+b; // add 함수는 number 를 반환

// call signatures
// 마우스를 올렸을 때 보게되는 것.
// 인자의 타입과 반환 타입을 알려주는 것.
// 함수의 call signature를 만드는 방법











// call signatures 
type Add  = (a:number, b:number) => number;
const add:Add = (a,b) => a+b;
// type 을 number 로 지정해줄 필요가 없어졌다.
// typescript 가 add  의 타입을 알고 있다.