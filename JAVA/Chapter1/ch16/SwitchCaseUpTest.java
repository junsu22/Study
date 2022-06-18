package ch16;

import java.util.Scanner;

public class SwitchCaseUpTest {

	public static void main(String[] args) {
//		java 14 부터 지원 . switch Expression
//		break 를 사용하지 않음
//		화살표 사용
//		,로 구분.식으로 표현하여 반환값을 받을수 있고, 리턴값이 없는경우 오류가 생긴다.
//		yield 를 사용
		
		Scanner scanner = new Scanner(System.in);
		int month  = scanner.nextInt();
		int day = switch(month) {
		case 1, 3, 5, 7, 8, 10, 12 -> {
			System.out.println("한달은 31일 입니다.");
			yield 31; // <- 이것이 반환 값이다.
		}
		case 4,6,9,11 -> {
			System.out.println("한 달은 30일 입니다.");
			yield 30;
		}
		case2 ->{
			System.out.println("한달은 28일 입니다.");
			yield 28;
		}
		default->{
			System.out.println("존재하지 않는 달 입니다.");
			yield 0;
		}
		};
		
		System.out.println(month + "월은 "+ day+ "일 입니다.");
	}

}
