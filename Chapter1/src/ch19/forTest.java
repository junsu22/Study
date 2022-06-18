package ch19;

public class forTest {

	public static void main(String[] args) {
// for 문 
// 초기화 , 조건체크 , 증감순 수행 . 배열과 많이 사용됨
		int count = 1;
		int sum = 0;

		for (int i = 0; i < 10; i++, count++) {

			sum += count;
		}
		System.out.println(sum);

//	while 문 	
//	조건이 맞지않으면 수행되는 부분 없음 .참인 동안 반복 수행 true, false 인경우 주로 사용.
		int num = 1;
		int total = 0;

		while (num <= 10) {

			total += num;
			num++;

		}
		System.out.println(total);

	}

}
