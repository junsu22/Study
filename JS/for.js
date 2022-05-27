//반복문
// for (시작조건; 종료조건; 변화조건){}

// *let = 재할당
// * i = 변수

const ulEl = document.querySelector('ul')
//querySelector 이용해서 ul 태그를 찾는다.
console.log(ulEl)


for(let i =0; i<10; i +=1){
    //false 가 될때 까지
// i의 초기값은 0 ; 종료 조건  i가 10보다 작지 않은 경우에 종료; i= i+1 
    const li = document.createElement('li')
    //li 태그가 출력되는건 아니지만 메모리상에 li 태그가 만들어져서 연결 
    li.textContent = `list-${i+1}` //보간 처리
    if((i +1)% 2 ===0){
        li.addEventListener('click',function(){
        console.log(li.textContent)

    })
}
// 설명 . 
//클릭하면 짝수가 출력되는 함수 ,  if 조건문에서 짝수를 콘솔창에 출력하려 했으나, for 문에 1 씩 더하는 변화조건 때문에 홀수가 출력되었다.
//if 문에서 괄호로 먼저 1씩 더해주도록 하였다.

    ulEl.appendChild(li)
    //뒤쪽의 자식요소로 메모리상에 있는 li 태그를 삽입
}

//보간법 : ES6 이전 사용할수 없었다.변수, 함수 호출 및 산술 표현식을 문자열에 직접 삽입 할 수 있다.
