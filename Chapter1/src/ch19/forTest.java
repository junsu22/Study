package ch19;

public class forTest {

	public static void main(String[] args) {
// for �� 
// �ʱ�ȭ , ����üũ , ������ ���� . �迭�� ���� ����
		int count = 1;
		int sum = 0;

		for (int i = 0; i < 10; i++, count++) {

			sum += count;
		}
		System.out.println(sum);

//	while �� 	
//	������ ���������� ����Ǵ� �κ� ���� .���� ���� �ݺ� ���� true, false �ΰ�� �ַ� ���.
		int num = 1;
		int total = 0;

		while (num <= 10) {

			total += num;
			num++;

		}
		System.out.println(total);

	}

}
