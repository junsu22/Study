package ch12;

public class ShortCircuit {

	public static void main(String[] args) {

//		������&&�� ������ ����� ��� ture �϶��� ture
//		--���� ���� ����� false �̸� �� ���� ����� ������ ����.
//		������(||)�� �� ���� ����� ��� false �� ���� ����� false 
//		--���� ���� ����� true �̸� �� ���� ����� ������ ���� .

		int num1 = 10;
		int i = 2;

		boolean value = ((num1 = num1 + 10) < 10) && ((i = i + 2) < 10);
		System.out.println(value);
		System.out.println(num1);
		System.out.println(i);

		value = ((num1 = num1 + 10) < 10) || ((i = i + 2) < 10);
		System.out.println(value);
		System.out.println(num1);
		System.out.println(i);

	}

}


// ���

//false
//20
//2
//true
//30
//4
