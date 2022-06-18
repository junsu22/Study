package ch16;

public class SwitchCaseTest {

	public static void main(String[] args) {
// 		switch-case 문
// if, else 문을 사용할 때 가독성이 좋게 구현
// break 문을 사용하여 조건이 만족되면 switch 블럭을 빠져나온다.
// java 14 부터는 간결해진 표현식지원 (break 를 사용안함)

		// 한 달이 며칠인지 알려주는 프로그램 구현
		int month = 10;
		int day;
		switch (month) {

//		case 1: 
//			day = 31;
//			break;
//		
//		case 2: 
//			day = 28;
//			break;
//		
//		case 3: 
//			day = 31;
//			break;
//		

//		코드 줄이기
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			day = 31;
			break;
		case 2:
			day = 28;
			break;

		case 4:
			day = 30;
			break;
		case 6:
			day = 30;
			break;
		case 9:
			day = 30;
			break;
		case 11:
			day = 30;
			break;
		default:
			day = 0;
			System.out.println("존재하지 않는 달 입니다.");
		}
		System.out.println(month + "월은 " + day + "일 입니다.");

	}

}
