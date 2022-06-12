def plus(a,b):
    if type(b) is int or type(b) is float:
        #조건 or 다른조건
        #둘 중 참인것이 없다면 else로 블록이동
        return a+b
    else :
        return None

print(plus(12, 1.2))



# else if
# elif : else if, 여러개 의 if 문이 가능해진다.
# 들여쓰기에 주의 하자 .
# 조건이 false 이면 다음 조건을 실행 한다.
def age_check(age):
  print(f"you are {age}")
  if age < 18:
    print("you can't drink")
  elif age == 18: 
    print("you are new to this!")
  elif age > 20 and age < 25:
    print("you are still kind of young")
  else:
    print("enjoy your drink")

age_check(23)

# 출력
# you are 23
# you are still kind of young
 