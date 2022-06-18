package ch13;

public class BitTest {

	public static void main(String[] args) {
//		비트 연산자
//		대입연산자와는 다른 연산자가 함께 쓰임.
		int num1 = 5;
		int num2 = 10;

		System.out.println(num1 | num2); // 15
		// |(OR) 0|0 0반환 그 외는 1
		System.out.println(num1 & num2); // 0
		// &(AND) 1&1 1 반환 그 외는 0
		System.out.println(num1 ^ num2); // 15
		// ^(XOR) 두개의 비트가 서로 다른경우에 1을 반환
		System.out.println(num1 << 2); // 20
		// <<,>>(shift) a<<2 변수 a를 왼쪽 방향으로 2만큼 이동
		System.out.println(num1); // 5
		System.out.println(num1 <<= 2); // 20
		System.out.println(num1); // 20

	}

}



//출력
//15
//0
//15
//20
//5
//20
//20

