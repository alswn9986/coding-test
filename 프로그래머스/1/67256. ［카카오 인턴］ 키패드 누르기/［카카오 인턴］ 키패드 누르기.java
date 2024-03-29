import java.util.*;

class Solution {
    static final int[] USE_LEFT = {1, 4, 7};
    static final int[] USE_RIGHT = {3, 6, 9};
    
    public String solution(int[] numbers, String hand) {
        // numbers: 순서대로 누를 번호
        // hand: 왼손잡이(left), 오른손잡이(right)
        // 키패드의 번호는 거리 계산을 위해 *은 10, 0은 11, #은 12로 계산
        
        int leftPrev = 10;   // 왼손으로 마지막 누른 숫자 (디폴트 *)
        int rightPrev = 12;  // 오른손으로 마지막 누른 숫자 (디폴트 #)
        
        String answer = "";
        for (int i = 0; i < numbers.length; i++) {
            // 현재 누를 번호 (0일 경우 11로 대체)
            int current = numbers[i] == 0 ? 11 : numbers[i];
            
            // 왼쪽 손이 누를 범위에 포함된 번호는 바로 처리 (1, 4, 7)
            if (isContain(USE_LEFT, current)) {
                answer += "L";
                leftPrev = current;
            }
            // 오른쪽 손이 누를 범위에 포함된 번호는 바로 처리 (3, 6, 9)
            else if (isContain(USE_RIGHT, current)) {
                answer += "R";
                rightPrev = current;
            }
            // 가운데 있는 번호들 처리 (2, 5, 8, 0)
            else {
                String select = "";
                int leftDistance = calcDistance(Math.abs(current - leftPrev));
                int rightDistance = calcDistance(Math.abs(current - rightPrev));

                if (leftDistance > rightDistance) {
                    select = "R";
                } else if (leftDistance < rightDistance) {
                    select = "L";
                } else {    // 왼손, 오른손 모두 거리가 같을 때
                    select = "left".equals(hand) ? "L" : "R";
                } 
                
                if ("L".equals(select)) {
                    leftPrev = current;
                } else {
                    rightPrev = current;
                }
                answer += select;
            }
        }
        return answer;
    }
    
    // 배열에 요소가 포함된지 확인
    public static boolean isContain(int[] arr, int val) {
        for (int num : arr) {
            if (num == val)
                return true;
        }
        return false;
    }
    
    // 번호 간 거리 계산
    // 상하좌우 순서로 -3, 3, -1, 1로 계산
    // -1, 1은 최대 2칸만 이동 가능
    public static int calcDistance(int val) {
        int q = val / 3; // 3으로 나눠지지 않으면 나머지는 1 또는 2이므로 좌우로 이동한 횟수에 추가
        int r = val % 3;
        return q + r;
    }
}