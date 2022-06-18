package ch16;

import java.util.Scanner;

public class SwitchCaseUpTest {

	public static void main(String[] args) {
//		java 14 ���� ���� . switch Expression
//		break �� ������� ����
//		ȭ��ǥ ���
//		,�� ����.������ ǥ���Ͽ� ��ȯ���� ������ �ְ�, ���ϰ��� ���°�� ������ �����.
//		yield �� ���
		
		Scanner scanner = new Scanner(System.in);
		int month  = scanner.nextInt();
		int day = switch(month) {
		case 1, 3, 5, 7, 8, 10, 12 -> {
			System.out.println("�Ѵ��� 31�� �Դϴ�.");
			yield 31; // <- �̰��� ��ȯ ���̴�.
		}
		case 4,6,9,11 -> {
			System.out.println("�� ���� 30�� �Դϴ�.");
			yield 30;
		}
		case2 ->{
			System.out.println("�Ѵ��� 28�� �Դϴ�.");
			yield 28;
		}
		default->{
			System.out.println("�������� �ʴ� �� �Դϴ�.");
			yield 0;
		}
		};
		
		System.out.println(month + "���� "+ day+ "�� �Դϴ�.");
	}

}
