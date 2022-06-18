package ch06;

public class StudentTest {

	public static void main(String[] args) {

		Student studentLee = new Student();
		studentLee.grade = 1;
		System.out.println(studentLee.showStudentInfo());
//		null학생의 학번은  0이고, 0학년 입니다. (초기화가 된것을 알수 있다.)
		Student studentKim = new Student(123456, "Kim", 3);
		System.out.println(studentKim.showStudentInfo());
//		Kim학생의 학번은  123456이고, 3학년 입니다.

	}

}
