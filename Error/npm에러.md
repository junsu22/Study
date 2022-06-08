# npm ERR! Cannot read properties of null (reading 'pickAlgorithm')


<code>
npm ERR! Cannot read properties of null (reading 'pickAlgorithm')
</code>


React 를 공부하던중,
문구와 함께 npm 을 실행할수 없었다. 

JSON 파일을 삭제해보고 module 도 다시 설치해보고 node JS 도 다시 설치 해 보았지만 해결불가 하였다..

<code>
npm cache clear --force
  
npm install
</code>

캐시를 지우고 다시 설치 해서 해결되었다.



# Module not found: Can't resolve 'redux' in node_modules

redux 작업을 하는중, 
npm start module 오류 가 발생했다. 출력이 되지 않았다. . .
react, react-dom 버젼을 낮춰 보았다. -> 되지않았다
redux 를 다시 설치해보았다. -> 되지않았다
콘솔, 노드에서 설치 도 해봤다 -> 되지않았다..
폴더를 변경해보았다-> 되지 않았다.

증상이 해소 되지 않았다.

<code>
npm install --save redux react-redux
</code>  

redux와 react-redux를 동시에 설치함으로써 
정상적으로 실행 되었다.



