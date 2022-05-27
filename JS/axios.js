//omdb api 이용해서 영화 데이터 요청 ,출력
// https://www.omdbapi.com/ 키 발급 받아야 한다.
//http://www.omdbapi.com/?apikey=[yourkey]&
// 키 발급 필요 
//query String 특정한 주소로 접근할때 옵션 명시하는 문자.
// 주소?속성 = 값&속성 = 값&속성=값

// http://www.omdbapi.com/?apikey=7035c60c&s=frozen
// 사용자 키 = 속성(search) = frozen (겨울왕국)

//axios
//https://github.com/axios/axios
//npm install axios
import axios from "axios"

function fetchMovies() {
    axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res) => {
        console.log(res)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        imgEl.src = res.data.Search[0].Poster
    })
}//http->https 권장 문제가 생길수 있다.

fetchMovies()