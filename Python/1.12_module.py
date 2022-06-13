# python 에서의 module 은 따로 설치가 아닌  import

import math
# import
print(math.ceil(1.2))
# 출력
# 반올림 된 값 2 
print(math.fabs(-1.2))
# 출력
# -의 절대값 1.2 



# modue 전부 import 하는것 은 비효율 적
# 특정 함수만 import 하도록 하자

from math import  ceil, fsum

#fsum : 부동소수점 합 반환
print(ceil(1.2))
print(fsum([1,2,3,4,5,6,7]))


# 출력
# 2
# 28.0
 

