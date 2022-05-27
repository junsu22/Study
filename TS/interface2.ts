interface Person2 {
    name: string;
    age?: number; //? : 있을수도 있고 없을수도 있고
}
// 어떤 개체의 property 가 있을수도 있는 경우 "?"를 사용할수 있다.
function hello2(person2: Person2): void {
    console.log(`안녕하세요 ${person2.name} 입니다.`)
}

hello2({ name: "junsu", age:30});
hello2({ name: "Anna"});