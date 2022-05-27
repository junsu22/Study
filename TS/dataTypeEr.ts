// JavaScript
function add(n1,n2){
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    return n1 + n2;
}
const result = add(39,28);

// TypeScript
function add (n1: number, n2 : number) {
    return n1+n2;
}
const result = add(39,28)


//프로그램이 유용하려면 가장 간단한 데이터 단위로 작업 할수 있어야 한다,.
// numbers, strings , boolean  값 등등


// TypeScript 에서 JavaScript에서 기대하는것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공되었다.

// -----------------------------------------------------
// TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
// 사용자가 만든 타입은 결국 기본 자료형들로 쪼개진다.
// JavaScript 기본 자료형 들을 포함 
// ------------------------------------------------------
// ECMA Script 표준에 따른 기본 자료형은 6가지 
// (boolean , Number , String , Array . Null, undefined , symbol(Es6 추가) , Array )
// 프로그래밍을 도울 몇가지 타입이 더 제공된다.
// Any, Void ,Never, Unknown 
// Enum 
// Tuple : object 형
