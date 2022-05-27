const str1 = '0123'
console.log(str1.length)
// // 셀 수 있는 문자 길이 조회. 공백도 취급한다.
console.log('0 1 1 11 1 1'.length)



const str = 'Hello world!'


// <indexOf>
//만일 world 가 있다면 
console.log(str.indexOf('world') !== -1) // boolean 사용가능 

// <slice> 잘라내기
console.log(str.slice(0, 3)) // slice 어디서 시작해서 어디 직전 까지 잘라낼 것이냐 . ----> Hel


// <replace> 바꾸기
console.log(str.replace('world', 'text')) //----->Hello text!
console.log(str.replace(' world!', ''))// 띄어쓰기를 포함한 공백 문자 가 world 에 들어간다 . ----->Hello



//<정규표현식>
const str2 = 'okss22s@hanmail.net'
console.log(str2.match(/.+(?=@)/)[0]) //정규 표현식. 특정한 문자를 일치시켜 원하는 정보를 추출해서 사용가능. 배열---->okss22s 



//<trim> 공백 문자 제거
const str3 = '            Hello world'
console.log(str3.trim()) // 앞에서 시작하는 모든 공백문자를 제거    ------>Hello world