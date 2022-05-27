function helloBasic<T, U>(message: T, comment: U): T {      ///T는 string , U는 number
    return message;
}
// 사용법
helloBasic<string, number>("junsu", 30); // 제한 걸림 . 문자만 와야 함.- 타입지정방식으로 check

helloBasic(30, 31);//가장 좁은 범위 타이핑으로 추론 . return type 30  T가 추론된다.- 지정하지 않으면 각각 추론
// => T는 30 , U는 31로 추론 할 것이다.

