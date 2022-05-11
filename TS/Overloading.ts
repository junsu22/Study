// 오버로딩
// Next.JS 에서 많이 만나게 되는 사례

type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void // 어떤 때는 이걸 보내줄 수도 있고
    (Config : Config ): void // 이걸 보내 줄 수도 있다.
}
const push: Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else{
        console.log(config.state)
        //typescript 는 Config 타입 객체라는 것을 확실히 알게 된다.(path 와 state 값을 가질 수 있는 config 타입인 것을.)
    }    
}



// 또 다른 경우


type Add = {
    (a:number, b:number):number
    //number 타입으로 있고 number를 반환 
    (a: number, b:number, c:number): number;
    //a,b,c 는 number type , number 반환 
}

//(위와 같이 입력)
// 파라미터 의 개수가 다를 경우 
const add:Add = (a,b,c?:number) => {
// c?:number , c는 optional c는 number 일 것 같다. 

if(c) return a+b+c

    return a+b;

}



add(1, 2) //add 함수를 호출. 1,2 를 넣어주면 정상적으로 작동
add(1,2,3)//1,2,3 을 넣어주면 정상적으로 작동