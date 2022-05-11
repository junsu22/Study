// unknown : 응답받는 type 을 모른다.
let a:unknown;//<-변수의 타입을 모른다. unknown
// 타입 체크가 필요하다.
if(typeof a === 'number'){
    let b = a+1;    //type 을 지정 해 주어서 가능하다.
}

if(typeof a ==='string'){
    let b = a.toUpperCase();//type 을 지정 해 주어서 가능하다.
}



// void 
// 비었다.아무것도 하지 않는 리턴 함수. return 해주지 않는것을 스스로 인식 하기 때문에 void 를 적어줄 필요 없다.
function hello(){
    console.log('x')
}


// never 
// 함수가 절대 return 하지 않을떄
function hello2 (name: string | number){ // 파라미터 값을 string | number 로 지정한다.
    if(typeof name === "string"){
        name //string
}else if (typeof name === "number"){
    name //number
}else{
    name // never-절대 실행되지 않아야 한다.
    }
}