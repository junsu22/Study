# 위치에 의존적인 인자

def plus(a, b):
    return a - b 


result = plus(b=30, a=1) 
print(result)

# 출력 
# -29
# 인자의 순서가 아닌 인자의 이름만 신경쓰면 된다.


#ex2.

def say_hello(name, age): 
    return f"Hello {name} you are {age} years old"
# f는 format 의 약자이다.
hello = say_hello("junsu","30")
print(hello)
# 출력
# Hello junsu you are 30 years old


# 이렇게 변경도 할 수 있으나 들여쓰기가 많다.
def say_hello(name, age): 
    return "Hello " + name + " you are "+ age + " years old"
hello = say_hello("junsu","30")
print(hello)



# 순서가 상관없음
hello = say_hello(age = "12", name = "junsu")
print(hello)
