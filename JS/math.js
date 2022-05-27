const pi = 3.1459265358979
console.log(pi)
// 3.14 뒷부분제거

const str = pi.toFixed(2)
// 소수점 2자리 남기고 나머지 제거
console.log(str)
console.log(typeof str)


const integer = parseInt(str)   //전역함수 숫자가있는 문자데이터를 정수(integer)로 반환 ---->3    정수만 필요하다면 integer
const float = parseFloat(str)   //전역함수 . 소수점을 유지하면서 변환. ------>3.14 소숫점을 포함해야 한다면 float

console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)




// Math 내장 객체 , MDN -Methoad참고
//Math.abs() - > absoulte 약어 , 절대감  . 음수값을 제외 하고 정수값을 반환해주는 메소드 ex.-99 ->99반환
console.log('abs:',Math.abs(-12))
console.log('min:',Math.min(2,8)) // 가장 작은값을 확인해주는 메소드
console.log('max:',Math.max(2,8)) // 가장 큰 값을 확인해주는 메소드
console.log('ceil:',Math.ceil(3.14)) // 올림처리 , 정수단위로 올림 처리 . 뒷자리 무시하고 3 이 4로 바뀐다.
console.log('floor:',Math.floor(3.14)) // 내림처리, 정수단위로 내림  처리. 뒷자리 무시하고 3이 출력된다.
console.log('round:',Math.round(3.5)) // 반올림처리 . 3.5->4 출력
console.log('random:',Math.random()) // 숫자 무작위로 표시. 새로고침을 하게 될때마다 값이 바뀐다. (난수)
