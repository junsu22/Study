package ch06;

public class StudentTest {

	public static void main(String[] args) {

		Student studentLee = new Student();
		studentLee.grade = 1;
		System.out.println(studentLee.showStudentInfo());
//		null�л��� �й���  0�̰�, 0�г� �Դϴ�. (�ʱ�ȭ�� �Ȱ��� �˼� �ִ�.)
		Student studentKim = new Student(123456, "Kim", 3);
		System.out.println(studentKim.showStudentInfo());
//		Kim�л��� �й���  123456�̰�, 3�г� �Դϴ�.

	}

}
