import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long a = sc.nextLong();
        long b = sc.nextLong();
        long val = gcd(a, b);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < val; i++) {
            sb.append(1);
        }
        System.out.println(sb);
    }
    public static long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}