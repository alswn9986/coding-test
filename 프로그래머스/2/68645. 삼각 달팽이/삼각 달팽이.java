class Solution {
    public int[] solution(int n) {
        int[][] array = new int[n][n];
        int x = 0;
        int y = -1;
        int num = 1;
        
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                switch (i % 3) {
                    case 0:
                        y++;
                        break;
                    case 1:
                        x++;
                        break;
                    case 2:
                        x--;
                        y--;
                        break;
                }
                array[x][y] = num++;
            }
        }
        
        int[] answer = new int[num - 1];
        int idx = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (array[j][i] == 0) {
                    break;
                }
                answer[idx++] = array[j][i];
            }
        }
        return answer;
    }
}