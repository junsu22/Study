// 클래스에서 인덱스 시그니쳐를 사용하는 방법

// class -> object
// {mark : 'male' , jade : 'male'} A반 
// {chloe: 'female', alex: 'male', anna: 'female'} B반

class Students {
    // mark: string = 'male'; -> 동적으로 추가할수 없다 . 다른 친구들이 추가되면 만들어 줘야 한다.
    
    //index Signature 문법 (인덱스 시그니쳐) 
    // [index: string]: string; ->
    [index : string] : "male" | "female"; // String 으로 설정하면 아무 값이나 넣을수 있기 때문에 지정.

    mark : "male" = "male"; //mark 라는 property 가 male 이라고 하는 값을 가진 object ,나머지는 optional 하게 등록 할수 있다.

}
    const a = new Students(); // const a반
    a.mark = 'male';
    a.jade = 'male';

    console.log(a)

    const b = new Students();
    b.chloe = 'female';
    b.alex = 'male';
    b.anna = 'female';

    console.log(b)
