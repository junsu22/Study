//서브타입
//sub1 타입은 sup1(super) 타입의 서브 타입이다.
let sub1: 1= 1;
let sup1: number = sub1;
// sub1 = sup1; error   type number 는 1에 넣을 수 없다.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
// sub2 = sup2; error   sub2는 sup2의 하위 타입 . sup2에는 sub2을 할당할수 있는데 , 반대의 경우는 안된다.


// sub3 타입은 sup3타입의 서브 타입이다.
let sub3: [number,number] = [1, 2]; //tuple
let sup3: number[] = sub3;
// sub3 = sup3; error   sup3 에는sub3 을 넣을 수 있지만, sub3 에는 sup3 을 넣을 수가 없다. sup 3 이 더 크기 때문


// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;   
let sup4: any = sub4;
sub4 = sup4;
//(any) 전부다 error 를 발생시키지 않음. any 라서 . 변칙적인 상황

//  sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5; error   sub5는 never니까 number에 포함되는데 문제는 없다. 반대의 경우 당연히 문제가 발생한다.

class Animal {}
class Dog extends Animal {
    eat() {}
}


let sub6: Dog = new Dog();
let sup6: Animal = sub6;
// sub6 = sup6; error
// sub6 타입은 sup6타입의 서브 타입이다.  상속 개념 , Dog 이 Animal 하위 개념. 반대의 경우 허용 안됨. 



// 1. 같거나 서브타입인 경우, 할당이 가능하다. => 공변

// primitive type 
let sub7: string = '';
let sup7: string | number = sub7;
// sub7은 string 인데 sup7은 string , number 의 조합 (더 넓은 개념). 


// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: { a: string; b: number } = { a: '', b:1 };
let sup8: { a: string | number; b: number } = sub8;// a끼리 비교하고 b끼리 비교를 했을때, a 가 더 넓기 때문에 sub8을 sup8에 넣을 수 있는것이다.

// array - object 와 마찬가지
let sub9: Array<{ a: string; b: number }> = [{ a:'', b:1}]; //(1)Array 안에 들어가 있는 <{ a: string; b: number }>부분이
let sup9: Array<{ a: string | number; b: number}> = sub9;  //(2)<{ a: string | number; b: number}> 보다 sub type이면 넣는데 어려움이 없다. 이 규칙을 공변이라고 한다. 


// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우 , 할당이 가능하다.  => 반병
class Person {}
class Developer extends Developer {
    coding() {}
}

class StartupDeveloper extends Developer {
    burning() {}
}

function tellme(f: (d:Developer) => Developer) {} 
// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
    return new Developer();
}) 

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pTod(d: Person ): Developer {
    return new Developer();
})

// Developer => Developer 에다가 StartDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
    return new Developer();
});

//strictFunctionTypes 옵션을 켜면
// 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우, 에러를 통해 경고한다.