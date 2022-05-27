//함수에 대해 인터페이스를 만드는

interface HelloPerson {
    (name: string, age: number): void;
}

//helloPerson 함수보다는 HelloPerson 만 중요하게 작용한다.
const helloPerson: HelloPerson = function(name: string, age: number){
    console.log(`안녕하세요 ${name}입니다.`)    //실제 사용처는 : HelloPerson ...... 이다
};


//helloPerson 에 관계는 여기서 끝난다.
helloPerson("Junsu",30) 