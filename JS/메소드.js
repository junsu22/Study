//객체 데이터
const junsu = {
	name : 'JUNSU',
	age : 30,
// 메소드 (Method)
속성부분에 함수가 할당되어있으면 그걸 이제 속성이라 안하고 메소드라고 부른다.

getName : function(){
return this.name ;
	}
}

const hisName = junsu.getName();
console.log(hisName); // JUNSU
//혹은
변수 만들기 번거로우면 아래처럼 바로 출력 할수도 있다. 
console.log(junsu.getName()); // JUNSU
