package ch03;

public class FunctionTest {

	public static int addNum(int num1, int num2) {
//		��ȯ ������ Ÿ�� �� int
//		�޼ҵ� �̸��� addNum
//		�ΰ��� �Ű� ������ �޾Ҵ�.
		int result = num1 + num2;
		return result;
	}

//	��ȯ ���� ���� ��� void ����
	public static void sayHello(String greeting) {
		System.out.println(greeting);
	}

//	��ȯ�� �ϰ� �Ű������� ���� 
//	1~100���� ���ؼ� ��ȯ ���� �� .
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
		sayHello("�ȳ��ϼ���"); // ��ȯ �� ����
		total = calcSum(); // 1~100���� ���ؼ� ��ȯ
		System.out.println(total);
	}

}

//���
//30
//�ȳ��ϼ���
//5050

