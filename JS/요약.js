The quick brown fox
Q1.위 문장을 camelCase(낙타표기법)로 작성하시오!
=>
theQucikBrownFox


Q2. let fruits = ['Apple','Banana',"Cheery'];
위 데이터를 활용해 'Banana"를 콘솔 출력하시오!
=>
console.log(fruits[1]);

Q3. Boolean 데이터에서 거짓을 의미하는 데이터는?
=>
false

Q4.'값이 의도적으로 비어있음' 을 의미하는 데이터는? 
=>
null

Q5.
	{ }
위 데이터의 종류는? 
=>객체데이터 , object

Q6. 
	let obj = {abc : 123};
	console.log(obj.xyz);
위 코드를 통해 콘솔 출력될 값은?
=> undefined 
(속성에 없는 xyz 를 출력하려고 했기 때문에 .)

Q7.값 (데이터)를 재할당할 수 없는 변수 선언 키워드는 ?
=> 
const
(일반 적인 변수는 const 로 만들고 재할당 할 변수는 let 으로 만든다.)

Q8.
함수에서 값(데이터)을 반환하기 위해 사용하는 키워드는?
=>return

Q9.
	sum(2,4);
위 함수 호출에서 2,4 를 무엇이라고 하는가?
=> 인수(Argument)

Q10.
function sum(a,b){
	return a+b;
}

위 함수 선언의 a,b 와 같이 , 함수 호출에서 전달받은 인수를
함수 내부로 전달하기 위한 변수를 무엇이라 하는가?
=>
매개변수(Parameters)

Q11.
이름이 없는 함수?
=> 익명 함수(Anonymous Fuction)

Q12. 
hello 이름의 함수 표현을 작성하고 호출하시오!
=>
const hello = function(){
hello();

Q13.
 const user = {
	getName : function (){ }
	(Key : value)
}
위 코드의 getName 과 같이 , 함수가 할당된 객체 데이터의 속성(Property)을 
무엇이라 하는가?

=> 메소드(Method)

Q14.조건이 참(true)인 조건문을 작성하시오!
=>
if (true){}


Q15. 가져온 JS 파일을 HTML 문서 분석 이후에 실행하도록 지시하는 HTML 속성 (Attribute)은?
=>
defer

Q16. 
	<div class = "box">Box!!</div>
위 HTML 요소의 내용 (Content)을 콘솔 출력하시오!
=>
const boxEl  = document.querySelector('.box');
console.log(boxEl.textContent);
(특정한 요소(boxEl)에 textContent라는 속성을 추가해서 그 요소가 가지고 있는,
어떤 내용을 텍스트로 확인 할 수 있다.)

Q17.
	값(데이터)을 재할당할 목적의 변수 선언 키워드는?
=>let

Q18.
const box El = doucument.querySelector('.box');
위 코드이 boxEl 요소에 클릭(click)이벤트를 추가해 
클릭시 'Hello~'를 콘솔 출력하시오!
=>
boxEl.addEventListener('click',function(){
	console.log('Hello~')
});
해석: 
(boxEl : 요소)(메소드 : addEventListener)
(인수값 'click' 이벤트),(function() 익명의 함수= Handler)
=> 핸들러 부분의 함수를 실행한다.

Q19. 
	<div>1</div>
	<div>2</div>
위 2개의 DIV 요소에 JS 로 
class = "hello"를 추가하시오!
=>
const divEls = document.querySelectorAll('div');
divEls.forEach(function (divEl){
	divEl.classList.add('hello');
});

해석 : div 전부 를 찾아서 만든 Els 에 할당을 한다.
완벽한 배열이 아닌 유사배열 이다.
익명함수는 div Els element 들의 반복되는 요소를 원하는 이름 function(divEl)으로 받을수 있고,
(divEl: 매개변수, 이름 지정해줄수 있다.)클래스 정보를 가지고 있는 객체를 
적용하고 add 라는 메소드를 실행해서 hello 클래스를 추가한다.

 
Q20.
	"JUNSU".split('').reverse().join('');
위와 같이, 메소드를 이어 작성하는 방법을 무엇이라 하는가?

=> 메소드 체이닝

Q21.
	const boxEl  = document.querySelector('.box');
위 코드의 boxEl 요소에 HTML 클래스 속성의 값으로 
'active'가 포함되어 있으면, '포함됨 ! '을 콘솔 출력 하시오!

=>
if (boxEl.classList.containers('active')){
console.log('포함됨!');
}

해석 : 
if(조건 : active라는 클래스가  boxEl에 있으면,contains 부분에서 true 가 나올것이고,
그렇지 않으면 false 라는 Boolean 데이터가 나올것이다.
만일 active 클래스가 있어서 true 가 나오면 그것이 조건이 될것이고 ,true 면 
중괄호를 실행시킨다.