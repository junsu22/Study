const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// const link = document.querySelector("a");
// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
    event.preventDefault();
    //(1) event 가 원래 하는 행동을 멈춰주기. 브라우저의 기본동작을 막고, 그 동작은 새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //(2) form 을 다시 숨겨 준다.
    const username = loginInput.value;
    //(3) loginInput.value를 username 이라는 변수로 저장 해주기.
    localStorage.setItem(USERNAME_KEY, username);
    //(4) username 값을 username 이라는 key와 함께 localStorage에 저장할 것.
    paintGreetings(username);
    //(5) paintGreetings 함수를 호출
    // paintGreetings 함수는 하나의 인자를 받고 있다. 유저가 form 안에 있는
    // input 에 입력한 유저명을 받고 있다.

    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
// 이 함수는 username이라는 인자를 하나 받고 있고 이 함수가 하는 일은
// HTML 비어있는 h1 요소 안에 `Hello ${username}`이라는 텍스트를 추가해 주는 것.
    // show the greetings*
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //-> paintGreetings 함수
    // h1 요소로부터 "hidden"이라는 클래스명을 제거 
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 존재여부를 여기서 한번 찾아본다.
    // show the form*
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    //greeting 에 텍스트를 넣어 줄 때 local storage에서 유저정보를 찾고 있다
    // 총 2번 찾는 것.

}


// 속성
// 1.유저가 처음 앱을 열면 form 과 h1 은 css에 있는 hidden 이라는 class 
// 때문에 숨겨져 있다.


// 2. 그 다음 자바스크립트가 USERNAME_KEY를 가지고 local storage를 확인할 것.

// 앱을 처음 실행 했을떄, key 랑 value 가 없을 것이다.
// 즉, savedUsername 값이 null
// null = null 이니까, 조건은 참이 된다.
// 조건이 참이면 , form 에서 HIDDEN_CLASSNAME 을 지워야 하니까,
// 지워준다.
// html -> class="hidden" 삭제하기.

// 삭제 해주면 form 이 표시 될테고 그다음 addEventListner가 
// form 이 submit 되기를 기다린다.


// submit 이 발생하면 onLogin 함수 호출, 직접 하는 것이 아니라 , 자바스크립트가 호출한다,

// 자바스크립트는 함수는 호출하면서 인자를 줄텐데, 그인자에는 event 에 관한 정보들이 담겨있다.
// 그 정보에는 브라우저가 이벤트에 대한 기본 동작을 못하도록 막는 정보도 함께 있다.

// 그 다음 다시 form 을 숨긴다. event.preventDefault();
// 그 다음 input 값을 가져온다.


// 가져온 input 값을 username 이라는 변수로 저장한 다음에
// 그 변수 값을 local storage에 USERNAME_KEY와 함께 저장할 것.


// 그 다음 paintGreetings 함수를 호출하는데 input 값을 인자로 넣어줄 것.
// paintGreeting(username)

// input 값을 받은 paintGreetings 함수는 h1에 "Hello 유저명" 이라는 텍스트를 적어준다.
// function paintGreetings(username)


//paintGreetings 함수는 h1 으로 부터 "hidden"을 제거해서 
// h1을 화면에 띄어줄 것이다.
// function paintGreetings(username) {
//         greeting.innerText = `Hello ${username}`;
//         greeting.classList.remove(HIDDEN_CLASSNAME);
//     }
    

// 결과: 
// 로그인을 한 후에 새로고침하면, savedUsername 값은 null 이 아닌 junsu

