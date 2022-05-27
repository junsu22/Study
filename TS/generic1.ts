function helloString(message: string) {
    return message;

}
function helloNumber(message: number): number {
    return message;
}

// 더 많은 반복된 함수들..

function hello(message: any): any {
    return message;
}

console.log(hello("junsu").length);
console.log(hello(20).length);

function helloGeneric<T>(message: T): T {
    return message;

}

console.log(helloGeneric('junsu').length);
console.log(helloGeneric(20));
console.log(helloGeneric(true));

// T를 변수 처럼 사용 할수 있다





