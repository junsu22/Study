package ch13;

public class BitTest {

	public static void main(String[] args) {
//		��Ʈ ������
//		���Կ����ڿʹ� �ٸ� �����ڰ� �Բ� ����.
		int num1 = 5;
		int num2 = 10;

		System.out.println(num1 | num2); // 15
		// |(OR) 0|0 0��ȯ �� �ܴ� 1
		System.out.println(num1 & num2); // 0
		// &(AND) 1&1 1 ��ȯ �� �ܴ� 0
		System.out.println(num1 ^ num2); // 15
		// ^(XOR) �ΰ��� ��Ʈ�� ���� �ٸ���쿡 1�� ��ȯ
		System.out.println(num1 << 2); // 20
		// <<,>>(shift) a<<2 ���� a�� ���� �������� 2��ŭ �̵�
		System.out.println(num1); // 5
		System.out.println(num1 <<= 2); // 20
		System.out.println(num1); // 20

	}

}



//���
//15
//0
//15
//20
//5
//20
//20

