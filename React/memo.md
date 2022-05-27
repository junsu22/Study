# React.createElement 
순수 javaScript
# JSX
JSX 문법으로 작성된 코드는 순수한 javaScript 로 컴파일 하여 사용한다,
=> babel 이 해준다.
JSX 문법 => React.createElement
<code>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">

# JSX 를 사용하는 이유?
-React.createElement VS JSX
- 가독성 good
-babel 과 같은 컴파일 과정에서 문법적 오류를 인지하기 쉬움

# JSX 문법
-최상위 요소가 하나여야 한다.
-최상위 요소 리턴하는 경우 .() 로 감싸야 한다.
-자식들을 바로 랜더링 하고 싶으면, ***<>자식들</>를 사용한다 => Fragment
-자바스크립트 표현식을 사용하려면, {표현식}을 이용한다.
-if 문은 사용할수 없다. (삼항연산자 혹은 &&를 사용한다.)
-style 을 이용해 인라인 스타일링이 가능.
-class 대신 className 을 사용해 class 를 적용할 수 있다.
-자식 요소가 있으면 , 꼭 닫아야 하고, 자식 요소가 없으면 열면서 닫아야 한다.
<p>bla</p>
<br />



# Hooks 이전
-컴포넌트 내부에 상태가 있음 => class
-컴포넌트 내부에 상태가 없다면? , 라이프 사이클을 사용해야 한다면 class
-라이프 사이클에 관계 없다면 = > function

# Hooks 이후 
-class
-fuction


# Props? State?
-props는 컴포넌트 외부에서 컴포넌트에게 주는 데이터
-state 는 컴포넌트 내부에서 변경할 수 있는 데이터
(둘다 변경이 발생하면 , 랜더가 다시 일어날 수 있다.)

# Render ?
-props 와 state 를 바탕으로 컴포넌트를 그린다.(props, state 가 변경되면 다시그린다.)
-컴포넌트를 그리는 방법을 기술하는 함수가 랜더 .

# Component Lifecycle 
-리액트 컴포넌트는 탄생부터 죽음까지 여러지점에서 
개발자가 작업이 가능하도록
메소드를 오버라이딩 할수 있게 해준다.

# component Will Receive Props
-props 를 새로 지정했을떄 바로 호출
-여기는 state 의 변경에 반응하지 않는다.
-여기서 props 의 값에 따라 state 를 변경해야 한다면,
setState를 이용해 state 를 변경한다.
* 그러면 다음 이벤트로 각각 가는것이 아니라 한번에 변경된다.


# shouldComponentUpdate
-props 만 변경되어도
-state 만 변경되어도
-props & state 둘다 변경되어도
newProps 와 newState를 인자로 해서 호출


# componentWillUpdate 
-컴포넌트가 재 랜더링 되기 직전에 불린다.
-여기서는 setState 같은것을쓰면 안된다.


# componentDidupdate
-컴포넌트가 재 랜더링을 마치면 불린다.