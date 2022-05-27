class Person {}
//클래스를 만들기 위해 소문자로 class , 
//클래스이름은 Person 으로 지정해주었다.
//클래스의 앞글자는 대문자, 중괄호를 넣어줌으로 가장 간단한 클래스를 
//만드는 것이다.


//오브젝트 만들기
const p1 = new Person();
//new 를 사용해서 오브젝트가 p1 이라는 변수에 할당

console.log(p1);

//실행 방법
//실행시키기 위해 터미널을 연다.
//자바스크립트로 변환
npx tsc //=>compile

만들어진 js 를 노드로 실행
node example.js

// es 버젼에 따라 코드가 변환 되었을것.
// js 파일을 보고 어떻게 변했는지 확인
// 이유: 클래스는 es6 부터 추가 되었기 때문에, 5버젼이라면 
// 코드를 다른것으로 변환 하였을 것이다.
// es 버젼확인은 tsconfig 를 확인.
// 클래스가 없던 시절의 버젼이었다면 function 으로 변환 되었을것.






class Person {}
const p1 = new Person("JUNSU"); //오류가 난다.
console.log(p1);



//이렇게 변환
class Person {
    name;   //property 를 가지게 된다.
    constructor(name:string){  //<-constructor 를 이용하면 함수를 구현한다.구현하면서 밖에서 들어오는 데이터는 string  이다 설정을 해줄 수 있다.()생성자
        this.name = name;//<- this는 생성된 오브젝트 자신을 가르키게- 된다. , this.name <- name 의 property를 가진다는 설정을 가지지 않았다.
        // 방법은 클래스 중간에 name; 을 적어준다.
    }
}

//정리 
// class 키워드를 이용하여 클래스를 만들 수 있다. 
// class 이름은 보통 대문자를 이용한다.
// new 를 이용하여 class 를 통해 object 를 만들 수 있다.
// constructor 를 이용하여 object를 생성하면서 값을 전달 할 수 있다.
// this 를 이용해서 만들어진 object를 가리킬수 있다.
// JS로 컴파일 되면 es5 의 경우 function 으로 변경 된다.