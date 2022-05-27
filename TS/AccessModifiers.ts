// 접근 제어자

class Person {
    public name: string = 'junsu';  //public 으로 바꿔준다 
    public _age!: number;            //public   _ 언더바를 붙여놓으면 밖에서 호출하지 말아라. 암묵적인 약속
    // private property 나 method 에는 "_"를 붙여주는 습관 
    
    public constructor(age:number){ //public, private 
    if(age=== undefined){
        this.age = 20;
        }else{
            
        }       
    }
    public async init() {}  //public

}
    
const p1:Person = new Person(30);
console.log(p1)

// 접근 제어자에는 public , private protected 가 있다.
// 설정하지 않으면 public 이다.
// 클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메소드)설정 가능하다.
// private 으로 설정하면 클래스 외부에서 접근할 수 있다.
// 자바스크립트에서 private 지원하지 않아 오랫동안 프로퍼티나 메소드 이름 앞에 _를 붙여서 표현했다.