package ch13;

import java.util.Scanner;

public class ConitionTest {

	public static void main(String[] args) {
// ���ǿ�����
//		���׿�����
//		���ǽ��� ����� ���� ���� ������ ��쿡 ���� �ٸ������ �����.
//		if(���ǹ�)�� ������ ǥ���� �� ����� �� ����.

//		�Է¹��� ū���� ���
		int max;
		System.out.println("�Է� ���� �� ���� ū ���� ����ϼ���\n");

		Scanner scanner = new Scanner(System.in);
		System.out.println("�Է�1:");
		int num1 = scanner.nextInt();
		System.out.println("�Է�2:");
		int num2 = scanner.nextInt();

		max = (num1 > num2) ? num1 : num2;
		System.out.println(max);
	}

}
