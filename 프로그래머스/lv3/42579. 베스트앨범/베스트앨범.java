import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        
        // 장르, 장르별 총 재생횟수
        Map<String, Integer> playsMap = new HashMap<>();
        for (int i = 0; i < genres.length; i++) {
            playsMap.put(genres[i], playsMap.getOrDefault(genres[i], 0) + plays[i]);
        }

        // 장르, 장르별 총 재생횟수 내림차순으로 정렬 (가장 많이 재생된 장르 -> 가장 적게 재생된 장르)
        List<String> genresList = new ArrayList<>(playsMap.keySet());
        Collections.sort(genresList, (o1, o2) -> (playsMap.get(o2).compareTo(playsMap.get(o1))));

        // 장르, 장르 내 노래 고유번호 목록
        Map<String, List<Integer>> numMap = new HashMap<>(); 
        for (int i = 0; i < genres.length; i++) {
            List<Integer> temp = new ArrayList<>();
            if (numMap.containsKey(genres[i])) {
                temp = numMap.get(genres[i]);
                temp.add(i);
                numMap.put(genres[i], temp);
            } else {
                temp.add(i);
                numMap.put(genres[i], temp);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        for (String genre : genresList) {
            int idx = 0;
            // 장르 내에서 많이 재생된 순서대로 정렬 (같을 경우 고유 번호가 낮은 거 먼저)
            Collections.sort(numMap.get(genre), (o1, o2) -> (plays[o1] == plays[o2] ? o1 - o2 : plays[o2] - plays[o1]));
            for (int n : numMap.get(genre)) {
                if (idx < 2) {
                    result.add(n);  // 장르 당 2개만 결과에 추가
                }
                idx++;
            }
        }
        
        return result.stream().mapToInt(i -> i).toArray();
    }
}