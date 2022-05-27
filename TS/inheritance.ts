// 상속(inheritance)
class Parent {
    constructor(protected _name: string, private _age : number){}  //상속관계에서만 접근 가능
    //protected : 외부에서 접근 불가.

    public print(): void {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`)
    }

    protected printName(): void {
        console.log(this._name)

    }
}

// const p = new Parent("junsu",30); 
// p.print();  

class Child extends Parent {    //Child 에서도 같은 형태로 불러주어야 한다.
//    protected _name = "junsu Jr.";   //public 도 가능하다. 한꺼번에 오버라이드(덮어씌우다)
   
    public gender = "male";

    // constructor(age: number) {}//상속을 받은 child의 경우에는 parent 를 상속받았을 경우에 , parent 의 생성자를 호출 해야한다. super, 부모의 생성자 처럼 맞춰 줘야 한다.

    constructor(age: number) {
        // 룰 : constructor 안에서 this.?? 를 호출하려 할때는, 무조건 이 위치가 아니라 슈퍼 먼저 호출 해줘야 한다.
        // 자식에선 항상 super 를 먼저 호출 해야한다.
        super("junsu Jr.",age)
        this.printName();
    }


}

// new Child("son",5);

// Parent 와 마찬가지로 p._name,age  c._name,age 는 안되는데 , print 는 가능
const c = new Child(5);
c.print()

