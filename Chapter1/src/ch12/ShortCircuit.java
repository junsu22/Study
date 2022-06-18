package ch12;

public class ShortCircuit {

	public static void main(String[] args) {

//		논리곱&&은 두항의 결과가 모두 ture 일때만 ture
//		--앞의 항의 결과가 false 이면 뒤 항의 결과를 평가하지 않음.
//		논리합(||)은 두 항의 결과가 모두 false 일 때만 결과가 false 
//		--앞의 항의 결과가 true 이면 뒤 항의 결과를 평가하지 않음 .

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


// 출력

//false
//20
//2
//true
//30
//4

