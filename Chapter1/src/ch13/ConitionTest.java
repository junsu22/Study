package ch13;

import java.util.Scanner;

public class ConitionTest {

	public static void main(String[] args) {
// 조건연산자
//		삼항연산자
//		조건식의 결과가 참인 경우와 거짓인 경우에 따라 다른결과가 수행됨.
//		if(조건문)을 간단히 표현할 때 사용할 수 있음.

//		입력받은 큰수를 출력
		int max;
		System.out.println("입력 받은 두 수중 큰 수를 출력하세요\n");

		Scanner scanner = new Scanner(System.in);
		System.out.println("입력1:");
		int num1 = scanner.nextInt();
		System.out.println("입력2:");
		int num2 = scanner.nextInt();

		max = (num1 > num2) ? num1 : num2;
		System.out.println(max);
	}

}
