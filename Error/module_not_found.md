# Module not found: Can't resolve 'redux' in node_modules

redux 작업을 하는중, 
npm start module 오류 가 발생했다. 출력이 되지 않았다. . .</br>
react, react-dom 버젼을 낮춰 보았다. -> 되지않았다</br>
redux 를 다시 설치해보았다. -> 되지않았다</br>
콘솔, 노드에서 설치 도 해봤다 -> 되지않았다..</br>
폴더를 변경해보았다-> 되지 않았다.</br>

증상이 해소 되지 않았다.

<code>
npm install --save redux react-redux
</code>  

redux와 react-redux를 동시에 설치함으로써 
정상적으로 실행 되었다.
