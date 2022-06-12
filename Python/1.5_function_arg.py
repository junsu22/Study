def say_hello(who):
  print("hello", who)

say_hello("Junsu")

# 출력: hello junsu



#function 에 data를 주는 방법 (function에 input 을 주는것.) 
def say_hello(who):
  print("hello", who)
# input 의 개념
say_hello(True)

#출력 : hello True



# default value : 원하는 인자에 default value 를 추가 할 수 있다. 


def plus(a ,b):
  print(a+b)
#def  minus(a, b): #minus 에서 b의값을 주지 않았기 때문에 에러를 발생시킴.
def  minus(a, b=0): #b의 값이 없을경우 0을 주어 에러를 해결할 수 있다.
  print(a-b)   
plus(2,5)   #2+5= 7
minus(2)    #2-0 =2
# 출력 7
# 출력 2







def say_hello(name="anonymous"):
    print("hello", name) 

say_hello()
say_hello("Junsu") 

# 출력
# hello anonymous
# hello junsu

# 대부분의 function 들은 외부에서 input을 받아 사용한다.