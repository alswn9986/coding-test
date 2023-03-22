function solution(n, t) {
    let answer = n;
    while (t >= 1) {
        answer *= 2;
        t--;
    }
    return answer;
}