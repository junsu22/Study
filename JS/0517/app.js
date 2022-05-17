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
    // event.preventDefault(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    // 저장될 아이템 이름, 값은 username변수

    paintGreetings(username)

    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {

    // show the greetings*
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //-> paintGreetings 함수
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
//제어 흐름*
// "만약 savedUsername 값이 null 일 경우 , form 을 표시하라"
if (savedUsername === null) {
    // show the form*
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);

}