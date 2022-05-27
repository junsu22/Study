// getter setter
class Person {
    public constructor(public _name: string ,private age:number){}       
    //private 설정 시 출력 되지 않는다.
    get name() {
        // 
        console.log("get")
        //위의 데이터를 가져다 쓴다 . 충돌나니 public name 에 언더바 붙였음
        return this._name +"Kim";
    }

    set name(n: string) { //set 은 return 할 필요 없음 , set 부분을 주석  처리 하면 수정 시 컴파일 오류가 발생하도록, 읽기전용으로 한계를 줄수 있다.
        console.log("set")
        this._name = n;
        // 아래 주석 해제
    }
}
const p1: Person = new Person("Anna",30);
console.log(p1.name);//get 가져오다 - get 을 하는 함수를 getter
p1.name = "junsu"; 
console.log(p1.name);//다시 한번 출력 

// set 새로 설정하다 - set 을 하는 함수를 setter







