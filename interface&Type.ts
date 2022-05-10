type Nickname = string
type Health = number
type Friend = Array<string>
type Player = {
    nickname: Nickname,
    healthbar: Health
}
const junsu: Player = {
    nickname: "junsu",
    healthbar: 10
}


// 타입을 지정된 옵션 으로 제한 
type Team = "red" | "blue" | "yellow"   //특정 값만 올수 있게   //type Alias
type Health = 1 | 5 | 10


type Player = {
    nickname: string,
    team: Team,
    health: Health
}

const junsu = {
    nickname: "js",
    team: "yellow", //위에서 지정된 것만 사용한다. 다른 것이 오면 , error
    health: 10

}

// interface
type Team = "red" | "blue" | "yellow"   //특정 값만 올수 있게   //type Alias
type Health = 1 | 5 | 10

// 타입스크립트에게 오브젝트 방법을 알려주는 방법은  
// 2가지 1. type + "="    
// 2. interface
interface Player {
    nickname: string,
    team: Team,
    health: Health
}

const junsu = {
    nickname: "js",
    team: "yellow", //위에서 지정된 것만 사용한다. 다른 것이 오면 , error
    health: 10

}





// 정리 2가지 선택지 , type 이 사용할수 있는것이 조금 더 많다. 비슷함

// type
type Player = {
    nickname: string,
    team: Team,
    health: Health
}

// interface
interface Person {
    nickname: string,
    team: Team,
    health: Health
}


// creater interface
interface User {
    name: string
}

interface Player extends User {  //add interface

}
const junsu: Player = {
    name: "junsu"
}



//interface => type 으로 수정
type User = {
    name: string
}

type Player = User & {
}
const junsu: Player = {
    name: "junsu"
}


// property 축적
// interface 3개 만들기 
interface User {
    name: string
}
interface User {
    lastName: string
}
interface User {
    health: number
}

// User 만들기
const junsu: User = {
    name: "kjs",
    lastName: "k",
    health: 10
}
//  => type 으로 할수 없다.
// interface 를 만들기만 하면 typescript 가 합쳐 줌.
// interface 가 합체하기 더 좋다. 같은 interface 에 다른 이름을 가진 property 들을 쌓을 수 있다.
// interface 객체 지향프로그래밍 개념을 활용 해서 디자인 되었다.

