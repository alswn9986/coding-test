import java.util.*;

class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        
        // clothes 배열의 종류를 key로, 종류별 개수를 value로 map에 넣어줌 
        HashMap<String, Integer> map = new HashMap<>();
        for (int i = 0; i < clothes.length; i++) {
            // 종류, 개수의 쌍으로 넣어줌
            // 개수는 map에 그 종류가 없으면 0을 넣어줌
            map.put(clothes[i][1], map.getOrDefault(clothes[i][1], 0) + 1);
        }
        
        // 종류, 개수의 쌍으로 이루어진 map에서 key만 추출
        Set<String> set = map.keySet();
        for (String key : set) {
            // answer에 value + 1 한 값을 누적하여 곱해줌
            answer = answer * (map.get(key) + 1);
        }
        
        // 안 입는 경우
        return answer - 1;
    }
}