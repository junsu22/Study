// 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
//프리미티브 형 내장 함수를 사용하는 것은 자바스크립트 처리 방식 덕분
// (ES2015기준) 6가지
// boolean , number, string , symbol(ES2015), null, undefined

let name = "junsu";
name.toString();

// literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
// 또는 래퍼 객체로 만들 수 있다.
new Boolean(false); // object
new String('world'); // object
new Number(10); // object

// TypeCasing 
// Type Script 의 핵심 primitive types 는 모두 소문자
// Number, String , Boodlean , 또는 Object 가 소문자와 동일 하다고 생각할 수도 있다.
// 그러나 이러한 유형은 언어 primitives 를 나타내지 않으며, 타입으로 사용해서는 안된다.

function reverse (s:String): String {
    return s.split("").reverse().join;
}
reverse ("text");
// 대신, number, string, boolean,object symbol 을 사용
function reverse(s: string): string {
    return s.split("").reverse().join();
}

reverse("text2")