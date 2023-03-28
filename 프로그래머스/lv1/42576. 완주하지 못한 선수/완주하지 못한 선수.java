import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
        Arrays.sort(participant);   // 참여한 선수 정렬
        Arrays.sort(completion);    // 완주한 선수 정렬
        int i;
        for (i = 0; i < completion.length; i++) {
            // 참여한 선수와 완주한 선수를 비교하여 다르면 바로 반환
            // 문제 조건 중 'completion의 길이는 participant의 길이보다 1 작습니다.'라는 말은
            // 완주하지 못한 선수는 한 명이라는 의미
            if (!participant[i].equals(completion[i])) {
                return participant[i];
            }
        }
        return participant[i];
    }
}