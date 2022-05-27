// 무심코 any 를 쓰면 전체적인 타입 시스템에 문제가 발생할수 있기 때문에
// 정확히 알고 사용해야 한다.

function returnAny(message): any {
    console.log(message);



}
const any1 = returnAny("리턴은 아무거나")
//return 이 any 가 지정된것은 딱히 제약을 주지 않는다.

any1.toString(); 
// 어떤타입이어도 상관이 없는 타입이다. 최대한 사용하지 않는것이 안전하다.
// 쓸수 밖에 없는 경우 있다. message 는 문자도 아니고 숫자도 아닌 상황 any 상황
// 모르겠다는 판단.  
// function returnAny(message:any): any  로 수정하면 error 가 사라진다. 
// 아무값이나 넣을 수 있다면 any 를 쓴다. 
// any 는 계속해서 개체를 통해 전파한다. 결국 편의는 타입 안정성을 잃는 대가로 온다는 것을 기억해야 한다.


let looselyTyped : any ={} ;


const d = looselyTyped.a
// const d = looselyTyped.a.b.c... 오류가 나지 않는다. 안정성을 잃을 수 있다. any는 존재 할 수 밖에 없다.
// 누수를 막는 지정을 만드는것이 중요 하다.
function leakingAny(obj:any) {
    const a = obj.num;
    const b = a+1;
    return b;

}

const c = leakingAny({ num:0 })
c.indexOf("0"); // number라고 규정하는 순간 누수가 막힌다. 누수를 막는 방식 . 타입가드