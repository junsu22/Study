package ch10;

public class OperaterTest {

	public static void main(String[] args) {

		int gameScore = 150;
		
		int lastScore = gameScore++; // 150
//		int lastScore = ++gameScore; // 151
//		gameScore +=1; gameScore = gameScore +1;
		
		
		System.out.println(lastScore);
		System.out.println(gameScore);
		
		
		
	}

}
