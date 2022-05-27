//API
// .find() .findIndex()
const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

const a = fruits.find(fruit => /^A/.test(fruit))
    // fruit = Apple 이 받아짐
    //Cherry 까지 가지 않는다.
    // ^A = > Apple    
    // ^B = > Banana
    // ^C => Cherry

console.log(a)



// .findIndex()
const b = fruits.findIndex(fruit => /^C/.test(fruit))
    // fruit = Apple 이 받아짐
     //Cherry를 찾았으니 [0]based 번호인 2가 출력된다.
    // ^A = > Apple    
    // ^B = > Banana
    // ^C => Cherry


console.log(b)



// .includes() 배열에 포함이 되어져 있는지 
const c = numbers.includes(3)//=true , number 에 3이 들어있으니까.
console.log(c)

const d = fruits.includes('JUNSU')//=false, fruits 에 없으니까.
console.log(d)


// .push() .unshift()
// 원본 수정됨 주의!

numbers.push(5) //뒤쪽에 5가 추가됨 , 가장 뒤쪽 부분에 아이템 삽입
console.log(numbers)

numbers.unshift(0) //맨앞에 0이 추가됨, 가장 앞쪽에 아이템 삽입
console.log(numbers)



// .reverse()
// 원본 수정됨 주의!
// 뒤집어 출력
numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)



//.splice()
// 원본 수정됨 주의!

// const numbers = [1,2,3,4]
                    // 0,1,2,3    
numbers.splice(2, 2) //--->(2)[1,2] 앞의 2는 2번째 데이터인 3을 의미하는 것이고 뒤로 2개를 지워서 결과값은 [1,2]
console.log(numbers)

numbers.splice(2, 0 , 999) // <--- 0 = 지울 데이터가 없다. 그대로 출력됨 . 999 를 넣으면 , 2번째 데이터 뒤에 999라는 데이터가 추가된다
console.log(numbers)//---->(5) [5, 4, 999, 1, 0]
//제거 되는용도로 사용이 되지만 끼워넣는 용도로 사용도 가능하다.


numbers.splice(2, 1, 99)
// 1개를 지우고 99를 끼워넣는다 .
console.log(numbers)
//---->(4) [1,2,99,4]

fruits.splice(2, 0, 'Orange')
console.log(fruits)
//중간에 Orange 추가