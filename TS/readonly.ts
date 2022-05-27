// get 만 할수 있는.
class Person {
    //선언부에서 , 수정을 못하게 에러를 발생시켜 다른 개발자가 코딩을 할때 도움을 준다.
    public readonly name: string = "Mark";
    private readonly country: string = "Korea";
    public constructor(public _name: string ,private age:number){
        this.country = "Korea";

    }       
    //private 설정 시 출력 되지 않는다.
    hello() {
        this.country = "China";
    }
  
}
const p1: Person = new Person("Anna",30);
console.log(p1.name);//get 가져오다 - get 을 하는 함수를 getter
p1.name = "junsu"; 
console.log(p1.name);//다시 한번 출력 

// set 새로 설정하다 - set 을 하는 함수를 setter







