//  어떤 타입도 가지지 않는상태를 의미 값은 없고 타입만 있다.
function returnVoid(message:string): void {
    console.log(message);

    return undefined;


}

const r = returnVoid('리턴이 없다.')
// 정리 : return 부분에 달아서 아무것도 하지 않겠다 . 명시, 표현하는 막는 행위.