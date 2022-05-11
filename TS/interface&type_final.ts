// // type interface 비교



// // <type>
// // 1.타입을 쓰고 싶다면 type 키워드를 사용할 것.

// // 다양한 옵션 
// // 옵션 1. 오브젝트의 모양 을 설명
// // 옵션 2. 타입 alias 를 만드는 것.
// // +타입을 특정된 값으로 만드는 것.
// type PlayerA = {
//     name: string
// }
// // Player타입을 가진 player
// // 타입을 상속하려면 또 다른 타입 하나를 만들어서,
// type PlayerAA = PlayerA & {
//     lastName: string
//     //AA타입이  A타입과 lastName을 가지는 오브젝트를 합치는 것이다.알려주어야 한다.
//     // PlayerAA 를 쓰고 , lastName 을 추가.
// }
// const playerA: PlayerAA = {
//     name: "junsu",
//     lastName: "xxx"
// }



// // <interface>
// interface PlayerB {
//     name: string
// }

// interface PlayerB {
//     lastName: string
// }

// interface PlayerBB {
//     health: number  //<= type 에서는 할 수 없는것 이 가능해졌다.
// }

// const playerB: PlayerB = {          // 이 부분만 보게 된다면 type 인지 interface 인지 모른다.
//     name: "junsu",
//     lastName: "xxx",
//     health:1
// }





// 인터페이스와 타입 모두 추상 클래스를 대체해서 사용 가능
type PlayerA = {
    firstName: string
}

interface PlayerB {
    firstName: string

}

class User implements PlayerA {
    constructor(
        public firstName: string
    ) { }
}



// 클래스나 오브젝트의 모양을 정의 하고 싶으면 interface 를 사용하고 ,다른 경우 type을 사용
// typescript handbook 둘의 사용 을 참조 하면 좋을 것 같다.



