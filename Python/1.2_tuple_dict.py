# Tuple
days = ("Mon", "Tue", "Wed", "Thur", "Fri")
#변경이 불가능 하게 바꾸는 방법은
#[] 대신 ()로 교체해주면 변경이 불가능 

print(type(days))
#어떤타입인지 알려준다.
#[] 타입은 list 로 출력
#() 타입은 tuple 로 출력



#dictionary
junsu = {
"name" : "junsu",
"age" : 29,
"Korean" : True,
"fav_food" : ["Kimchi"]
}

print(junsu)
junsu["handsome"]=True
print(junsu)
# handsome :True 도 가질수 있다.모든것을 가지고 있는 이것이 dictionary
#데이터를 구성하는 방법은 list, tuple, dictionay
#dict 에는 list, tuple 등도 저장할 수 있다.