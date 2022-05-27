let user = {
    name: 'HEROPHY',
    age: 85

};
console.log(user);
console.log(user.age)
console.log(user.name);


//변수 
//데이터를 저장하고 참조(사용)하는 데이터의 이름
//let,const

//재사용이 가능!
//변수 선언!
let a=2;
let b = 5;
console.log(a+b); //7
console.log(a-b); //-3

////값 데이터의 재할당 가능!
let a = 12; 
console.log(a) //12
a= 999;
console.log(a)  ; //999

//값 (데이터) 재할당 불가!
const a =12;
console.log(a) ; //12

a=999;
console.log(a)  // TypeError : Assignment to constant variable.

//=> 재할당 이 불가 하면 const 재할당이 가능 하면 let
//var 사용 권장x
