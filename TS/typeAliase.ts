// 타입 별칭 (별명)
// interface 랑 비슷해 보인다.
// Primitive , Union Type, Tuple, Fuction
// 기타 직접 작성해야 하는 타입을 다른 이름을 지정할 수 있다.
// 만들어진 타입의 refer로 사용하는것이지 , 타입을 만드는 것은 아니다.

// Aliasing Primitive
type MyStringType = string;
const str = 'world';
let myStr: MyStringType = 'hello';
// 별 의미가 없다..구조가 같기 때문에 다른이름으로 부르고 싶을때..?

let person: string | number = 0;
person = 'junsu';
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = 'Anna';
// 유니온 타입은 A도 가능하고 ,B도 가능한타입 , 길게쓰는걸 짧게


// Aliasing Tuple
let person: [string, number] = ['junsu', 35];
type PersonTuple = [string, number];
let another: PersonTuple = ['Anna', 24];
// 튜플 타입에 별칭을 줘서 여러 군데에서 사용할 수 있게 한다.

// Aliasing Function
type EatType = (food: string) => void;  //interface 와 Aliasing 헷갈림, 어떤타입이 그 따입으로서 목적이 명확하면 interface, 가리킬뿐 Aliase ,본인만의 기준을 가지고 의도를 명확히 해주는게 좋다. 

