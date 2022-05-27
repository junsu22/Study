//인덱서블 타입

interface Person3 {
    name: string;
    age?: number;
    [index: string]: any;
    // Person3이라고 하는 타입으로 되어 있는 변수 (개체는) = a['index'] 같은의미
}


function hello3(person: Person3): void {
    console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p31: Person3 = {
    name: 'Junsu',
    age: 30,
};

const p32: Person3 = {
    name: "Anna",
    systers: ['str1',"str2"],
};


const p33: Person3 ={
    name: "pet",
    father: p31,
    mother: p32,
    
};

hello3(p31)//32/33 을 넣어도 상관없다. 
// [index: string]: any; 어떤 이름의 property 가 와도 괜찮아