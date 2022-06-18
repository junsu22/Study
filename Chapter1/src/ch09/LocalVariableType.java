package ch09;

public class LocalVariableType {

	public static void main(String[] args) {
//		지역변수 자료형 없이 사용하기 
//		추론가능한 변수에 대해 자료형을 선언하지 않음 
//		한번 선언하여 추론된 변수는 다른 타입의 값을 대입할 수 없음
//		지역변수만 사용 가능
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
// 출력
//10
//10.0
//hello
