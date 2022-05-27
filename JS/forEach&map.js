// API
// length
const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

console.log(numbers)
console.log(fruits[2])//--->Cherry

//인덱스 : [0][1][2][3] 
//인덱싱 : index에 숫자를 넣어서 조회하는 방법
//엘리먼트(아이템): 배열안에 있는 데이터

console.log(numbers.length) //4
console.log(fruits.length) //3
console.log([1, 2].length) //2

console.log([].length) //0
// .concat
console.log(numbers.concat(fruits))// concat : 원본에 데이터에 영향을 주지 않고 합쳐진 새로운 배열을 만든다.---->(7) [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry'] 
console.log(numbers)//----------->(4) [1, 2, 3, 4]
console.log(fruits)//---------------->(3) ['Apple', 'Banana', 'Cherry']

// .foreach()
// 배열데이터의 아이템 갯수만큼 특정한 콜백 함수를 반복적으로 실행하는 메소드, 반환되는 값은 없다.
fruits.forEach((item, index, array) => {
    //(fruits, 1) 로 가능 . Array 잘 사용하지 않음.
    console.log(item, index, array)
})

// Apple 0 (3) ['Apple', 'Banana', 'Cherry']
// Banana 1 (3) ['Apple', 'Banana', 'Cherry']
// Cherry 2 (3) ['Apple', 'Banana', 'Cherry']

// .map()
// 배열데이터의 아이템 갯수만큼 특정한 콜백 함수를 반복적으로 실행하는 메소드, 반환한 데이터를 새로운 배열로 만들어 사용할수 있다.

const a = fruits.forEach((fruits, index) => {
    console.log(`${fruits}-${index}`)
})

console.log(a)

const b = fruits.map((fruits, index) => {
    return{
        id: index,  //-> 1 반환
        name: fruits    //->banana 반환
    // 반환된 것을 b 로 반환
    }

})
console.log(b)

// 새로운 배열 만들어짐
// (3) [{…}, {…}, {…}]0: {id: 0, name: 'Apple'}1: {id: 1, name: 'Banana'}2: {id: 2, name: 'Cherry'}length: 3[[Prototype]]: Array(0)