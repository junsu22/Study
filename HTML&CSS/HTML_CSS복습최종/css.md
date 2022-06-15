# style 속성
overflow
 
visable : 넘친내용을 그대로 보여준다
hidden: 넘친내용을 잘라낸다.
scroll: 넘친내용을 잘라낸다. +스크롤바를 생성한다.
auto: 넘친 내용이 있는 경우만 잘라낸다. +스크롤바를 생성한다.


opacitiy (요소 투명도) 
0.x~1  1에 가까워질수록 불투명,0생략 가능 ex. opacity:.5;
0.1 = 1%
0.5 = 50%
0.8 = 80%
1 = 100% 



# font
line-height 
한줄의 높이 , 행간과 유사
line-height : 2 ; //2배

font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
폰트 적용해보고 , 안되면 그 다음것 . "" 는 띄어쓰기 .  
justify : 양쪽정렬 
text-decoreation : none(없음), underline(밑줄), line-through (중앙선) 
text-indent : 50px 들여쓰기 , 음수는 내어쓰기

# background
배경. 
페이지에서 이미지 가져오기  
새탭에서 이미지를 열고 주소를 복사해서 url(""); 안에 넣어준다. 
background-size : 200px 크기가 너무 큰 이미지를 사이즈에 맞게 조절할수 있다. 
background-size : cover : 가로사이즈에 맞춤
background-size : contain : 세로 사이즈에 맞춤


background-repeat: no-repeat 같은 이미지 바둑판식 배열(반복) 을 사용하지 않겠다 
background-repeat : repeat-x (가로 x축) , repeat-y(세로,y축) 반복 
background-positon : bg 안의 img 를 중앙에 정렬시킨다. 


background-attachment 
:scroll 배경이미지는 움직이지 않고 스크롤, 똑같은 화면을 보여준다. 요소랑 같이 올라감.
:fixed :요소는 움직이는데 배경이미지는 고정 . 활용 : 페럴렉스



# box-sizing 
수동으로 너비를 계산할 필요 가 없어진다. 
 
width :100px
padding:20px
border: 1px solid green
box-sizing : border-box

실제 가로 너비는 100px 
(padding, solid 등 포함해서 계산이 되었기 때문에)




 # 방향 속성 
 상하, 좌우 
 상, 좌우, 하 
 상, 우, 하, 좌 
 시계방향,상중하 

# display 속성 
(각 요소에 이미 지정되어 있는 값)
block: 레이아웃 요소
inline : 글자 요소
inline-block : 글자 + 상자 요소

(따로 지정해서 사용하는 값)
flex: 플렉스박스 (1차원 레이아웃)
grid : 그리드 (2차원 레이아웃)
none : 보여짐특성없음. 화면에서 사라짐
그외 : table-row,cell 등등...

 HTML<a></a> 가로 너비를 지정하기 위해 사용해야 하는 속성과 값은?
 display : block // a태그에도 가로 세로 값을 줄수 가 있다.

# 배치 기준 (position)
 
static : 기준없음
relative : 요소 자신을 기준
absolute : 위치 상 부모 요소를 기준
fixed : 뷰포트(브라우저)를 기준
sticky: 스크롤 영역 기준 (사용빈도 낮음.)




# 요소쌓임 순서(stack order) z-index
어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지)결정

1. 요소에 position 속성의 값이 있는 경우 위에 쌓임(기본값 static 제외)
2. 1번 조건이 같은경우 , z-index 속성의 숫자 값이 높을 수록 위에 쌓임
3. 1번과 2번 조건까지 같은 경우, HTML 의 다음 구조일수록 위에 쌓임.



z-index : 요소의 쌓임 정도를 지정. 
숫자가 클수록 위에 쌓임 없으면 , 0. 단, position 이 있어야 한다.
position이 없으면 값을 9999999(아주 크게 ...)줘도 소용이 없다.
posiiton : static 은 position 값이 없는것이나 마찬가지..

큰값을 넣게 되면 관리가어려워진다. 되도록이면 1번 부터 하나씩 증가 할수 있게 사용하면서 숫자가 크지 않게 관리해주기




span 배경 크기 주기 . width, height 값을 줘도 안커진다(inline형태) 여기다 . position : block 을 주자.