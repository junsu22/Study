// API
// .filter()
const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

const a = numbers.map(number => { 
    return number <3 //t-t-f-f
})

console.log(a)


const b = numbers.filter(number =>{
    return number < 3   //2
})
console.log(b) // true 니까 1 , true 니까 2 , 3은 false , 4도 false 



//원본 데이터는 역시 훼손 되지 않는다.

// 간결화 
const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']
const a = numbers.map(number => number <3)  

console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b) // true 니까 1 , true 니까 2 , 3은 false , 4도 false 


console.log(numbers)