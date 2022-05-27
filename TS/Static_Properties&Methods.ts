
//Static Properties & Methods
class Person {
    // Static Properties 설정
    private static CITY = "Daejeon";
    //Static Methods
public hello() { //static 을 붙이게 되면 메소드로 취급을 안한다.
    console.log("안녕하세요", Person.CITY)
    }
public change(){
    Person.CITY = 'LA'; 
    }
}
const p1 = new Person();
p1.hello();
const p2 = new Person();    
p2.hello();
p1.change();
p2.hello(); //-> 바뀐 데이터 가 출력.
