interface person1 {
    name: string;
    age: number;
}

function hello1(person: Person1 ):void { // 출력만 할 것 이기때문에 void 
    console.log(`출력 ${person.name} 입니다.`);

}

const p1 : Person1 ={
name: 'junsu',
age: 30
};

hello1(p1)


// what are Interfaces ?

// <만들기>
// - mkdir interface
// - cd interface
// - npm init -y
// - npm i typescript -D
// - code .(vs code 열기 )
// - npx tsc --init (ts config 파일이 없기 때문에 디폴트로 생성)
// - interface 문제 없는지 관계를 규명해서 체크하는 역할


