package ch06;

public class Student {
	
	public int studentNumber;
	public String studentName;
	public int grade;
	
//	StudentTest 클래스 파일에서 오류 날것 . 디폴트 생성자를 사용하고 싶으면 만들어 주면된다.
	public Student() {}
	
	public Student(int studentNumber, String studentName, int grade) {
		this.studentNumber = studentNumber;
		this.studentName = studentName;
		this.grade = grade; 
//		studentNumber를 가까운곳에서 찾으려고 한다 . 
//		this 를 써줘야 한다. 변수 이름이 다르다면 상관없다.
	}
	
	
	public String showStudentInfo() {
		
		
		return studentName + "학생의 학번은  "+ studentNumber + "이고, "+ grade + "학년 입니다.";
	}
	
	

}
