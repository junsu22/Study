// any 가 주는 불안정함을 조금이나마 해소 하기 위해 나온것.
// 응용 프로그램을 작성할 때는 모르는 변수의 타입을 묘사해야 할 수도 있다.
// 이러한 값은 동적 컨텐츠(예: 사용자로 부터 또는 API의 모든값을 의도적으로 수락하기를 원할 수 있다)
// 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로
// unknown 타입을 제공한다.

declare const maybe: unknown;

const aNumber: number = maybe;


if(maybe === true){
   const aBoolean: boolean = maybe;
       // const aBoolean: string = maybe;

}


if (typeof maybe === 'string') {
    const aString: string = maybe;

    // const aBoolean: boolean = maybe;
} 


// Typescript 3.0 부터 지원
// any 와 짝으로 any 보다 Type-safe  한 타입
// - any 와 같이 아무거나 할당 할 수 있다.
// - 컴파일러가 타입을 추론 할 수 있게끔 타입의 유형을 좁히거나
// - 타입을 확정해 주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
// - unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
// - 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API 에 사용할 수 있을 것 같다.
// - any unknown 을 쓰는 노력이 필요.



