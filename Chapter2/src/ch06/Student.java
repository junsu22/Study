package ch06;

public class Student {
	
	public int studentNumber;
	public String studentName;
	public int grade;
	
//	StudentTest Ŭ���� ���Ͽ��� ���� ���� . ����Ʈ �����ڸ� ����ϰ� ������ ����� �ָ�ȴ�.
	public Student() {}
	
	public Student(int studentNumber, String studentName, int grade) {
		this.studentNumber = studentNumber;
		this.studentName = studentName;
		this.grade = grade; 
//		studentNumber�� ���������� ã������ �Ѵ� . 
//		this �� ����� �Ѵ�. ���� �̸��� �ٸ��ٸ� �������.
	}
	
	
	public String showStudentInfo() {
		
		
		return studentName + "�л��� �й���  "+ studentNumber + "�̰�, "+ grade + "�г� �Դϴ�.";
	}
	
	

}
