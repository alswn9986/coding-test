function solution(my_string, n) {
    let answer = '';
    let myStringArr = [...my_string];
    for (str of myStringArr) {
        answer += str.repeat(n);
    }
    return answer;
}