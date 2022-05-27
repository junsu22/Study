// 변수 유효범위 (Variable Scope)
// var, let, connst
// var 를 사용할수는 있지만 가능한 지양하고 let, const 사용
// var 블록레벨{} 의 유효범위가 아닌 함수레벨 유효범위로 취급 되기 때문에, 의도하지 않은 범위, 메모리누수
// var 를 사용했었으나, let 과 const 의 등장으로 잘 사용하지 않게 되었다.
function Scope(){
    if(true){
        const a =123
        console.log(a)
    }
}

Scope()