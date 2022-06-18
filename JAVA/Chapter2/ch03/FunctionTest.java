package ch03;

public class FunctionTest {

	public static int addNum(int num1, int num2) {
//		반환 데이터 타입 은 int
//		메소드 이름은 addNum
//		두개의 매개 변수를 받았다.
		int result = num1 + num2;
		return result;
	}

//	반환 값이 없는 경우 void 선언
	public static void sayHello(String greeting) {
		System.out.println(greeting);
	}

//	반환만 하고 매개변수가 없는 
//	1~100까지 더해서 반환 해줄 것 .
	public static int calcSum() {
		int sum = 0;
		int i;

		for (i = 0; i <= 100; i++) {
			sum += i;
		}
		return sum;
	}

	public static void main(String[] args) {
		int n1 = 10;
		int n2 = 20;

		int total = addNum(n1, n2);

		System.out.println(total);
		sayHello("안녕하세요"); // 반환 값 없음
		total = calcSum(); // 1~100까지 더해서 반환
		System.out.println(total);
	}

}

//출력
//30
//안녕하세요
//5050

