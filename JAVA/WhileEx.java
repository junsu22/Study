public class WhileEx {
    public static void main(String[] args) {
        int total = 0; // i의 값을 누적할 변수를 선언
        int i = 1;
        while (i <= 100) {
            total = total + i;
            i++;
        }
    }
}
