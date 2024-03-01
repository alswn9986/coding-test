import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 0; i < N; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            
            System.out.println(a * b / gcd(a, b));
        }
    }
    public static int gcd(int a, int b) {   // 최대 공약수
        return b == 0 ? a : gcd(b, a % b);
    }
}