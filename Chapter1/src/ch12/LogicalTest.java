package ch12;

public class LogicalTest {

	public static void main(String[] args) {
//	&& :논리곱 모두참이어야만 결과가 참. 아니라면 거짓
//	|| :논리합 둘중 하나의 항만 참이면 결과는 참 모두 거짓이면 거짓
//	! :부정 참인경우 거짓으로 바꿈 , 거짓인 경우 참으로 바꿈
		
		int num1 = 10;
		int num2 = 20;

		boolean flag = (num1 > 0) && (num2 > 0);
		System.out.println(flag);

		flag = (num1 < 0) && (num2 > 0);
		System.out.println(flag);

		
//		둘중하나만 
		flag = (num1 > 0) || (num2 > 0);
		System.out.println(flag);

		flag = (num1 < 0) || (num2 < 0);
		System.out.println(flag);

		flag = !(num1 > 0);
		System.out.println(flag);
	}

}


// 출력
//true
//false
//true
//false
//false
