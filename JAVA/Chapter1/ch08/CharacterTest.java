package ch08;

public class CharacterTest {

	public static void main(String[] args) {

		char ch1 = 'A';
		// 숫자사용 실생활에서는 안쓰는게 좋다..
		System.out.println(ch1);
		System.out.println((int)ch1); //데이터 형을 강제 변환
		
		char ch2  = 66;
		System.out.println(ch2);
		System.out.println((char)ch2);
		
		int ch3 = 67;
		System.out.println(ch3);
		System.out.println((char)ch3);

		
//		유니코드 써보기
		char han ='한'; 
		char ch = '\uD55C'; 
		// 슬래시 , u를 써주면 된다. 유니코드 표 참조하기
		System.out.println(han);
		System.out.println(ch);
		
	}

}
