const a = 'Hello~';

//split : 문자를 인수 기준으로 쪼개서 배열로 반환
//reverse: 배열을 뒤집기.
//join : 배열을 인수 기준으로 문자로 병합해 반환.
const b = a.split('').reverse().join(''); // 메소드 체이닝
// 해석 : split('비어있으니 빈 문자열이라고 함').메소드를 연결해서 붙이는 메소드1.메소드2.메소드3
// 메소드를 체인 한것. 이것을 메소드 체이닝이라고 함.split 뒤에 reverse 뒤에 join
// b라는 변수에 할당 해줌. 
console.log(a); // Hello~
console.log(b); // ~olleH 