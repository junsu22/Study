class Person{
    name: string = "Junsu"; 
    // 직접 넣는방법  , 혹은 constructor 를 사용하지 않는다면 , 타입 지정해준것만으로 에러가 사라지지 않는다,
    age!: number;

constructor(age?: number) {
    if (age === undefined) {
        this.age = 20;
    } else {
        this.age = age;
    }
}


async init() {  //async 사용 할 수 없다.

}
// constructor(age: number) {
    // this.age = age;
// }

const p1: Person = new Person(30);
await p1.init();
const p2: Person = new Person();
console.log(p1);

}
//age! : ! 를 사용할 수 있는데 , 개발자가 정말 생각 잘 하고 써야 한다. 치명적인 런타임 에러를 일으 킬 수 있다.




//  생성자 함수가 없으면 , 디폴트 생성자가 불린다.
//  프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
//  static 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
//  프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 ! 를 붙여서 위험을 표현한다
//  클래스의 프로퍼티가 정의 되어 있지만 , 값을 대입하지 않으면 undefined 이다. 
//  생성자에는 async를 설정 할 수 없다.
