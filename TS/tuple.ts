let x : [string, number]; //tuple 앞뒤로 대괄호 안에 넣는다.

x= ["hello",39] //항상 타입, 순서 , 길이 가 맞아야 한다.

// x= [10, "junsu"] // 순서가 틀리기 때문에 오류

x[3] ="world"; //type 이 undefined 
x[2] ="world" // 세번째에 넣으려고 해서 error

const person: [string, number] =  ["junsu", 30]; //(o)


const []  = person; //분해 할당

const [first, second] = person; // tuple 은 타입 을 정확히 알려준다 , third 를 넣으면 error 

