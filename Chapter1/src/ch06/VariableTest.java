package ch06;

public class VariableTest {

	public static void main(String[] args) {

		byte bnum = -128; // -128~ +127까지 표현가능 2(7)
		// 128 ->error
		System.out.println(bnum);
		
//		길이제한
//		int num = 12345678900;(x)
//		long lNum = 123456789000;(x)
		long lNum = 123456789000L;//(헷갈리니 대문자)
		System.out.println(lNum);
	}

}
