import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        // 작업이 끝나기까지 남은 일수 구하기
        List<Integer> left = new ArrayList<>();
        for (int i = 0; i < progresses.length; i++) {
            left.add((int) Math.ceil((100 - progresses[i]) / (double) speeds[i]));
        }
        
        // 앞에 작업이 끝나는 날짜 확인하기
        List<Integer> answer = new ArrayList<>();
        int first = left.get(0);
        int cnt = 1;
        for (int i = 1; i < left.size(); i++) {
            int l = left.get(i);
            if (l <= first) {
                cnt ++;
            } else {
                answer.add(cnt);
                cnt = 1;
                first = l;
            }
            if (i == left.size() - 1) {
                answer.add(cnt);
            }
        }
        
        return answer.stream().mapToInt(i -> i).toArray();
    }
}