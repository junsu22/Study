// <structual type system - 구조가 같으면 같은 타입이다.>
interface IPerson {
    name: string;
    age: number;
    speak(): string;
}
// 같은 구조 
type PersonType = {
    name: string;
    age: number;
    speak(): string;
};

let personInterface: IPerson = {} as any;
let PersonType: PersonType = {} as any;

personInterface = PersonType;
personType = personInterface;


// <nominal type system = 구조가 같아도 이름이 다르면, 다른 타입이다.>
type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string); PersonID {
    return id as PersonID;
}

// <duck typing>
// 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥 거리는 소리를 낸다면, 나는 
// 그 새를 오리라고 부를 것이다.
// class duck;
//     def sound(self);
//     print u "꽥꽥";
// class Dog; 
// def sound(self);
// print u "멍멍";
// def get_sound(animal):
//     AnimationPlaybackEvent.sound()
// def main():
//     bird = Duck()
//     dog = Dog()
//     get_sound(bird)
//     get_sound(dog)


//TypeScript 는 duck typing 이 아니다.