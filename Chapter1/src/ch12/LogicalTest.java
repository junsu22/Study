package ch12;

public class LogicalTest {

	public static void main(String[] args) {
//	&& :���� ������̾�߸� ����� ��. �ƴ϶�� ����
//	|| :���� ���� �ϳ��� �׸� ���̸� ����� �� ��� �����̸� ����
//	! :���� ���ΰ�� �������� �ٲ� , ������ ��� ������ �ٲ�
		
		int num1 = 10;
		int num2 = 20;

		boolean flag = (num1 > 0) && (num2 > 0);
		System.out.println(flag);

		flag = (num1 < 0) && (num2 > 0);
		System.out.println(flag);

		
//		�����ϳ��� 
		flag = (num1 > 0) || (num2 > 0);
		System.out.println(flag);

		flag = (num1 < 0) || (num2 < 0);
		System.out.println(flag);

		flag = !(num1 > 0);
		System.out.println(flag);
	}

}


// ���
//true
//false
//true
//false
//false
