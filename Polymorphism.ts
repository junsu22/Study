// Polymorphism(다형성)
// poly 그리스어 = many,several, much , multi, polygon(다각형)
// poly= 많은, 다수의 

// morphos = form(형태), structure(구조) =형태 혹은 구조 ,모양

// Polymorphism === 여러가지 다른 구조들
// generic === type placeholder


// call signature
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]):void; // 타입스크립트에게 이 call signature 가 제네릭을 받는 다는것을 알려주는 것.
    (arr: boolean[]):void;
}
// 여기에 어떤 타입이 들어올지 모르기 때문에 generic을 사용 하는 것이다. 어떤 타입이 올지 가능성을 전부 두기 어려움..(number | boolean)

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint ([1,2,3,4])//정상
superPrint ([true, false, true]) //정상
superPrint (["a", "b", "c"]) //string 타입으로 배열을 보내면 정상 작동 하지 않는다.
