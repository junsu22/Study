package ch04;

public class StudentTest {

	public static void main(String[] args) {
//		Student 가 데이터 타입 . 
//		변수 이름 student
//		데이터 타입 + 변수이름 = new + 생성자
//		인스턴스 : 클래스를 기반으로 여러개의 인스턴스가 생성될 수 있다.
//		ex)여러개의 학생을 생성해서 학사 운영을 한다.
		Student studentLee = new Student();

		studentLee.studentID = 12345;
		studentLee.setStudentName("Lee");
		studentLee.address = "서울 강남구";

		studentLee.showStudentInfo();
//	만든 메소드임 ".+@" 나머지는 java에서 제공해주는 멤버변수, 메소드들 
//		학생 1 끝. 

//			학생2 추가

		Student studentKim = new Student();
		studentKim.studentID = 54321;
		studentKim.studentName = "Kim";
		studentKim.address = "경기도 성남시";

		studentKim.showStudentInfo();

	}

}

// 출력
//12345학번 학생 이름은 이고,  주소는서울 강남구입니다.
//54321학번 학생 이름은 이고,  주소는경기도 성남시입니다.
