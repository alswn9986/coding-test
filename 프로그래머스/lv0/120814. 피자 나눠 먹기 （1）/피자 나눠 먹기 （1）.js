function solution(n) {
    let cnt = 1;
    while (cnt * 7 < n) {
        cnt++;
    }
    return cnt;
}