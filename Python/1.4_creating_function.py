# create function 
# function 을 만든다 표현 x
# fuction 을 define(정의)한다 라고 표현한다

# def : definition or define 의 약자.

# 사용방법
# def 라고 쓰고 function의 이름을 쓴다.

def say_hello():
  print("hello")

# 다른언어와 의 차이점.
# 파이썬 은 다른 언어와 다르게 브라켓{} 안에 정의 하지 않음. 
# 파이썬은 들여쓰기(space,tab)로 function 의 시작,끝을 판단한다.


# 들여쓰기 의 중요성
def say_hello():
  print("hello")
print("bye")
# 출력값 : bye
# 이유 : bye는 function 밖에 있기 때문에 bye 만 출력되었다.

def say_hello():
    print("hello")
    print("bye")

# 아무것도 출력이 안된다.
# 초보자들이 가장 많이 하는 실수
# {}을 사용하지 않는다.



# 정상적인 호출 방법

def say_hello():
  print("hello")
  print("bye")


say_hello() # 원하는 만큼 사용할 수 있다.
say_hello() #bye
say_hello() #hello
say_hello() #bye
say_hello() #hello
say_hello() #...
say_hello()
say_hello()
say_hello()
say_hello()
say_hello()