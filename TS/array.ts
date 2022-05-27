// Array
// 원래 자바스크립트에서 array는 객체이다.
// 사용방법
// Array<타입>
// 타입[]
// 방법 1: let list: number[] = [1,2,3,"4"]; Error code -> "4"는 string
 let list: (number | string)[] = [1,2,3,"4"];

// 방법 2: let list: Array<number> = [1,2,3]; <---사용 자제 . 