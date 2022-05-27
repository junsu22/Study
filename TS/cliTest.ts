console.log('test')


// node js 설치
// nvm-windows 설치 
// nvm --version 버젼확인 으로 확인하기 

//npm i typescript -g  글로벌 버젼 설치
// .ts 파일 내용 작성

// cat test.ts 로 콘솔 문 출력 
//mkdir tsc-project 로 프로젝트를 만든다.
//------ 프로젝트를 만들고 컴파일러 실행-------
//cd tsc- project 로 해당 폴더 이동
//모든 타입스크립트 파일을 자바스크립트로 변환 (설정 파일을 넣어야 하는데 디폴트 로 생성)
// npm init -y  : 물어보는 창 

// 만든 tsc-project 에 package.json 파일 생성 
// ls 명령어로 확인할수있다.
// 만들어진 프로젝트를 npm 프로젝트라고 칭함

// npm i typescript 로 라이브러리 설치

//ls 검색해보면 node_module 폴더가 생성된다.    ls node_module  TypeScript 확인
//npx tsc
//npx tsc --init ->json 생성 ,lock json

//npx tsc -w  : w- watch


    // JSON 파일에서 아래와 같이 test 부분을 build  로 바꿔준다.
    // "test": "echo \"Error: no test specified\" && exit 1"
    // "build": "tsc"


    // npm run build 로 실행
    // npm run build:watch 