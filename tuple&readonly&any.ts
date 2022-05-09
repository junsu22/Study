//  tuple , readonly
const player :  readonly[string, number, boolean] =["junsu",10,false]    //순서대로 입력 해야 한다. tuple
player[0]= 1;   //string 형이 와야 한다. 타입 순서 , readonly 수정 할수 없다.


//any
// typescript 로 부터 보호받을 수 없다. ->javascript
// 써야 할 일이 있다.
// 타입스크립트를 빠져 나올때 사용한다.
const a : any [] = [1,2,3,4]
const b : any = true 
a+b 
