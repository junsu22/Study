package ch04;

public class StudentTest {

	public static void main(String[] args) {
//		Student �� ������ Ÿ�� . 
//		���� �̸� student
//		������ Ÿ�� + �����̸� = new + ������
//		�ν��Ͻ� : Ŭ������ ������� �������� �ν��Ͻ��� ������ �� �ִ�.
//		ex)�������� �л��� �����ؼ� �л� ��� �Ѵ�.
		Student studentLee = new Student();

		studentLee.studentID = 12345;
		studentLee.setStudentName("Lee");
		studentLee.address = "���� ������";

		studentLee.showStudentInfo();
//	���� �޼ҵ��� ".+@" �������� java���� �������ִ� �������, �޼ҵ�� 
//		�л� 1 ��. 

//			�л�2 �߰�

		Student studentKim = new Student();
		studentKim.studentID = 54321;
		studentKim.studentName = "Kim";
		studentKim.address = "��⵵ ������";

		studentKim.showStudentInfo();

	}

}

// ���
//12345�й� �л� �̸��� �̰�,  �ּҴ¼��� �������Դϴ�.
//54321�й� �л� �̸��� �̰�,  �ּҴ°�⵵ �������Դϴ�.
