function solution(n) {
    let answer = 0;
    let i = 0;
    while (i <= n) {
        if (i % 2 === 0) {
           answer += i; 
        }
        i++;
    }
    return answer;
}