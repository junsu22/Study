package ch09;

public class LocalVariableType {

	public static void main(String[] args) {
//		�������� �ڷ��� ���� ����ϱ� 
//		�߷а����� ������ ���� �ڷ����� �������� ���� 
//		�ѹ� �����Ͽ� �߷е� ������ �ٸ� Ÿ���� ���� ������ �� ����
//		���������� ��� ����
		var i = 10;
		var j = 10.0;
		var str = "hello";

		System.out.println(i);
		System.out.println(j);
		System.out.println(str);

		str = "test";
//		str = 3;

	}

}
// ���
//10
//10.0
//hello
