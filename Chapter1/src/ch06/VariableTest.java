package ch06;

public class VariableTest {

	public static void main(String[] args) {

		byte bnum = -128; // -128~ +127���� ǥ������ 2(7)
		// 128 ->error
		System.out.println(bnum);
		
//		��������
//		int num = 12345678900;(x)
//		long lNum = 123456789000;(x)
		long lNum = 123456789000L;//(�򰥸��� �빮��)
		System.out.println(lNum);
	}

}
